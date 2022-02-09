import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { RiSearch2Line } from "react-icons/ri";

export function Search() {
  // uncontrolled components
  // I will save a html input element
  // start with null but will received the input after it be constructed
  const searchInputRef = useRef<HTMLInputElement>(null); //this useRef will save one reference of the input inside of the dom

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
        ref={searchInputRef}
      />

      <Icon as={RiSearch2Line} fontSize="20" />
    </Flex>
  );
}
