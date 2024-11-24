import { useQuery } from "@tanstack/react-query";
import fetchMovies from "../apis/fetch-movie";
import styled from "styled-components";
import Review from "./Card/review";
import ReviewSkeleton from "./Card/review-skeleton";

const ReviewList=({url})=>{
    const {data: reviews, isLoading, isError}=useQuery({
        queryKey: ['reviews', url], 
        queryFn:fetchMovies
    });

    if(isLoading){
        return <ReviewSkeleton />
    }
    if(isError){
        return <p>Error</p>;
    }

    console.log(reviews);

    return(
        <ReviewListContainer>
            {reviews && reviews.results.length > 0 ? (
                reviews.results.map((review) => (
                    <Review key={review.id} review={review} />
                ))
            ) : (
                <NoReviews>리뷰가 없습니다.</NoReviews>
            )}
        </ReviewListContainer>
    )
}

export default ReviewList;

const ReviewListContainer=styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
`;
const NoReviews = styled.p`
    color: #aaa;
    font-size: 1.2rem;
`;