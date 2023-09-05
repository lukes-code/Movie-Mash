export const fetchPopularMovies = async () => {
  const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`,
    },
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  const popularMovies = data.results;

  return popularMovies;
};
