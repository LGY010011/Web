import styled from"styled-components"
import {useDispatch, useSelector} from "react-redux";
import cartItems from "../constants/cartItems";
import CartItem from "./CartItem";
import { removeAllItem } from "../features/cart/cartSlice";
import { openModal } from "../features/modal/modalSlice";


const CartContainer=()=>{
    const {amount, cartItems, total}=useSelector((store)=>store.cart);
    const dispatch=useDispatch();
    return(
        <Cart>
            <header>
                <h2>당신이 선택한 음반</h2>
            </header>
            <div>
                {cartItems.map((item)=>{
                    return <CartItem key={item.id} {...item} />;
                })}
            </div>
            <footer>
                <hr/>
                <CartTotal>
                    <h4>
                        총 가격 <span>{total}원</span>
                    </h4>
                </CartTotal>
                <ClearButton onClick={()=>{
                    dispatch(openModal());
                }}>
                    장바구니 초기화
                </ClearButton>
            </footer>
        </Cart>
    )
}

export default CartContainer;

const Cart = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const CartTotal = styled.div`
    margin-top: 20px;
    h4 {
        font-size: 18px;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
            font-size: 20px;
            color: #455b82; 
            font-weight: bold;
        }
    }
`;

const ClearButton = styled.button`
    margin-top: 10px;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #617cab;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #2c3e50;
    }

    &:focus {
        outline: none;
    }
`;