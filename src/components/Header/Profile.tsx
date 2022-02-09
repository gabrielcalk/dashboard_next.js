import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {/* if show profile data is true, then return the email and name` */}
      {showProfileData && (
        <Box mr="4" textAlign="right">
          {/* empty div */}
          <Text>Gabriel Cavalcante</Text>
          <Text color="gray.300" fontSize="small">
            gabrielcalk@outlook.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Gabriel Cavalcante" />
    </Flex>
  );
}
