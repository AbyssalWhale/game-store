import React, { Fragment } from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid() {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <Fragment>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={3}
        spacing={10}
      >
        {isLoading &&
          skeletons.map((s) => <GameCardSkeleton key={s}></GameCardSkeleton>)}
        {games.map((game) => (
          <GameCard game={game} key={game.id}></GameCard>
        ))}
      </SimpleGrid>
    </Fragment>
  );
}

export default GameGrid;
