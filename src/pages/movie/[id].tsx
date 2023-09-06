import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { fetchMovieBackdrop } from "../api/movies";

const MovieDetails = () => {
  const router = useRouter();
  const { movieData } = router.query;
  const movie = JSON.parse(movieData as string);

  if (!movie) return <p>Error: Movie data not found!</p>;

  const { data: backdropImage } = useQuery(
    ["movieBackdrop", movie.id],
    () => fetchMovieBackdrop(movie.id),
    {
      enabled: !!movie.id,
    }
  );

  const handleBackToSearch = async () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col justify-center items-center m-0">
      {backdropImage && (
        <img
          className="w-full absolute top-0 h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${backdropImage.file_path}`}
          alt="movie backdrop"
          style={{ viewTransitionName: "backdrop" }}
        />
      )}
      <div className="mt-[300px]">
        <img
          className="rounded-lg h-[450px]"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="movie poster"
          style={{ viewTransitionName: `movie-${movie.id}` }}
        />
      </div>
      <button
        onClick={handleBackToSearch}
        className="rounded-[999px] bg-red-500 text-white p-4 mt-4 absolute bottom-10 left-10"
      >
        Back
      </button>
    </div>
  );
};

export default MovieDetails;
