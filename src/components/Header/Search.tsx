import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearch2Line } from "react-icons/ri";

export function Search() {
  return (
    <Flex
      as="label"
      flex="1"
      py="3"
      px="8"
      ml="6"
      maxWidth={400}
      align="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        px="2"
        mr="4"
        placeholder="Search on the plataform"
        _placeholders={{
          color: "gray.400",
        }}
      />

      <Icon as={RiSearch2Line} fontSize="20" />
    </Flex>
  );
}
