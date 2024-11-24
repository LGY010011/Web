import styled from "styled-components";

const Review=({review})=>{
    const date = new Date(review.updated_at).toLocaleDateString();

    return (
        <ReviewContainer>
            <Author>{review.author}</Author>
            <Content>{review.content}</Content>
            <DDate>{date}</DDate>
        </ReviewContainer>
    )
}

export default Review;

const ReviewContainer=styled.div`
    background-color: #282828;
    padding: 15px;
    border-radius: 8px;
    color: white;

    &:hover {
        background-color: #333;
    }
`

const Author = styled.h3`
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: #CD4275;
`;

const Content = styled.p`
    font-size: 1rem;
    line-height: 1.5;
    color: #ccc;
    word-wrap: break-word;
`;

const DDate=styled.p`
    font-size: 1rem;
    line-height: 1.5;
    color: #ccc;
    word-wrap: break-word;
`