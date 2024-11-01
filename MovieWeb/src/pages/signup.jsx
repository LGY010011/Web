// signup.jsx
import useForm from '../hooks/useCustomForm';
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import styled from 'styled-components';

const SignupPage = () => {
    const schema=yup.object().shape({
        email: yup.string().email().required('이메일 입력은 필수입니다.'),
        password: yup.string().min(8,'비밀번호는 8자 이상입니다.')
                        .max(16,'비밀번호는 16자 이하입니다.').required(),
    })

    const {register, handleSubmit, formState:{errors}}=useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit=(data)=>{
        console.log('폼 제출')
        console.log(data)
    }

    return (
        <SignUpForm>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type={'email'} placeholder='이메일을 입력하세요'{...register("email")}/>
                <p>{errors.email?.message}</p>
                <input type={'password'} placeholder='비밀번호를 입력하세요' {...register("password")}/>
                <p>{errors.password?.message}</p>
                <input type={'submit'}/>
            </form>
        </SignUpForm>
    );
};

export default SignupPage;

const SignUpForm=styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height:100%;
`