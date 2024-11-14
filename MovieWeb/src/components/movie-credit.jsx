import styled from "styled-components";
import useCustomFetch from "../hooks/useCustomFetch"
import Credit from "./credit";
import { useQuery } from "@tanstack/react-query";
import fetchMovies from "../apis/fetch-movie";
import MovieDetailSkeleton from "./Card/movie-detail-skeleton";
import MovieCreditSkeleton from "./Card/movie-credit-skeleton";

const MovieCredit=({url})=>{
    const {data: credit, isLoading, isError}=useQuery({
        queryKey: ['credit', url], 
        queryFn:fetchMovies
    });

    // 로딩 및 에러 처리
    if (isLoading){ 
        return (
            <Block>
                <MovieCreditSkeleton number={20}/>
            </Block>
        )
    }
    if (isError) {
        return <p>Error 서버에 문의하세요.</p>;
    }

    // movie 데이터가 유효한지 확인
    if (!credit) return <p>No movie data available.</p>;

    console.log(credit);


    return (
        <Block>
            {credit.cast?.map((creditItem) => (
                <Credit key={creditItem.id} credit={creditItem} />
            ))}
        </Block>
        
    )
   

}

export default MovieCredit;

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

