import {
  VerticalNavbar as RFUIVerticalNavbar,
  VerticalNavbarDropdown,
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
        <VerticalNavbarDropdown
          title="Dropdown"
          items={[
            { label: "One", href: "/one" },
            { label: "New tab", href: "/new-tab", shouldOpenInNewTab: true },
            {
              label: "Two",
              onClick: () => {
                alert("clicked");
              },
            },
            { label: "Icon", href: "/icon", icon: <IconOne /> },
          ]}
        />
      </VerticalNavbarTop>
    </RFUIVerticalNavbar>
  );
};

const IconOne = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="h-[20px] w-[20px]"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25"
    />
  </svg>
);
