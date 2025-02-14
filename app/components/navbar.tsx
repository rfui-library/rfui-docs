import {
  Button,
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
        <NavbarItem formProps={{ method: "post" }}>Log out</NavbarItem>
        <NavbarItem
          onClick={() => {
            alert("onClick");
          }}
        >
          onClick
        </NavbarItem>
        <NavbarItem>
          <div>Text</div>
        </NavbarItem>
        <NavbarItem>
          <Button>Button</Button>
        </NavbarItem>
      </NavbarLeft>
    </RFUINavbar>
  );
};
