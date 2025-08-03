import { Center, Flex, useBreakpointValue } from "@chakra-ui/react";
import cardanoLogo from "../assets/svgs/cardano-logo.tsx";
import useWindowDimensions from "../hooks/useWindowDimensions.tsx";
import { ROUTES } from "../routing/routes.tsx";
import { useNavigate } from "react-router-dom";

export default function Root() {
  const navigate = useNavigate();
  const { width, height } = useWindowDimensions();
  const isMobile = useBreakpointValue({ base: true, md: false }) ?? false;

  function handleClick(route: (typeof ROUTES)[keyof typeof ROUTES]) {
    navigate(route);
  }

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
        bgColor="whitesmoke"
        w="100vw"
        h="100vh"
      >
        {cardanoLogo(Math.min(width, height), isMobile, handleClick)}
      </Flex>
    </Center>
  );
}
