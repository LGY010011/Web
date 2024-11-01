// login.jsx
import {useForm} from '../../node_modules/react-hook-form/dist'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import styled from 'styled-components';
import { useState } from 'react';

const LoginPageTemp = () => {
    const schema=yup.object().shape({
        email: yup.string().email('이메일 형식이 아닙니다.').required('이메일 입력은 필수입니다.'),
        password: yup.string().min(8,'비밀번호는 8자 이상입니다.')
                        .max(16,'비밀번호는 16자 이하입니다.').required(),
    })

    const {register, handleSubmit, formState:{errors, isValid}}=useForm({
        resolver: yupResolver(schema),
        mode:'onChange', //입력 시마다 검사하겠다.
    });

    const onSubmit=(data)=>{
        console.log('폼 제출')
        console.log(data)
    }

    return (
        <LoginForm>
            <Title>로그인</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input type={'email'} placeholder='이메일을 입력하세요'{...register("email")}/>
                <Warn>{errors.email?.message}</Warn>
                <Input type={'password'} placeholder='비밀번호를 입력하세요' {...register("password")}/>
                <Warn>{errors.password?.message}</Warn>
                <Button type={'submit'} disabled={!isValid}>로그인</Button>
            </Form>
        </LoginForm>
    );
};

export default LoginPageTemp;

const LoginForm=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 30px;
  
`

const Title=styled.h1`
    color:white;
`

const Form=styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 480px;
    height: auto; 
`

const Input = styled.input`
    font-size:15px;
    width:100%;
    height:60px;
    margin-bottom: 10px; /* 요소 간의 간격 설정 */
    border-radius:10px;
    padding: 10px;
    box-sizing: border-box; /* padding을 포함하여 총 너비를 계산 */
`;

const Button=styled.button`
    background-color: ${({ disabled }) => (disabled ? 'gray' : '#CD4275')};
    font-size:15px;
    width:100%;
    height:60px;
    margin-bottom: 10px; /* 요소 간의 간격 설정 */
    border-radius:10px;
    border:none;
    padding: 10px;
    box-sizing: border-box; /* padding을 포함하여 총 너비를 계산 */
    color:white;

`

const Warn = styled.div`
    width: 100%; /* 전체 너비 사용 */
    text-align: left; /* 좌측 정렬 */
    margin-bottom: 10px; /* 요소 간의 간격 설정 */
    color: red; /* 경고 메시지 색상 */
`;
