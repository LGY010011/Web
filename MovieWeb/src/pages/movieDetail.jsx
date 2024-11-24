import { useParams } from 'react-router-dom';
import MovieDetail from '../components/movie-detail';
import MovieCredit from '../components/movie-credit';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MovieDetailPage = () => {
    const {movieId} = useParams();

    const navigate = useNavigate(); // navigate를 사용하여 페이지 이동

    const handleNavigateToSimilar = () => {
        // '/movies/{movieId}/similar'로 이동
        navigate(`/movies/${movieId}/similar`);
    };

    const handleNavigateToReview=()=>{
        navigate(`/movies/${movieId}/reviews`);
    };

    const urlmovie = `${import.meta.env.VITE_TMDB_MOVIE_API_URL}/movie/${movieId}`; // URL 정의
    const urlcredit=`${import.meta.env.VITE_TMDB_MOVIE_API_URL}/movie/${movieId}/credits`; // URL 정의
    
    return (
        <Detail>
            <MovieDetail url={urlmovie}/>
            <MovieCredit url={urlcredit}/>
            <ButtonContainer>
                <Button onClick={handleNavigateToReview}>Reviews</Button>
                <Button onClick={handleNavigateToSimilar}>Similar Movies</Button>
            </ButtonContainer>
        </Detail>
    )    
}

export default MovieDetailPage;

const Detail=styled.div`
    display: flex;
    flex-direction: column;  /* 세로로 배치 */
    color: white;
    background-color: black;
    padding: 20px;  /* 여백 추가 */
    gap: 20px;  /* MovieDetail과 MovieCredit 사이에 간격 추가 */
`

const ButtonContainer=styled.div`
    display: flex;
    justify-content: flex-end; 
    align-items: flex-end; 
    width: 100%; 
    gap: 20px;
`

const Button=styled.button`
    height: 40px;
    width: 200px;
    background-color: #CD4275;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
`