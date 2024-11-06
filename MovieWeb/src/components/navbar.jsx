// navbar.jsx
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const navigate = useNavigate();
    const { isLogin, logout } = useAuth();
    const [email, setEmail]=useState('');
    
    useEffect(() => {
        console.log("isLogin 상태:", isLogin);  // isLogin 상태 로그 찍기
        if (isLogin) {  // isLogin이 true일 때만 이메일을 가져오도록
            const userEmail = localStorage.getItem('email');
            console.log("이메일 갱신: ", userEmail);
            if (userEmail) {
                setEmail(userEmail.split('@')[0]); // 이메일 상태에 저장
            }
        }
    }, [isLogin]);  // isLogin이 변경될 때만 실행

    const handleLogout = () => {
        logout();  // 로그아웃 함수 호출
        setEmail('');  // 이메일 상태 초기화
        console.log("로그아웃됨, 이메일 상태 초기화");
        //navigate('/login');  // 로그인 페이지로 이동
    };



    return (
        <Nav>
            <StyledLink onClick={()=>{navigate('/');}}>
            <Youngcha>YOUNGCHA</Youngcha>
            </StyledLink>
            <Div>
                {isLogin ? ( //로그인 상태
                    <>
                        <UserInfo>{email}님 반갑습니다.</UserInfo>
                        <StyledLink >
                            <Login onClick={handleLogout}>로그아웃</Login>
                        </StyledLink>
                        
                    </>
                ) : (
                    <>
                        <StyledLink >
                            <Login onClick={()=>{navigate('login');}} >로그인</Login>
                        </StyledLink>
                        <StyledLink>
                            <SignIn onClick={()=>{navigate('signup');}}>회원가입</SignIn>
                        </StyledLink>
                    </>
                )};
            </Div>
        </Nav>
    );
};

export default Navbar;

const Nav=styled.nav`
    width:100%;
    height:100px;
    margin:0px;
    padding:0px;
    display:flex;
    justify-content: space-between; 
    align-items: center; 
    background-color:#282828;

`

const Youngcha=styled.div`
    color:#FF1493;
    font-weight:900;
    border: none;
    background-color:transparent;
    padding:20px;
    font-size:large;
`


const Login = styled.div`
    background-color: transparent;
    border: none;
    border-radius: 10px;
    color: white;
    margin:20px;
    padding:10px;

    &:hover {
        background-color: rgba(100, 100, 100, 0.8); /* 어두운 회색으로 변경 */
    }
`

const SignIn=styled.div`
    background-color: #FF1493;
    color:white;
    border: none;
    border-radius: 10px;
    margin:20px;
    padding:10px;
    &:hover {
        background-color: #D5006D; /* 어두운 핑크색으로 변경 */
    }
`

const StyledLink = styled.button`
    background-color: transparent;
    margin:0px;
    padding:0px;
    border:none;
    color: inherit; /* 부모의 색상(흰색)을 상속받음 */
    display: flex;
    align-items: center; /* 아이콘과 텍스트를 세로 정렬 */
`;

const Div=styled.div`
    display:flex;
    justify-content: space-between; 
    align-items: center; 
`
const UserInfo = styled.div`
    color: white;
    margin-right: 0px;
    font-size:14px;
`;