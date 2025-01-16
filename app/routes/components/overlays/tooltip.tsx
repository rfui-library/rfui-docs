import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { CodeBlock, InlineCode, Link, Stack, Tooltip } from "rfui-package";

export default () => {
  const overviewNotes = (
    <Stack className="gap-3">
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
      <p>
        Note: Consider using a dotted underline for your trigger instead of an
        "i" icon. [
        <Link href="https://ux.stackexchange.com/a/35774/39046">source</Link>]
      </p>
    </Stack>
  );
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: <Tooltip content="Example content">Test</Tooltip>,
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<Tooltip content="Example content">Test</Tooltip>`}
        />
      ),
    },
    {
      title: "Direction",
      demo: (
        <Stack className="items-center gap-8 p-8">
          <Tooltip direction="top" content="Example content">
            Top
          </Tooltip>
          <Tooltip direction="right" content="Example content">
            Right
          </Tooltip>
          <Tooltip direction="bottom" content="Example content">
            Bottom
          </Tooltip>
          <Tooltip direction="left" content="Example content">
            Left
          </Tooltip>
        </Stack>
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<Stack className="items-center gap-8 p-8">
  <Tooltip direction="top" content="Example content">
    Top
  </Tooltip>
  <Tooltip direction="right" content="Example content">
    Right
  </Tooltip>
  <Tooltip direction="bottom" content="Example content">
    Bottom
  </Tooltip>
  <Tooltip direction="left" content="Example content">
    Left
  </Tooltip>
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
          name: "children",
          required: true,
          type: "ComponentChild",
          default: null,
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
                <InlineCode>Tooltip</InlineCode>, you could pass anything you
                normally would pass to <InlineCode>{"<span>"}</InlineCode>{" "}
                because the return value{" "}
                <Link href="https://github.com/rfui-library/rfui-package/tree/master/src/overlays/tooltip.tsx">
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
      componentName="Tooltip"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/overlays/tooltip.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
