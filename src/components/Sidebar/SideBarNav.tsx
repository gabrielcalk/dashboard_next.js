import { Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import NavLink from "./NavLink";
import NavSection from "./NavSection";

export function SideBarNav() {
  return (
    <Stack spacing="10" align="flex-start">
      <NavSection title="GENERAL">
        <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
        <NavLink icon={RiContactsLine}>Users</NavLink>
      </NavSection>

      <NavSection title="AUTOMATION">
        <NavLink icon={RiInputMethodLine}>Forms</NavLink>
        <NavLink icon={RiGitMergeLine}>Automation</NavLink>
      </NavSection>
    </Stack>
  );
}
