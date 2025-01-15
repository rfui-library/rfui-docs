import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { CodeBlock, HelpTooltip, InlineCode, Link, Stack } from "rfui";

export default () => {
  const overviewNotes = (
    <Stack className="gap-3">
      <p>
        This is just a thin wrapper over the{" "}
        <Link href="/components/overlays/tooltip">
          <InlineCode>Tooltip</InlineCode>
        </Link>{" "}
        component because it is a common need to use a help icon with a tooltip.
      </p>
      <p>
        Note: Tooltips are often overused. They are generally useful when the
        information in the tooltip is supplementary and when it isn't pragmatic
        to place the info on the screen. Consider Nielsen Norman Group's{" "}
        <Link href="https://www.nngroup.com/articles/tooltip-guidelines/">
          guidelines
        </Link>{" "}
        before using a tooltip.
      </p>
      <p>
        Note: To avoid accidental activations of the tooltip, a 400ms delay is
        used. [
        <Link href="https://ux.stackexchange.com/q/358/39046">source</Link>]
      </p>
      <p>
        Note: Tooltips are meant for small amounts of content. If you have a
        larger amount of content that you want to display after a user
        interaction, consider a popover component instead. [
        <Link href="https://ux.stackexchange.com/q/88844/39046">source</Link>]
      </p>
    </Stack>
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
          <HelpTooltip direction="top" content="Example content" />
          <HelpTooltip direction="right" content="Example content" />
          <HelpTooltip direction="bottom" content="Example content" />
          <HelpTooltip direction="left" content="Example content" />
        </Stack>
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<Stack className="items-center gap-8 p-8">
  <HelpTooltip direction="top" content="Example content" />
  <HelpTooltip direction="right" content="Example content" />
  <HelpTooltip direction="bottom" content="Example content" />
  <HelpTooltip direction="left" content="Example content" />
</Stack>`}
        />
      ),
    },
    {
      title: "Size",
      demo: (
        <Stack className="items-center gap-8 p-8">
          <HelpTooltip size="sm" content="Example content" />
          <HelpTooltip size="md" content="Example content" />
          <HelpTooltip size="lg" content="Example content" />
        </Stack>
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<Stack className="items-center gap-8 p-8">
  <HelpTooltip size="sm" content="Example content" />
  <HelpTooltip size="md" content="Example content" />
  <HelpTooltip size="lg" content="Example content" />
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
                <Link href="https://github.com/rfui-library/rfui-package/tree/master/src/overlays/help-tooltip.tsx">
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
