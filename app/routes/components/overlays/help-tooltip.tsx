import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { CodeBlock, HelpTooltip, InlineCode, Link, Stack } from "rfui";

export default () => {
  const overviewNotes = (
    <div>
      This is just a thin wrapper over the{" "}
      <Link href="/molecules/tooltip">
        <InlineCode>Tooltip</InlineCode>
      </Link>{" "}
      component because it is a common need to use a help icon with a tooltip.
      However, note that it is{" "}
      <Link href="https://www.nngroup.com/articles/tooltip-guidelines/">
        generally recommended
      </Link>{" "}
      to only use tooltips to provide supplementary rather than essential
      information to users.
    </div>
  );
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: <HelpTooltip content="Example content" />,
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<HelpTooltip content="Example content" />`}
        />
      ),
    },
    {
      title: "Direction",
      demo: (
        <Stack className="items-center gap-8 p-8">
          <HelpTooltip content="Example content" direction="top" />
          <HelpTooltip content="Example content" direction="right" />
          <HelpTooltip content="Example content" direction="bottom" />
          <HelpTooltip content="Example content" direction="left" />
        </Stack>
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<Stack className="items-center gap-8 p-8">
  <HelpTooltip content="Example content" direction="top" />
  <HelpTooltip content="Example content" direction="right" />
  <HelpTooltip content="Example content" direction="bottom" />
  <HelpTooltip content="Example content" direction="left" />
</Stack>`}
        />
      ),
    },
    {
      title: "Size",
      demo: (
        <Stack className="items-center gap-8 p-8">
          <HelpTooltip content="Example content" size="sm" />
          <HelpTooltip content="Example content" size="md" />
          <HelpTooltip content="Example content" size="lg" />
        </Stack>
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<Stack className="items-center gap-8 p-8">
  <HelpTooltip content="Example content" size="sm" />
  <HelpTooltip content="Example content" size="md" />
  <HelpTooltip content="Example content" size="lg" />
</Stack>`}
        />
      ),
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
          name: "size",
          required: false,
          type: '"sm" | "md" | "lg"',
          default: '"md"',
          notes: null,
        },
        {
          name: "...rest",
          required: false,
          type: 'ComponentProps<"span">',
          default: null,
          notes: (
            <div>
              <div className="leading-relaxed">
                See the docs for{" "}
                <Link href="/rest-parameters">rest parameters</Link>. For{" "}
                <InlineCode>HelpTooltip</InlineCode>, you could pass anything
                you normally would pass to <InlineCode>{"<span>"}</InlineCode>{" "}
                because the return value{" "}
                <Link href="https://github.com/adamzerner/rfui/blob/master/islands/molecules/help-tooltip.tsx">
                  looks something like
                </Link>{" "}
                this:
              </div>
              <CodeBlock
                language="tsx"
                code={`<span className={containerClass} {...restWithoutClass}>
  {children}
</span>`}
              />
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <ComponentDocsPage
      componentName="HelpTooltip"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/overlays/help-tooltip.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
