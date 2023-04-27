import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Prop {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Prop) => {
  return (
    <Box width="200px" borderEndRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
