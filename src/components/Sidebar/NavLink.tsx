import { Link, Icon, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends ChakraLinkProps{
    icon: ElementType //when I pass the name of the component and not the declaration
    children: string;
}

export default function NavLink({icon, children, ...rest}: NavLinkProps) {
  return (
    // I can pass aditional styles to the link
    <Link display="flex" align="center" {...rest}> 
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}
