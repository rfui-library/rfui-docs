import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { CodeBlock, InfoTooltip, InlineCode, Link, Stack } from "rfui";

export default () => {
  const overviewNotes = (
    <Stack className="gap-3">
      <p>
        This is just a thin wrapper over the{" "}
        <Link href="/molecules/tooltip">
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
          <InfoTooltip direction="top" content="Example content" />
          <InfoTooltip direction="right" content="Example content" />
          <InfoTooltip direction="bottom" content="Example content" />
          <InfoTooltip direction="left" content="Example content" />
        </Stack>
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<Stack className="items-center gap-8 p-8">
  <InfoTooltip direction="top" content="Example content" />
  <InfoTooltip direction="right" content="Example content" />
  <InfoTooltip direction="bottom" content="Example content" />
  <InfoTooltip direction="left" content="Example content" />
</Stack>`}
        />
      ),
    },
    {
      title: "Size",
      demo: (
        <Stack className="items-center gap-8 p-8">
          <InfoTooltip size="sm" content="Example content" />
          <InfoTooltip size="md" content="Example content" />
          <InfoTooltip size="lg" content="Example content" />
        </Stack>
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<Stack className="items-center gap-8 p-8">
  <InfoTooltip size="sm" content="Example content" />
  <InfoTooltip size="md" content="Example content" />
  <InfoTooltip size="lg" content="Example content" />
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
                <Link href="https://github.com/rfui-library/rfui-package/tree/master/src/overlays/info-tooltip.tsx">
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
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/overlays/info-tooltip.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
