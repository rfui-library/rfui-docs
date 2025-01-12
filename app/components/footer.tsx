import {
  FooterColumn,
  FooterHeading,
  FooterItem,
  Footer as RFUIFooter,
} from "rfui";

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
        <FooterItem href="/getting-started">Getting started</FooterItem>
        <FooterItem href="/stylesheet">Stylesheet</FooterItem>
        <FooterItem href="/css-variables">CSS variables</FooterItem>
        <FooterItem href="/choose-a-personality">
          Choose a personality
        </FooterItem>
        <FooterItem href="/default-roundedness">Default roundedness</FooterItem>
        <FooterItem href="/rest-parameters">Rest parameters</FooterItem>
      </FooterColumn>
    </RFUIFooter>
  );
};
