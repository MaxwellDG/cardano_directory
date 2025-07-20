import { Box, Center, Flex } from "@chakra-ui/react";
import cardanoLogo from "../assets/svgs/cardano-logo.tsx";
import useWindowDimensions from "../hooks/useWindowDimensions.tsx";

export default function Root() {
  const { width, height } = useWindowDimensions();

  return (
    <Center minH="100vh" bg="white" pos="relative">
      <Flex
        justify="center"
        align="center"
        pos="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        w="100vw"
        h="100vh"
      >
        {cardanoLogo(Math.min(width, height))}
      </Flex>
    </Center>
  );
}
