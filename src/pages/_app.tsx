import { AppProps } from "next/app";
// context that give to our application the chakra informations (theme)
import { ChakraProvider } from "@chakra-ui/react";
import { ReactQueryDevtools } from "react-query/devtools";
import { theme } from "../styles/theme";

import { QueryClient, QueryClientProvider } from "react-query"; //let me use react query
import { SideBarDrawerProvider } from "../contexts/SideBarDrawerContext";
import { makeServer } from "../services/mirage";
import { queryClient } from "../services/queryClient";

if (process.env.NODE_ENV === "development") {
  // if we are on development environment, then create the mirage server
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // wrapping the app on the chakra provider context and passing the theme
    // by default the html come with some styles (body have margin and ul has padding left, per exemplo), using resetCSS, we delete this default styles
    <QueryClientProvider client={queryClient}>
      <ChakraProvider resetCSS theme={theme}>
        <SideBarDrawerProvider>
          <Component {...pageProps} />
        </SideBarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
