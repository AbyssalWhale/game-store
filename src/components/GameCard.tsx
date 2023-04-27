import React from "react";
import { Game } from "../hooks/useGames";
import { Card, Image, CardBody, Heading, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderEndRadius={10} overflow={"hidden"}>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          platforms={game.platforms.map((p) => p.platform)}
        ></PlatformIconList>
      </CardBody>
    </Card>
  );
};

export default GameCard;
