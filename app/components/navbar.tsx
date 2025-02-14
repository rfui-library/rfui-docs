import {
  NavbarDropdown,
  NavbarDropdownItem,
  NavbarItem,
  NavbarLeft,
  Navbar as RFUINavbar,
} from "rfui-package";

type NavbarType = {
  route: string;
};

export const Navbar = ({ route }: NavbarType) => {
  return (
    <RFUINavbar size="2xl">
      <NavbarLeft>
        <NavbarItem href="/" isActive={route === "/"}>
          Components
        </NavbarItem>
        <NavbarItem
          href="/getting-started"
          isActive={route === "/getting-started"}
        >
          Getting started
        </NavbarItem>
        <NavbarItem href="/about" isActive={route === "/about"}>
          About
        </NavbarItem>
        <NavbarDropdown title="Dropdown">
          <NavbarDropdownItem href="/">Link</NavbarDropdownItem>
          <NavbarDropdownItem
            onClick={() => {
              alert("Clicked");
            }}
          >
            onClick
          </NavbarDropdownItem>
          <NavbarDropdownItem formProps={{ method: "post" }}>
            Log out
          </NavbarDropdownItem>
        </NavbarDropdown>
      </NavbarLeft>
    </RFUINavbar>
  );
};
