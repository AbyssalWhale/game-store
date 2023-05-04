import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Prop {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Prop) => {
  return (
    <Box borderEndRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
