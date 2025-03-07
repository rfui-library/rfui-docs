import {
  FooterColumn,
  FooterHeading,
  FooterItem,
  Footer as RFUIFooter,
} from "rfui-package";

export const Footer = () => {
  return (
    <RFUIFooter size="2xl">
      <FooterColumn>
        <FooterHeading>About</FooterHeading>
        <FooterItem href="/about">About</FooterItem>
        <FooterItem href="https://github.com/rfui-library/rfui-package">
          GitHub
        </FooterItem>
        <FooterItem href="mailto:adamzerner@protonmail.com">Contact</FooterItem>
      </FooterColumn>
      <FooterColumn>
        <FooterHeading>Docs</FooterHeading>
        <FooterItem href="/">Components</FooterItem>
        <FooterItem href="https://codesandbox.io/p/sandbox/jolly-dijkstra-mcfptq">
          Playground
        </FooterItem>
        <FooterItem href="/getting-started">Getting started</FooterItem>
        <FooterItem href="/choose-a-personality">
          Choose a personality
        </FooterItem>
        <FooterItem href="/default-roundedness">Default roundedness</FooterItem>
        <FooterItem href="/rest-parameters">Rest parameters</FooterItem>
      </FooterColumn>
    </RFUIFooter>
  );
};
