// src/api/fetchMovies.js
import { axiosInstance } from "./axios-instance";

const fetchMovies = async ({ queryKey }) => {
  const [, url] = queryKey; // queryKey의 두 번째 요소가 url
  console.log(url);
  const response = await axiosInstance.get(url);
  return response.data;
};

export default fetchMovies;
