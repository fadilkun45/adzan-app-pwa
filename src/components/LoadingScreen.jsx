import { HStack } from "@chakra-ui/react";
import React from "react";
import { SequenceSpinner } from "react-spinners-kit";

const LoadingScreen = () => {

  return (
    <HStack
      alignItems="center"
      justify="center"
      position="absolute"
      top="0"
      bottom="0"
      w="full"
      h="100vh"
      zIndex="overlay"
      bgColor="green.100"
    >
      <SequenceSpinner size={80} color="#38A169" loading={true} />
    </HStack>
  );
};

export default LoadingScreen;
