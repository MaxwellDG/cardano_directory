import { Box, Center, Flex, useBreakpointValue } from "@chakra-ui/react";
import cardanoLogo from "../assets/svgs/cardano-logo.tsx";
import useWindowDimensions from "../hooks/useWindowDimensions.tsx";
import { ROUTES } from "../routing/routes.tsx";
import { useNavigate } from "react-router-dom";
import { BreakPoints } from "../theme/breakpoints.ts";
import SummaryBox from "../components/ui/summaryBox.tsx";
import { useState } from "react";

export default function Root() {
  const navigate = useNavigate();
  const { width, height } = useWindowDimensions();
  const isMobile = useBreakpointValue({ base: true, md: false }) ?? false;

  const [title, setTitle] = useState("")

  function handleClick(route: (typeof ROUTES)[keyof typeof ROUTES]) {
    navigate(route);
  }

  return (
    <Flex
      justify="center"
      align="center"
      bgColor="whitesmoke"
      w="100vw"
      h="100vh"
    >
      <Flex
        // maxW={BreakPoints["xl"]}
        // maxH="" todo
        w="full"
        h="full"
        align="center"
        pos="relative"
        overflow="hidden"
      >
        <Flex
          pos="absolute"
          left={"-50%"}
          top="0"
          bottom="0"
          h="full"
          w="100%"
          justify={"flex-start"}
          align="center"
        >
          {/* 
              TODO dont cut this in half like your first idea. instead, make half of it hidden, push it to the left, and rotate spin it when scrolling in the container
              This will allow you to not be restrained to having 6 options. 
            */}
          {/* TODO width and height need a big change here */}
          <Flex align="center">
            {cardanoLogo(Math.min(width * 2, height * 2), isMobile, handleClick)}
            <SummaryBox />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
