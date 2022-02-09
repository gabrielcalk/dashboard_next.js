import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { SideBard } from "../components/Sidebar";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), {
  // This chart will only be render by the browser, not using the ssr
  ssr: false,
});

// options to style the cahrt
const options: ApexOptions = {
  chart: {
    toolbar: {
      // remove the menu
      show: false,
    },
    zoom: {
      enabled: false,
    },
    // text color
    foreColor: theme.colors.gray[500],
  },
  // take out the grid on the chart
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    // x of the chart = days
    categories: [
      "2021-02-07",
      "2021-02-08",
      "2021-02-09",
      "2021-02-10",
      "2021-02-11",
      "2021-02-12",
      "2021-02-13",
    ],
  },
  // chart color
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

// how many types of data I will have on the chart
const series = [{ name: "series1", data: [32, 120, 10, 29, 51, 61, 18] }];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBard />
        {/* Grids from chakra that is simple */}
        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box p={["4", "8"]} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="large" mb="4">
              Weekly Subscribers
            </Text>
            {/* options and series are requires */}
            <Chart options={options} series={series} type="area" height={160} />
          </Box>

          <Box p={["4", "8"]} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="large" mb="4">
              Opening Rate
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
