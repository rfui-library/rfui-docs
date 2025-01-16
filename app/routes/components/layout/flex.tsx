import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { CodeBlock, Flex, InlineCode, Link, Stack } from "rfui";

export default () => {
  const overviewNotes = (
    <Stack className="gap-3">
      <div>
        A helper to make it easier to set up{" "}
        <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout">
          flexbox layouts
        </Link>
        .
      </div>
      <div>
        Tip: Check out Josh W. Comeau's excellent post{" "}
        <Link href="https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/">
          An Interactive Guide to Flexbox
        </Link>
        .
      </div>
    </Stack>
  );
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: (
        <Flex className="gap-8">
          <div>left</div>
          <div>center</div>
          <div>right</div>
        </Flex>
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<Flex className="gap-8">
  <div>left</div>
  <div>center</div>
  <div>right</div>
</Flex>`}
        />
      ),
    },
  ];
  const propsTables = [
    {
      title: null,
      props: [
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
          type: 'Omit<ComponentProps<"div">, "size">',
          default: null,
          notes: (
            <div>
              <div className="leading-relaxed">
                See the docs for{" "}
                <Link href="/rest-parameters">rest parameters</Link>. For{" "}
                <InlineCode>Flex</InlineCode>, you could pass anything you
                normally would pass to <InlineCode>{"<div>"}</InlineCode>{" "}
                because the return value{" "}
                <Link href="https://github.com/rfui-library/rfui-package/tree/master/src/layout/flex.tsx">
                  looks something like
                </Link>{" "}
                this:
              </div>
              <CodeBlock
                language="tsx"
                code={`<div className={containerClass} {...restWithoutClass}>
  {children}
</div>`}
              />
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <ComponentDocsPage
      componentName="Flex"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/layout/flex.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
