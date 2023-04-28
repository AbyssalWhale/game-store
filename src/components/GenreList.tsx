import React from "react";
import useGenres, { Genre } from "../hooks/useGenre";
import useData from "../hooks/useData";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  return (
    <ul>
      {data.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
