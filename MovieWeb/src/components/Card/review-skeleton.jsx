import styled,{ keyframes } from 'styled-components';


const ReviewSkeleton=()=>{
    return(
        <ReviewContainer/>
    )
}
export default ReviewSkeleton;

const skeleton=keyframes`
    0%{ opacity:1;}
    30%{ opacity:0.7;}
    50%{ opacity:0.4;}
    80%{ opacity:0.8;}
    100%{opacity:1;}
`

const ReviewContainer=styled.div`
    background-color: #e0e0e0;
    animation:${skeleton} 1.5s infinite linear alternate;
`