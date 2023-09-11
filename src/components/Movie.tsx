import Link from "next/link";
import { MovieData } from "./Movies";
import Progress from "./Progress";

const Movie = ({ movie }: { movie: MovieData }) => {
  return (
    <Link
      href={{
        pathname: `/movie/${movie.id}`,
        query: { movieData: JSON.stringify(movie) },
      }}
      className="m-4"
    >
      <div className="relative pb-8">
        {/* Next Image seems to fetch much slower */}
        <img
          className="rounded-lg h-[300px]"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt="movie poster"
          style={{ viewTransitionName: `movie-${movie.id}` }}
        />
        {movie?.vote_average && (
          <div
            className="absolute bottom-4 left-2 bg-black h-[40px] w-[40px] rounded-[999px]"
            style={{ viewTransitionName: `rating-${movie.id}` }}
          >
            <Progress percentage={movie.vote_average * 10} />
          </div>
        )}
      </div>
    </Link>
  );
};

export default Movie;
