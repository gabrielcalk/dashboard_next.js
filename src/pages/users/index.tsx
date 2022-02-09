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
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Paginations";
import { SideBard } from "../../components/Sidebar";

export default function UserList() {
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
            </Heading>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Create New
            </Button>
          </Flex>

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
              {/* row 1 */}
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td px={["4", "4", "6"]}>
                  <Box>
                    <Text fontWeight="bold">Gabriel Cavalcante</Text>
                    <Text fontSize="sm" color="gray.300">
                      gabrielcalk@outlook.com
                    </Text>
                  </Box>
                </Td>

                {isWideVersion && (
                  <Td px={["4", "4", "6"]}>04 de Abril, 2021</Td>
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

              {/* row 2 */}
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td px={["4", "4", "6"]}>
                  <Box>
                    <Text fontWeight="bold">Gabriel Cavalcante</Text>
                    <Text fontSize="sm" color="gray.300">
                      gabrielcalk@outlook.com
                    </Text>
                  </Box>
                </Td>

                {isWideVersion && (
                  <Td px={["4", "4", "6"]}>04 de Abril, 2021</Td>
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
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
