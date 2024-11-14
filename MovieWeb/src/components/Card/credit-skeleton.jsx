import styled,{ keyframes }  from "styled-components"

const CreditSkeleton=()=>{
    return(
        <Card>
            <CardImage/>
        </Card>
        
    )
}

export default CreditSkeleton;


const skeleton=keyframes`
    0%{ opacity:1;}
    30%{ opacity:0.7;}
    50%{ opacity:0.4;}
    80%{ opacity:0.8;}
    100%{opacity:1;}
`
const CardImage=styled.div`
    width: 80px; 
    height:80px; 
    border-radius: 50%;
    background:#e0e0e0;
    animation:${skeleton} 1.5s infinite linear alternate;
`

const Card=styled.div`
    width:100px;
    height:130px;
`