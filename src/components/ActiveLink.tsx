import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  // children do not exist on LinkProps
  children: ReactElement; //I can only received react component
}

export function ActiveLink({ children, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter();
  let isActive = false;

  if (asPath === rest.href || asPath.startsWith(String(rest.href))) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {/* Cloning the first element that are coming from link */}
      {cloneElement(children, {
        color: isActive ? "pink.400" : "gray.50", //modifying the color of this element if it is active
      })}
    </Link>
  );
}
