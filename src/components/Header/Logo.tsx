import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    // 2xl for the mobile and 3xl for the rest
    <Text fontSize={["2xl", "3xl"]} fontWeight="bold" letterSpacing="tight" w="64">
      dashGo
      <Text as="span" ml="1" color="pink.500">
        .
      </Text>
    </Text>
  );
}
