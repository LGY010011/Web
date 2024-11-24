import ReviewList from "../components/review-list";
import { useParams } from "react-router-dom";


const ReviewPage=()=>{
    const {movieId} = useParams();

    return(
        <>
        <ReviewList url={`/movie/${movieId}/reviews?language=ko-KR&page=1`}/>
        </>
    )
}

export default ReviewPage;