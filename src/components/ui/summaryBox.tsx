import { Box, Flex, ListItem, ListRoot, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  title: string;
  content: string[];
};

const MotionContent = motion(Flex);

export default function SummaryBox({ title, content }: Props) {
  return (
    <AnimatePresence>
      <MotionContent
        initial={{ height: 0 }}
        exit={{ height: 0 }}
        animate={{ height: "fit-content" }}
        bgColor="white"
        border="1px solid black"
      >
        <Box p="0.5rem" borderBottom="1px solid black">
          <Text>{title}</Text>
        </Box>
        <ListRoot>
          {content.map((item: string) => {
            return (
              <ListItem>
                <Text>{item}</Text>
              </ListItem>
            );
          })}
        </ListRoot>
      </MotionContent>
    </AnimatePresence>
  );
}
