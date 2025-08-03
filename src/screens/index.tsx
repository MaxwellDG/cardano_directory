import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import cardanoLogo from "../assets/svgs/cardano-logo.tsx";
import useWindowDimensions from "../hooks/useWindowDimensions.tsx";
import { ROUTES } from "../routing/routes.tsx";
import { useNavigate } from "react-router-dom";
import SummaryBox, { Category } from "../components/ui/summaryBox.tsx";
import { useRef, useState } from "react";

export default function Root() {
  const navigate = useNavigate();
  const { width, height } = useWindowDimensions();
  const isMobile = useBreakpointValue({ base: true, lg: false }) ?? false;

  const containerRef = useRef<HTMLDivElement>(null);

  const [category, setCategory] =
    useState<keyof typeof Category>("TRANSACTIONS");

  function handleClick(route: (typeof ROUTES)[keyof typeof ROUTES]) {
    navigate(route);
  }

  return (
    <Flex
      align="center"
      w="100vw"
      h="2000vh"
    >
      <Flex w="full">
        <Box pos="fixed" transform="translate(-50%, -25%)" top="0" left="0">
          <Box className="cardano-logo">
            {cardanoLogo(Math.min(width * 2, height * 2), isMobile, handleClick)}
          </Box>
        </Box>
        {/* <Flex flex={1} justify="center" align="center">
              <SummaryBox category={category} />
            </Flex> */}
      </Flex>
    </Flex>
  );
}
