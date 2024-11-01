// login.jsx
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import styled from 'styled-components';
import useForm from '../hooks/useCustomForm';
import { validateLogin } from '../utils/validate';

const LoginPage = () => {
    
    const login=useForm({
        initialValue: {
            email:'',
            password:'',
        },
        validate: validateLogin
    })

    const handlePressLogin=()=>{
        console.log(login.values.email, login.values.password)
    }
    
    // 로그인 버튼 비활성화 조건
    const isDisabled = !!login.errors.email || !!login.errors.password || !login.values.email || !login.values.password;

    return(
        <LoginForm>
            <Title>로그인</Title>
            <Input error={login.touched.email && login.errors.email}type={'email'} placeholder={'이메일을 입력해주세요'} 
                            {...login.getTextInputProps('email')} />
            {login.touched.email && login.errors.email && <ErrorText>{login.errors.email}</ErrorText>}
            
            <Input  error={login.touched.password && login.errors.password} type={'password'} placeholder={'비밀번호를 입력해주세요'} 
                            {...login.getTextInputProps('password')} />
            {login.touched.password && login.errors.password && <ErrorText>{login.errors.password}</ErrorText>}

            <Button onClick={handlePressLogin} type={'submit'} disabled={isDisabled} > 로그인 </Button>
        </LoginForm>
    )
};

export default LoginPage;

const LoginForm=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 30px;
  
`

const Title=styled.h1`
    color:white;
`

const Input=styled.input`
    margin:10px 0;
    padding: 0px;
    width:300px;
    height:45px;
    border:1px solid #ccc;
    border-radius:4px;

    border: ${props=>props.error?'2px solid red':'1px solid #ccc'};

    &:focus {
        border-color:#007bff;
    }
`

const ErrorText=styled.h1`
    color:red;
    font-size:12px;
`

const Button=styled.button`
    background-color: ${({ disabled }) => (disabled ? 'gray' : '#CD4275')};
    font-size:15px;
    width:300px;
    height:45px;
    margin-top: 30px;
    border-radius:4px;
    border:none;
    padding: 10px;
    box-sizing: border-box; /* padding을 포함하여 총 너비를 계산 */
    color:white;
`