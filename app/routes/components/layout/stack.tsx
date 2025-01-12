import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { CodeBlock, InlineCode, Link, Stack } from "rfui";

export default () => {
  const overviewNotes = null;
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: (
        <Stack className="gap-5">
          <div>top</div>
          <div>middle</div>
          <div>bottom</div>
        </Stack>
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<Stack className="gap-5">
  <div>top</div>
  <div>middle</div>
  <div>bottom</div>
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
                <InlineCode>Stack</InlineCode>, you could pass anything you
                normally would pass to <InlineCode>{"<div>"}</InlineCode>{" "}
                because the return value{" "}
                <Link href="https://github.com/adamzerner/rfui/blob/master/islands/molecules/stack.tsx">
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
      componentName="Stack"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/layout/stack.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
