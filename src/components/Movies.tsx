import React from "react";
import Movie from "./Movie";

export type MovieData = {
  id: number;
  backdrop_path: string;
  poster_path: string;

  adult?: boolean;
  genre_ids?: number[];
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
};

type MoviesProps = {
  data: MovieData[];
};

const Movies = ({ data }: MoviesProps) => {
  return (
    <div className="flex flex-wrap justify-center">
      {data.map((movie: MovieData) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
