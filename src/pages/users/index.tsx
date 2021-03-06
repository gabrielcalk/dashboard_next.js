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
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { GetServerSideProps } from "next/types";
import { useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Paginations";
import { SideBard } from "../../components/Sidebar";
import { api } from "../../services/api";
import { getUsers, useUsers } from "../../services/hooks/useUsers";
import { queryClient } from "../../services/queryClient";

export default function UserList() {
  const [page, setPage] = useState(1)
  const { data, isLoading, isFetching, error } = useUsers(page);

  const isWideVersion = useBreakpointValue({
    // by default we are not on the wide version, but if the screen width is large, then the wide version is true
    base: false,
    lg: true,
  });

  async function handlePrefetchUser(userId:number){
    await queryClient.prefetchQuery(['user', userId], async () => {
      const response = await api.get(`user/${userId}`)

      return response.data
    }, {
      staleTime: 1000 * 60 * 10 //this data will be fresh for 10 minutes
    })
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px={["4", "4", "6"]}>
        <SideBard />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Users
              {!isLoading && isFetching && (
                <Spinner size="sm" color="gray.500" ml="4" />
              )}
            </Heading>

            <NextLink href="/users/create" passHref>
              {/* this button already is ancor */}
              <Button
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Create New
              </Button>
            </NextLink>
          </Flex>

          {/* If it is loading, then display the loading on the page, else if it is a error, show the error, else , display the users */}
          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>We could not get the user data, try again</Text>
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
                  {data.users.map((user) => {
                    return (
                      <Tr key={user.id}>
                        <Td px={["4", "4", "6"]}>
                          <Checkbox colorScheme="pink" />
                        </Td>
                        <Td px={["4", "4", "6"]}>
                          <Box>
                            {/* when the user pass the mouse on the link we will do the prefetch of that user data */}
                            <Link color="purple.400" onMouseEnter={() => handlePrefetchUser(Number(user.id))}>
                              <Text fontWeight="bold">{user.name}</Text>
                            </Link>
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
              <Pagination
                totalCountOfRegisters={data.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}

