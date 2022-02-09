import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SideBarDrawerContextProps {
  children: ReactNode;
}

type SideBarDrawerContextData = UseDisclosureReturn;

const SideBarDrawerContext = createContext({} as SideBarDrawerContextData);

export function SideBarDrawerProvider({ children }: SideBarDrawerContextProps) {
  //   return isOpen and onClose and other info that can be used to the drawer
  const disclosure = useDisclosure();
  const router = useRouter();

  // I will call this function every time that the router path changed
  useEffect(() => {
    // I will close the side bar
    disclosure.onClose();
  }, [router.asPath]); //router path

  return (
    <SideBarDrawerContext.Provider value={disclosure}>
      {children}
    </SideBarDrawerContext.Provider>
  );
}

// function that return useContext to not needed to create useContext on the files that will use it
export const useSideBarDrawer = () => useContext(SideBarDrawerContext);
