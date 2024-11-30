import { useSelector } from "react-redux";
import styled from "styled-components";
import { CartIcon } from "../constants/icons";

const Navbar=()=>{
    const {amount}=useSelector((store)=>store.cart);
    console.log(amount);
    return(
        <Nav>
            <NavCenter>
                <h3>REAL DATA UMC PlayList</h3>
                <NavConatainer>
                    <CartIcon/>
                    <TotalAmount>{amount}</TotalAmount>
                </NavConatainer>
            </NavCenter>
        </Nav>
    )
}
export default Navbar;




const Nav = styled.nav`
    background-color: #2c3e50;
    color: white;
    padding: 15px 30px;
`;

const NavCenter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavConatainer=styled.div`
    display:flex;
    flex-direction:row;
    width:40px;

`


const TotalAmount = styled.div`
    color:white;
`;
