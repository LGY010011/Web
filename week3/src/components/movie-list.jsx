import Movie from './movie.jsx';
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";


const MovieList = ({ url }) => {
    const tmdbToken=import.meta.env.VITE_TMDB_ACCESS_TOKEN;
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${tmdbToken}`
                    }
                });
                setMovies(response.data.results); // 응답에서 results 배열을 가져옴
            } catch (err) {
                setError(err.message); // 에러 메시지 저장
            } finally {
                setLoading(false); // 요청 완료
            }
        };

        getMovies();
    }, [url]);

    if (loading) return <p>Loading...</p>; // 로딩 상태 표시
    if (error) return <p>Error: {error}</p>; // 에러 상태 표시

    return (
        <CardList>
            {movies.map((movie) => (
                <Movie key={movie.id} movie={movie} />
            ))}
        </CardList>
    );
};

export default MovieList;

const CardList = styled.div`
    display: flex;
    flex-wrap: wrap; /* 요소들이 줄바꿈되도록 설정 */
    justify-content: left; /* 자식 요소 간의 간격을 균등하게 조절 */
    align-items: center;
`;
