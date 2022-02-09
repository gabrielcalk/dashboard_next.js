import { AppProps } from "next/app";
// context that give to our application the chakra informations (theme)
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { SideBarDrawerProvider } from "../contexts/SideBarDrawerContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // wrapping the app on the chakra provider context and passing the theme
    // by default the html come with some styles (body have margin and ul has padding left, per exemplo), using resetCSS, we delete this default styles
    <ChakraProvider resetCSS theme={theme}>
      <SideBarDrawerProvider>
        <Component {...pageProps} />
      </SideBarDrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;
