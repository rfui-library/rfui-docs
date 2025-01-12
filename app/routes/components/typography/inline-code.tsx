import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { CodeBlock, InlineCode, Link } from "rfui";

export default () => {
  const overviewNotes = null;
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: (
        <div>
          When I wrote <InlineCode>sayHello("John")</InlineCode> it didn't work.
        </div>
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<div>
  When I wrote <InlineCode>sayHello("John")</InlineCode> it didn't work.
</div>`}
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
          type: 'ComponentProps<"code">',
          default: null,
          notes: (
            <div>
              <div className="leading-relaxed">
                See the docs for{" "}
                <Link href="/rest-parameters">rest parameters</Link>. For{" "}
                <InlineCode>InlineCode</InlineCode>, you could pass anything you
                normally would pass to <InlineCode>{"<code>"}</InlineCode>{" "}
                because the return value{" "}
                <Link href="https://github.com/adamzerner/rfui/blob/master/islands/atoms/inline-code.tsx">
                  looks something like
                </Link>{" "}
                this:
              </div>
              <CodeBlock
                language="tsx"
                code={`<code
  className={className}
  {...restWithoutClass}
>
  {children}
</code>`}
              />
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <ComponentDocsPage
      componentName="InlineCode"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/atoms/inline-code.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
