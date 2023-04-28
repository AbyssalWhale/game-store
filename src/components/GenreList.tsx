import useGenres from "../hooks/useGenre";

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
