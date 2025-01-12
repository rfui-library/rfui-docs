import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { Flex, Link, CodeBlock, InlineCode } from "rfui";

export default () => {
  const overviewNotes = null;
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
                <Link href="https://github.com/adamzerner/rfui/blob/master/islands/molecules/flex.tsx">
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
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/helpers/flex.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
