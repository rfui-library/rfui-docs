import {
  VerticalNavbar as RFUIVerticalNavbar,
  VerticalNavbarItem,
  VerticalNavbarTop,
} from "rfui-package";

type VerticalNavbarType = {
  route: string;
};

export const VerticalNavbar = ({ route }: VerticalNavbarType) => {
  return (
    <RFUIVerticalNavbar>
      <VerticalNavbarTop>
        <VerticalNavbarItem href="/" isActive={route === "/"}>
          Components
        </VerticalNavbarItem>
        <VerticalNavbarItem
          href="/getting-started"
          isActive={route === "/getting-started"}
        >
          Getting started
        </VerticalNavbarItem>
        <VerticalNavbarItem href="/about" isActive={route === "/about"}>
          About
        </VerticalNavbarItem>
      </VerticalNavbarTop>
    </RFUIVerticalNavbar>
  );
};
