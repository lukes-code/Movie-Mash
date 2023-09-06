import { useRouter } from "next/router";
import { useMovieBackdrop } from "../api/movies";
import BackButton from "@/components/BackButton";

const MovieDetails = () => {
  const router = useRouter();
  const { movieData } = router.query;
  const movie = JSON.parse(movieData as string);

  if (!movie) return <p>Error: Movie data not found!</p>;

  const { data: backdropImage } = useMovieBackdrop(movie.id);

  return (
    <div className="flex flex-col justify-center items-center m-0">
      {backdropImage && (
        <div className="w-full h-full absolute top-0">
          <img
            src={`https://image.tmdb.org/t/p/original/${backdropImage.file_path}`}
            alt="movie backdrop"
            id="backdrop"
            className="w-full h-full"
          />
        </div>
      )}
      <div className="mt-[300px]">
        <img
          className="rounded-lg h-[450px]"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="movie poster"
          style={{ viewTransitionName: `movie-${movie.id}` }}
        />
      </div>
      <BackButton pathname="/" />
    </div>
  );
};

export default MovieDetails;
