import { ComponentsList } from "@/components/components-list";
import { getComponents } from "@/utilities/get-components";
import type { ReactNode } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Flex,
  H1,
  H2,
  Link,
  Stack,
  Text,
} from "rfui-package";

export const meta = () => [
  { title: "Home - RFUI" },
  { name: "description", content: "The home page" },
];

export default () => {
  const components = getComponents();

  return (
    <Stack className="gap-10">
      <header className="max-w-prose">
        <H1 className="text-6xl">RFUI</H1>
        <H2 className="text-2xl">
          A lightweight, UX and DX-focused component library for React apps.
        </H2>
        <Text>
          {/* <p>
            RFUI is opinionated. It doesn't try to please everyone, and it
            doesn't try to do too much. It prioritizes simplicity, user
            experience, developer experience, pits of success, avoiding
            dependencies, and <InlineCode>#useThePlatform</InlineCode>.
          </p> */}
          <p>
            Interested? Check out the <Link href="/about">About</Link> page or
            just <Link href="/getting-started">get started</Link>.
          </p>
        </Text>
      </header>
      <Flex className="gap-10">
        <section className="hidden xl:block">
          <ComponentsList />
        </section>
        <Stack className="gap-10 overflow-x-hidden">
          <Stack className="gap-7">
            <Category>Typography</Category>
            <Flex className="flex-wrap gap-6">
              {components.typography.map((component) => (
                <Item
                  key={component.name}
                  name={component.name}
                  href={component.href}
                  demo={component.demo}
                />
              ))}
            </Flex>
          </Stack>
          <Stack className="gap-7">
            <Category>Form</Category>
            <Flex className="flex-wrap gap-6">
              {components.form.map((component) => (
                <Item
                  key={component.name}
                  name={component.name}
                  href={component.href}
                  demo={component.demo}
                />
              ))}
            </Flex>
          </Stack>
          <Stack className="gap-7">
            <Category>Data Display</Category>
            <Flex className="flex-wrap gap-6">
              {components.dataDisplay.map((component) => (
                <Item
                  key={component.name}
                  name={component.name}
                  href={component.href}
                  demo={component.demo}
                />
              ))}
            </Flex>
          </Stack>
          <Stack className="gap-7">
            <Category>Navigation</Category>
            <Flex className="flex-wrap gap-6">
              {components.navigation.map((component) => (
                <Item
                  key={component.name}
                  name={component.name}
                  href={component.href}
                  demo={component.demo}
                />
              ))}
            </Flex>
          </Stack>
          <Stack className="gap-7">
            <Category>Feedback</Category>
            <Flex className="flex-wrap gap-6">
              {components.feedback.map((component) => (
                <Item
                  key={component.name}
                  name={component.name}
                  href={component.href}
                  demo={component.demo}
                />
              ))}
            </Flex>
          </Stack>
          <Stack className="gap-7">
            <Category>Overlays</Category>
            <Flex className="flex-wrap gap-6">
              {components.overlays.map((component) => (
                <Item
                  key={component.name}
                  name={component.name}
                  href={component.href}
                  demo={component.demo}
                />
              ))}
            </Flex>
          </Stack>
          <Stack className="gap-7">
            <Category>Layout</Category>
            <Flex className="flex-wrap gap-6">
              {components.layout.map((component) => (
                <Item
                  key={component.name}
                  name={component.name}
                  href={component.href}
                  demo={component.demo}
                />
              ))}
            </Flex>
          </Stack>
          <Stack className="gap-7">
            <Category>Editable Text</Category>
            <Flex className="flex-wrap gap-6">
              {components.editableText.map((component) => (
                <Item
                  key={component.name}
                  name={component.name}
                  href={component.href}
                  demo={component.demo}
                />
              ))}
            </Flex>
          </Stack>
          <Stack className="gap-7">
            <Category>Other</Category>
            <Flex className="flex-wrap gap-6">
              {components.other.map((component) => (
                <Item
                  key={component.name}
                  name={component.name}
                  href={component.href}
                  demo={component.demo}
                />
              ))}
            </Flex>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
};

const Category = ({ children }: { children: ReactNode }) => {
  return <div className="text-primary-900 flex-none text-4xl">{children}</div>;
};

const Item = ({
  name,
  href,
  demo,
}: {
  name: string;
  href: string;
  demo: ReactNode;
}) => {
  return (
    <Link underline="none" href={href} className="w-full sm:w-auto">
      <Card className="w-full bg-neutral-50/20 hover:shadow-lg sm:w-60 sm:hover:shadow-md">
        <CardBody>
          <Flex
            style={{
              height: 174,
              justifyContent: "center",
              alignItems: "center",
              pointerEvents: "none",
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            {demo}
          </Flex>
        </CardBody>
        <CardFooter className="text-center">
          <code className={name.length > 20 ? "text-xs" : undefined}>
            {name}
          </code>
        </CardFooter>
      </Card>
    </Link>
  );
};
