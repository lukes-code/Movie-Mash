import { useQuery } from "@tanstack/react-query";

const apiKey = process.env.NEXT_PUBLIC_TMDB_TOKEN;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
};

export const fetchPopularMovies = async () => {
  const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export const usePopularMovies = () => {
  return useQuery(["popularMovies"], fetchPopularMovies);
};

const fetchMovieDetails = async (id: string) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export const useMovieDetails = (id: string) => {
  return useQuery(["movieDetails", id], () => fetchMovieDetails(id));
};
