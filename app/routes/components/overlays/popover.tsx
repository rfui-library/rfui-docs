import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { Button, InlineCode, Link, Popover, Stack } from "rfui-package";

export default () => {
  const overviewNotes = (
    <Stack className="gap-3">
      <p>
        Note: This component requires you to have{" "}
        <Link href="https://www.npmjs.com/package/@headlessui/react">
          <InlineCode>@headlessui/react</InlineCode>
        </Link>{" "}
        installed. See{" "}
        <Link href="/getting-started#install-headless-ui">this section</Link> on
        the Getting Started page.
      </p>
      <p>
        Note: Popovers are often overused. They are generally useful when the
        information in the popover is supplementary and when it isn't pragmatic
        to place the info on the screen. Consider Nielsen Norman Group's{" "}
        <Link href="https://www.nngroup.com/articles/tooltip-guidelines/">
          guidelines
        </Link>{" "}
        before using a popover.
      </p>
      <p>
        Note: Popovers are meant for larger amounts of content. If you have a
        smaller amount of content that you want to display after a user
        interaction, consider using the{" "}
        <Link href="/components/overlays/tooltip">
          <InlineCode>Tooltip</InlineCode>
        </Link>{" "}
        component instead. [
        <Link href="https://ux.stackexchange.com/q/88844/39046">source</Link>]
      </p>
    </Stack>
  );
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: (
        <Popover content="Example content">
          <Button>Test</Button>
        </Popover>
      ),
      code: `<Popover content="Example content">Test</Popover>`,
    },
    {
      title: "Direction",
      demo: (
        <Stack className="items-center gap-8 p-8">
          <Popover direction="top" content="Example content">
            <Button>Top</Button>
          </Popover>
          <Popover direction="right" content="Example content">
            <Button>Right</Button>
          </Popover>
          <Popover direction="bottom" content="Example content">
            <Button>Botton</Button>
          </Popover>
          <Popover direction="left" content="Example content">
            <Button>Left</Button>
          </Popover>
        </Stack>
      ),
      code: `<Stack className="items-center gap-8 p-8">
  <Popover direction="top" content="Example content">
    <Button>Top</Button>
  </Popover>
  <Popover direction="right" content="Example content">
    <Button>Right</Button>
  </Popover>
  <Popover direction="bottom" content="Example content">
    <Button>Botton</Button>
  </Popover>
  <Popover direction="left" content="Example content">
    <Button>Left</Button>
  </Popover>
</Stack>`,
    },
  ];
  const propsTables = [
    {
      title: null,
      props: [
        {
          name: "content",
          required: true,
          type: "string",
          default: null,
          notes: null,
        },
        {
          name: "direction",
          required: false,
          type: '"top" | "right" | "bottom" | "left"',
          default: '"right"',
          notes: null,
        },
        {
          name: "children",
          required: true,
          type: "ComponentChild",
          default: null,
          notes: null,
        },
      ],
    },
  ];

  return (
    <ComponentDocsPage
      componentName="Popover"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/overlays/popover.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
