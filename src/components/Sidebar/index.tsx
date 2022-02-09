import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useSideBarDrawer } from "../../contexts/SideBarDrawerContext";
import { SideBarNav } from "./SideBarNav";

export function SideBard() {
  // method that check if the side bar is open and the method to clode the sidebar
  const { isOpen, onClose } = useSideBarDrawer();
  
  const isDrawerSideBar = useBreakpointValue({
    // return true if it is a medium or small screen, but false on other scenarios
    base: true,
    lg: false,
  });

  if (isDrawerSideBar == true) {
    return (
      // if isDrawerSideBar is true, then we will define as open and add the menu on the left
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        {/* let the screen darker to the drawer get the focus */}
        <DrawerOverlay>
          {/* Drawer content */}
          <DrawerContent bg="gray.800" p="4">
            {/* Button to close the drawer */}
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navegation</DrawerHeader>
            <DrawerBody>
              <SideBarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Box as="aside" w="64" mr="8">
      <SideBarNav />
    </Box>
  );
}
