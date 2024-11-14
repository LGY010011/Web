import React, { createContext, useState, useContext } from 'react';

// AuthContext 생성
const AuthContext = createContext();

// AuthProvider 컴포넌트 - 앱 전체에서 로그인 상태를 관리
export const AuthProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);
    const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken') || null);
    const [email, setEmail]=useState(localStorage.getItem('email')||null);

    // 로그인 상태 변경 함수
    const login = (email, accessToken,refreshToken) => {
        setIsLogin(true);
        setAccessToken(accessToken);
        setEmail(email);
        localStorage.setItem('accessToken', accessToken);  // 로컬 스토리지에 토큰 저장
        localStorage.setItem('refreshToken', refreshToken)
        localStorage.setItem('email',email);
    };

    // 로그아웃 함수
    const logout = () => {
        setIsLogin(false);
        setAccessToken(null);
        localStorage.removeItem('email');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
    };

    //메일 가져오는 함수
    // const getEmail=()=>{
    //     localStorage.getItem('email');
    // }

    return (
        <AuthContext.Provider value={{ isLogin, accessToken,email, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// AuthContext를 사용하는 커스텀 훅
export const useAuth = () => {
    return useContext(AuthContext);
};