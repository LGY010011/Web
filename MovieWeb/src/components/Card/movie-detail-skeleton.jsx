import styled, { keyframes } from "styled-components";
    
    
const MovieDetailSkeleton=()=>{

    return (
        <BackgroundImage>
        </BackgroundImage>
    )

}

export default MovieDetailSkeleton;
    
const skeleton=keyframes`
    0%{ opacity:1;}
    30%{ opacity:0.7;}
    50%{ opacity:0.4;}
    80%{ opacity:0.8;}
    100%{opacity:1;}
`

const BackgroundImage=styled.div`
    width: 100%;
    height: 500px;
    border-radius: 40px;
    background:#e0e0e0;
    animation:${skeleton} 1.5s infinite linear alternate;
`

