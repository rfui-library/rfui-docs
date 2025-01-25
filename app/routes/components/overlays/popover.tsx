import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import {
  Button,
  CodeBlock,
  InlineCode,
  Link,
  Popover,
  Stack,
} from "rfui-package";

export default () => {
  const overviewNotes = (
    <Stack className="gap-3">
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
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<Popover content="Example content">Test</Popover>`}
        />
      ),
    },
    //     {
    //       title: "Direction",
    //       demo: (
    //         <Stack className="items-center gap-8 p-8">
    //           <Tooltip direction="top" content="Example content">
    //             Top
    //           </Tooltip>
    //           <Tooltip direction="right" content="Example content">
    //             Right
    //           </Tooltip>
    //           <Tooltip direction="bottom" content="Example content">
    //             Bottom
    //           </Tooltip>
    //           <Tooltip direction="left" content="Example content">
    //             Left
    //           </Tooltip>
    //         </Stack>
    //       ),
    //       code: (
    //         <CodeBlock
    //           className="mt-4"
    //           language="tsx"
    //           code={`<Stack className="items-center gap-8 p-8">
    //   <Tooltip direction="top" content="Example content">
    //     Top
    //   </Tooltip>
    //   <Tooltip direction="right" content="Example content">
    //     Right
    //   </Tooltip>
    //   <Tooltip direction="bottom" content="Example content">
    //     Bottom
    //   </Tooltip>
    //   <Tooltip direction="left" content="Example content">
    //     Left
    //   </Tooltip>
    // </Stack>`}
    //         />
    //       ),
    //     },
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
      componentName="Popover"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/overlays/popover.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
