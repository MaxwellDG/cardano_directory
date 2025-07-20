import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function ContractsRoot() {
  return (
    <Box h="100vh" display="flex" flexDir="column">
      <Outlet />
    </Box>
  );
}
