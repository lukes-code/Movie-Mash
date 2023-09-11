import { useEffect } from "react";
import Movies from "@/components/Movies";
import Spinner from "@/components/Spinner";
import { fetchPopularMovies } from "./api/movies";
import { useMovieContext } from "@/context/MovieContext";

export default function Home() {
  const { movies, setMovies } = useMovieContext();

  useEffect(() => {
    if (!movies.length) {
      fetchPopularMovies().then((fetchedMovies) => {
        setMovies(fetchedMovies);
      });
    }
  }, [movies, setMovies]);

  if (!movies.length) return <Spinner />;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Movies data={movies} />
    </main>
  );
}
