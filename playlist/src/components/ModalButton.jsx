import { useDispatch, useSelector } from "react-redux";
import { removeAllItem } from "../features/cart/cartSlice";
import styled from "styled-components";
import { closeModal } from "../features/modal/modalSlice";

const ModalButton=()=>{
    const dispatch=useDispatch();
    //const {isOpen}=useSelector((state)=> state.modal);

    return(
        <BtnContainer>
            <Button onClick={()=>{
                dispatch(removeAllItem());
                // TODO 모달꺼지기ㅣ
                dispatch(closeModal());
            }}>
                네
            </Button>
            <Button onClick={()=>{
                // TODO 모달꺼지기ㅣ
                dispatch(closeModal());
            }}>
                아니요
            </Button>
        </BtnContainer>
    );
};
export default ModalButton;

// 스타일링
const BtnContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 20px; /* 버튼 사이에 간격을 추가 */
    margin-top: 20px;
`;

const Button = styled.button`
    padding: 12px 30px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    background-color: #617cab; 
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: #2c3e50; 
        transform: scale(1.05);
    }

`;