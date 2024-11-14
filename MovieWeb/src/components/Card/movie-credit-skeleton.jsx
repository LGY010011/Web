import styled from "styled-components";
import CreditSkeleton from "./credit-skeleton";

const MovieCreditSkeleton=({number})=>{
    
    return (
        <Block>
            {new Array(number).fill(0).map((_,idx)=>
                <CreditSkeleton />
            )}
        </Block>
    )
}

export default MovieCreditSkeleton;

const Block=styled.div`
    display: flex;
    flex-wrap: wrap; /* 요소들이 줄바꿈되도록 설정 */
    color: white;
    background-color: black;
    padding: 20px; /* 추가된 패딩 */
    justify-content: center;
    align-items: center;
    gap:10px;
    
`