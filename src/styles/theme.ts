// Here is all the theme that we will use
import { extendTheme } from "@chakra-ui/react"; //we always import from chakra ui react

// Reuse the chakra theme to update what we want to update
export const theme = extendTheme({
  colors: {
    // Set up new gray colors to the variables
    gray: {
      "900": "#181b23",
      "800": "#1F2029",
      "700": "#353646",
      "600": "#4b4d63",
      "500": "#616480",
      "400": "#797d9a",
      "300": "#9699b0",
      "200": "#b3b5c6",
      "100": "#d1d2dc",
      "50": "#eeeef2",
    },
  },
  // in fonts I can edit 3 fonts: body, heading(h1, h2, h3, h4, h5) and nono (pre code)
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: {
      body: {
        bg: "gray.900", //background color to gray.900
        color: "gray.50", //text color to gray.50
      },
    },
  },
});
