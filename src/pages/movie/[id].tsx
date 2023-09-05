import { useRouter } from "next/router";

const MovieDetails = () => {
  const router = useRouter();
  const { movieData } = router.query;
  const movie = JSON.parse(movieData as string);

  if (!movie) {
    return <p>Error: Movie data not found!</p>;
  }

  const handleBackToSearch = async () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col justify-center items-center m-4">
      <>
        <img
          className="rounded-lg"
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt="movie poster"
          style={{ viewTransitionName: `movie-${movie.id}` }}
        />
        <button onClick={handleBackToSearch}>Back to Search</button>
      </>
    </div>
  );
};

export default MovieDetails;
