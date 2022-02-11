import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Table,
  Thead,
  Tr,
  Th,
  Checkbox,
  Tbody,
  Td,
  Text,
  useBreakpointValue,
  Spinner,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { useQuery } from "react-query"; //this useQuery will be used to make the request to the back-end/api

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Paginations";
import { SideBard } from "../../components/Sidebar";
import { api } from "../../services/api";

export default function UserList() {
  const { data, isLoading, isFetching, error } = useQuery("users", async () => {
    //key utilized to cache the data
    const {data} = await api.get("users");
 
    const users = data.users.map(user => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: new Date(user.createdAt).toLocaleDateString()
      }
    });
    return users;
  }, {
    staleTime: 1000 * 5 //this query during 5 seconds will be fresh
  });

  const isWideVersion = useBreakpointValue({
    // by default we are not on the wide version, but if the screen width is large, then the wide version is true
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px={["4", "4", "6"]}>
        <SideBard />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Users
              {!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4"/>}
            </Heading>

            <Link href="/users/create" passHref>
              {/* this button already is ancor */}
              <Button
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Create New
              </Button>
            </Link>
          </Flex>

          {/* If it is loading, then display the loading on the page, else if it is a error, show the error, else , display the users */}
          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>We could not get the user data, try againa</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    {/* small and medium received a padding o 4 */}
                    <Th px={["4", "4", "6"]} color="gray.300" width="8">
                      {/* when the checkbox is checked the color will be pink */}
                      <Checkbox colorScheme="pink" />
                    </Th>

                    <Th>User</Th>

                    {isWideVersion && <Th>Register Date</Th>}
                    <Th w="8"></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {/* rows */}
                  {data.map((user) => {
                    return (
                      <Tr key={user.id}>
                        <Td px={["4", "4", "6"]}>
                          <Checkbox colorScheme="pink" />
                        </Td>
                        <Td px={["4", "4", "6"]}>
                          <Box>
                            <Text fontWeight="bold">{user.name}</Text>
                            <Text fontSize="sm" color="gray.300">
                              {user.email}
                            </Text>
                          </Box>
                        </Td>

                        {isWideVersion && (
                          <Td px={["4", "4", "6"]}>{user.createdAt}</Td>
                        )}

                        <Td>
                          <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            pr={["-1", "-1", "-1", "3"]}
                            colorScheme="whiteAlpha"
                            leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                          >
                            {isWideVersion && "Edit"}
                          </Button>
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
