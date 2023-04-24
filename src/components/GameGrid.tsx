import React, { Fragment } from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

function GameGrid() {
  const { games, error } = useGames();
  return (
    <Fragment>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={3}
        spacing={10}
      >
        {games.map((game) => (
          <GameCard game={game} key={game.id}></GameCard>
        ))}
      </SimpleGrid>
    </Fragment>
  );
}

export default GameGrid;
