import MovieSkeleton from "./movie-skeleton"

const MovieListSkeleton=({number})=>{
    return(
        new Array(number).fill(0).map((_,idx)=>
            <MovieSkeleton/>
        )
    )
}
export default MovieListSkeleton;