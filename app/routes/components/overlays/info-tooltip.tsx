import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { Stack, Link, CodeBlock, InlineCode, InfoTooltip } from "rfui";

export default () => {
  const overviewNotes = (
    <div>
      This is just a thin wrapper over the{" "}
      <Link href="/molecules/tooltip">
        <InlineCode>Tooltip</InlineCode>
      </Link>{" "}
      component because it is a common need to use an info icon with a tooltip.
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
      demo: <InfoTooltip content="Example content" />,
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<InfoTooltip content="Example content" />`}
        />
      ),
    },
    {
      title: "Direction",
      demo: (
        <Stack className="items-center gap-8 p-8">
          <InfoTooltip content="Example content" direction="top" />
          <InfoTooltip content="Example content" direction="right" />
          <InfoTooltip content="Example content" direction="bottom" />
          <InfoTooltip content="Example content" direction="left" />
        </Stack>
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<Stack className="items-center gap-8 p-8">
  <InfoTooltip content="Example content" direction="top" />
  <InfoTooltip content="Example content" direction="right" />
  <InfoTooltip content="Example content" direction="bottom" />
  <InfoTooltip content="Example content" direction="left" />
</Stack>`}
        />
      ),
    },
    {
      title: "Size",
      demo: (
        <Stack className="items-center gap-8 p-8">
          <InfoTooltip content="Example content" size="sm" />
          <InfoTooltip content="Example content" size="md" />
          <InfoTooltip content="Example content" size="lg" />
        </Stack>
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<Stack className="items-center gap-8 p-8">
  <InfoTooltip content="Example content" size="sm" />
  <InfoTooltip content="Example content" size="md" />
  <InfoTooltip content="Example content" size="lg" />
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
                <InlineCode>InfoTooltip</InlineCode>, you could pass anything
                you normally would pass to <InlineCode>{"<span>"}</InlineCode>{" "}
                because the return value{" "}
                <Link href="https://github.com/adamzerner/rfui/blob/master/islands/molecules/info-tooltip.tsx">
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
      componentName="InfoTooltip"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/islands/molecules/info-tooltip.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
