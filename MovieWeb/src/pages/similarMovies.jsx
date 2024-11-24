import { useParams } from "react-router-dom"
import MovieList from "../components/movie-list";

const SimilarMoviesPage=()=>{

    const {movieId} = useParams();

    const url=`/movie/${movieId}/similar?language=ko-KR&page=1`
    return(
        <MovieList url={`${import.meta.env.VITE_TMDB_MOVIE_API_URL}${url}`}/>
    )
}

export default SimilarMoviesPage;