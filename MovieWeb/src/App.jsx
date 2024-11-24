import './App.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom";

import HomePage from "./pages/home.jsx";
import NotFound from "./pages/not-found.jsx";
import MoviesPage from "./pages/movies.jsx";
import CategoryPage from './pages/category.jsx';
import RootLayout from "./layout/root-layout.jsx";
import SignupPage from './pages/signup.jsx';
import LoginPage from './pages/login.jsx';
import SearchPage from './pages/search.jsx';
import MoviesLayout from './layout/movies-layout.jsx';
import MovieDetailPage from './pages/movieDetail.jsx';
import SimilarMoviesPage from './pages/similarMovies.jsx';

import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { AuthProvider } from './context/AuthContext.jsx';
import ReviewPage from './pages/review.jsx';


const queryClient=new QueryClient();

const router = createBrowserRouter([
    {
        path: '/',
        // element: <HomePage/>,
        element: <RootLayout/>,
        errorElement: <NotFound/>,
        children: [
            {
                // 2. index: true는 위의 path: '/' 즉, 홈 경로를 의미한다.
                index: true,
                element: <HomePage/>
            },
            {
                // 3. 부모의 path가 '/'이니, /를 붙이지 않아도 /movies랑 동일하게 동작한다.
                path: 'movies',
                element: <MoviesLayout/>,
                children: [
                    {
                        // 2. index: true는 위의 path: '/' 즉, 홈 경로를 의미한다.
                        index: true,
                        element: <CategoryPage/>
                    },
                    {
                        path: 'popular', // '/movies/popular' 경로
                        element: <MoviesPage url='/movie/popular?language=ko-KR&page=1'/> // MoviesPage를 연결
                    },
                    {
                        path: 'now-playing', // '/movies/popular' 경로
                        element: <MoviesPage url='/movie/now_playing?language=ko-KR&page=1'/> // MoviesPage를 연결
                    },
                    {
                        path: 'top-rated', // '/movies/popular' 경로
                        element: <MoviesPage url='/movie/top_rated?language=ko-KR&page=1'/> // MoviesPage를 연결
                    },
                    {
                        path:'up-coming',
                        element:<MoviesPage url='/movie/upcoming?language=ko-KR&page=1'/>
                    },
                    {
                        path: ':movieId',
                        element: <MovieDetailPage />
                    },
                    {
                        path: ':movieId/similar', // 유사 영화 페이지
                        element: <SimilarMoviesPage />, 
                    },
                    {
                        path: ':movieId/reviews', // 유사 영화 페이지
                        element: <ReviewPage />, 
                    },
                ],
                
                
            
            },
            
            {
                path:'login',
                element:<LoginPage/>
            },
            {
                path:'signup',
                element:<SignupPage/>
            },
            {
                path:'search',
                element:<SearchPage/>
            }
        ]
    }
   
])


function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <RouterProvider router={router}/>
            </AuthProvider>
        </QueryClientProvider>
    )
}

export default App
