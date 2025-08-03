import { Box, Flex, List, Text } from "@chakra-ui/react";
import LoadingDots from "./loading-dots";

export const Category = {
  TRANSACTIONS: "transactions",
  GAMING: "gaming",
  LAW: "law",
  MEDICINE: "medicine",
  WALLETS: "wallets",
  FINANCE: "finance",
} as const;

type Props = {
  category: keyof typeof Category;
};

const CONTENT_MAP: Record<keyof typeof Category, string[]> = {
  LAW: ["government", "real-estate", "criminal"],
  TRANSACTIONS: ["government", "real-estate", "criminal"],
  MEDICINE: ["government", "real-estate", "criminal"],
  GAMING: ["government", "real-estate", "criminal"],
  WALLETS: ["government", "real-estate", "criminal"],
  FINANCE: ["government", "real-estate", "criminal"],
};

export default function SummaryBox({ category }: Props) {
  return (
    <Flex bgColor="white" border="2px solid black" flexDir="column">
      <Box p="0.5rem" borderBottom="2px solid black">
        {!category ? <LoadingDots /> : <Text>{category}</Text>}
      </Box>
      <List.Root
        p="0.5rem"
        as="ul"
        display="flex"
        overflow="auto"
        flexWrap={"wrap"}
        minW="350px"
      >
        {(!category ? [] : CONTENT_MAP[category]).map((item: string) => {
          return (
            <List.Item as="li" ml="1.25rem">
              {item}
            </List.Item>
          );
        })}
      </List.Root>
    </Flex>
  );
}
