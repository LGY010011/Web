import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { increase, decrease, removeItem } from '../features/cart/cartSlice';

const CartItem = ({ id, title, singer, price, img, amount }) => {
    const dispatch=useDispatch();


    return (
        <ItemContainer>
            <ItemImage>
                <img src={img} alt={title} />
            </ItemImage>
            <ItemDetails>
                <h3>{title}</h3>
                <p>가수: {singer}</p>
                <p>가격: ₩{price}</p>
                <p>수량: 
                    <QuantityButton onClick={()=>{
                        if(amount===1){
                            dispatch(removeItem(id));
                        }else
                            dispatch(decrease(id))
                    }}>-</QuantityButton>
                    {amount}
                    <QuantityButton onClick={()=>dispatch(increase(id))}>+</QuantityButton>
                </p>
            </ItemDetails>
          
        </ItemContainer>
    );
};




export default CartItem;

// 스타일링
const ItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px;
    border-bottom: 1px solid #e0e0e0;
    align-items: center;
`;

const ItemImage = styled.div`
    width: 80px;
    height: 80px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
    }
`;

const ItemDetails = styled.div`
    flex: 1;
    margin-left: 15px;
    h3 {
        font-size: 18px;
        margin: 0;
    }
    p {
        margin: 5px 0;
        font-size: 16px;
    }
`;



const QuantityButton = styled.button`
    margin: 0 5px;
    padding: 5px 10px;
    background-color: #617cab;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: #2c3e50;
    }
`;
