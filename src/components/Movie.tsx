import Link from "next/link";
import { MovieData } from "./Movies";

const Movie = ({ movie }: { movie: MovieData }) => {
  return (
    <Link
      href={{
        pathname: `/movie/${movie.id}`,
        query: { movieData: JSON.stringify(movie) },
      }}
      className="m-4"
    >
      <div>
        {/* Next Image seems to fetch much slower */}
        <img
          className="rounded-lg h-[300px]"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt="movie poster"
          style={{ viewTransitionName: `movie-${movie.id}` }}
        />
      </div>
    </Link>
  );
};

export default Movie;
