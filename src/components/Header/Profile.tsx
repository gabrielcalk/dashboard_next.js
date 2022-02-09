import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        {/* empty div */}
        <Text>Gabriel Cavalcante</Text>
        <Text color="gray.300" fontSize="small">
          gabrielcalk@outlook.com
        </Text>
      </Box>
      <Avatar size="md" name="Gabriel Cavalcante" />
    </Flex>
  );
}
