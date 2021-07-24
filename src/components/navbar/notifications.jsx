import React from "react";
import { chakra } from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";

export default function Notifications() {
  return (
      <chakra.span pos="relative" display="inline-block">
        <BellIcon />
        <chakra.span
          pos="absolute"
          top="-1px"
          right="-1px"
          px={2}
          py={1}
          fontSize="xs"
          lineHeight="none"
          color="red.100"
          transform="translate(50%,-50%)"
          bg="orange.400"
          rounded="full"
        >
          99
        </chakra.span>
      </chakra.span>
  );
}