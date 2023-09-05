import React from "react";
import Movie from "./Movie";

type MoviesProps = {
  data: any;
};

const Movies = ({ data }: MoviesProps) => {
  return (
    <div className="flex flex-wrap justify-center">
      {data.map((movie: any) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
