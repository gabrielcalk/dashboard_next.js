import {
  Link as ChakraLink,
  Icon,
  Text,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { ElementType } from "react";
import Link from "next/link";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType; //when I pass the name of the component and not the declaration
  children: string;
  href: string;
}

export default function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    // passing required href
    <Link href={href} passHref>
      {/* // I can pass aditional styles to the link */}
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </Link>
  );
}
