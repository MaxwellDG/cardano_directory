import { Box, Flex, ListItem, ListRoot, Text } from "@chakra-ui/react";
import LoadingDots from "./loading-dots";

enum Category {
  TRANSACTIONS,
  GAMING,
  LAW,
  MEDICINE,
  WALLETS,
  FINANCE,
}

type Props = {
  title: Category;
};

const CONTENT_MAP: Record<Category, string[]> = {
  [Category.LAW]: ["government", "real-estate", "criminal"],
  [Category.TRANSACTIONS]: ["government", "real-estate", "criminal"],
  [Category.MEDICINE]: ["government", "real-estate", "criminal"],
  [Category.GAMING]: ["government", "real-estate", "criminal"],
  [Category.WALLETS]: ["government", "real-estate", "criminal"],
  [Category.FINANCE]: ["government", "real-estate", "criminal"],
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
