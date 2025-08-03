import { Box, Flex, ListItem, ListRoot, Text } from "@chakra-ui/react";
import LoadingDots from "./loading-dots";

const Category = {
  TRANSACTIONS: "transactions",
  GAMING: "gaming",
  LAW: "law",
  MEDICINE: "medicine",
  WALLETS: "wallets",
  FINANCE: "finance",
} as const

type Props = {
  title: keyof typeof Category;
};
const CONTENT_MAP: Record<keyof typeof Category, string[]> = {
  LAW: ["government", "real-estate", "criminal"],
  TRANSACTIONS: ["government", "real-estate", "criminal"],
  MEDICINE: ["government", "real-estate", "criminal"],
  GAMING: ["government", "real-estate", "criminal"],
  WALLETS: ["government", "real-estate", "criminal"],
  FINANCE: ["government", "real-estate", "criminal"],
};

export default function SummaryBox({ title }: Props) {
  return (
    <Flex bgColor="white" border="2px solid black">
      <Box p="0.5rem" borderBottom="2px solid black">
        {!title ? <LoadingDots /> : <Text>{title}</Text>}
      </Box>
      <ListRoot overflow="auto">
        {(!title ? [] : CONTENT_MAP[title]).map((item: string) => {
          return (
            <ListItem>
              <Text>{item}</Text>
            </ListItem>
          );
        })}
      </ListRoot>
    </Flex>
  );
}
