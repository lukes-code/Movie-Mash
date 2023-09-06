import React from "react";
import Movie from "./Movie";

const Movies = ({ data }: any) => {
  return (
    <div className="flex flex-wrap justify-center">
      {data.map((movie: any) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
