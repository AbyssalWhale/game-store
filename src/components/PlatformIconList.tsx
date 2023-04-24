import React, { Fragment } from "react";
import { Platform } from "../hooks/useGames";
import { Text } from "@chakra-ui/react";
import {} from "react-icons/fa";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <Fragment>
      {platforms.map((p) => (
        <Text>{p.name}</Text>
      ))}
    </Fragment>
  );
};

export default PlatformIconList;
