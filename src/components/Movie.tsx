import Link from "next/link";

const Movie = ({ movie }: { movie: any }) => {
  return (
    <Link
      href={{
        pathname: `/movie/${movie.id}`,
        query: { movieData: JSON.stringify(movie) },
      }}
      className="m-2"
    >
      <div>
        <img
          className="rounded-lg"
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt="movie poster"
          style={{ viewTransitionName: `movie-${movie.id}` }}
        />
      </div>
    </Link>
  );
};

export default Movie;
