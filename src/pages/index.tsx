import { useQuery } from "@tanstack/react-query";
import Movies from "@/components/Movies";
import Spinner from "@/components/Spinner";
import { fetchPopularMovies } from "./api/movies";

export default function Home() {
  const {
    data: movies,
    isLoading,
    isError,
  } = useQuery(["popularMovies"], fetchPopularMovies, {
    initialData: [],
    cacheTime: 1000 * 60 * 5,
  });

  if (isLoading) return <Spinner />;

  if (isError) return <p>Error fetching data</p>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Movies data={movies} />
    </main>
  );
}
