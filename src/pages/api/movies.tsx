import { useQuery } from "@tanstack/react-query";

type RequestOptions = {
  method: string;
  headers: {
    accept: string;
    Authorization: string;
  };
};

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`,
  },
};

const GetData = async (url: string, options: RequestOptions) => {
  const response = await fetch(url, options);

  if (!response.ok) throw new Error("Network response was not ok");

  return await response.json();
};

export const fetchPopularMovies = async () => {
  const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;
  const data = await GetData(url, options);

  return data.results;
};

export const fetchMovieBackdrop = async (movieId: string) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/images`;
  const data = await GetData(url, options);

  return data.backdrops ? data.backdrops[0] : null;
};

export const useMovieBackdrop = (movieId: string) => {
  return useQuery(
    ["movieBackdrop", movieId],
    () => fetchMovieBackdrop(movieId),
    {
      enabled: !!movieId,
    }
  );
};
