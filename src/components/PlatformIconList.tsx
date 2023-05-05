import React, { Fragment } from "react";
import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation5: FaPlaystation,
    playstation4: FaPlaystation,
    playstation3: FaPlaystation,
    "xbox-series-x": FaXbox,
    "xbox-one": FaXbox,
    xbox360: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack marginY={"10px"}>
      {platforms.map((p) => (
        <Icon key={p.id} as={iconMap[p.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
