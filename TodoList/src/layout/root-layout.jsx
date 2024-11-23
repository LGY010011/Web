import { AiOutlineDownSquare } from "react-icons/ai";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { AiTwotoneHighlight } from "react-icons/ai";

const RootLayout=()=>{
    return(
        <MainContainer>
            <Header>
                <AiTwotoneHighlight size="27" color="#006400"/>
                <h2>&nbsp;UMC Todo List&nbsp;</h2>
                <AiTwotoneHighlight size="27" color="#006400"/>
            </Header>
            <Outlet />
        </MainContainer>
    )
}
export default RootLayout;

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;      
    padding: 20px;
    width: 100%; 
    box-sizing: border-box;   /* 패딩이 요소 크기에 포함되도록 */
`;

const Header = styled.header`
    display: flex;
    align-items: center;
    margin-bottom:50px;
    //border-bottom:1px solid black;
`;