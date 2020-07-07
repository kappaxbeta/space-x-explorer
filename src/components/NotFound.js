import React from "react";
import { Box, Heading } from "grommet/es6";

const NotFound = () => {
  return (
    <Box pad={"small"} flex={false} fill="vertical" direction="row">
      <Heading>404 Not Found :(</Heading>
    </Box>
  );
};

export default NotFound;
