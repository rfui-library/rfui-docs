import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { CodeBlock, InlineCode, Link, Textarea } from "rfui-package";

export default () => {
  const overviewNotes = null;
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: <Textarea></Textarea>,
      code: `<Textarea></Textarea>`,
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
          type: 'ComponentProps<"textarea">',
          default: null,
          notes: (
            <div>
              <div className="leading-relaxed">
                See the docs for{" "}
                <Link href="/rest-parameters">rest parameters</Link>. For{" "}
                <InlineCode>Textarea</InlineCode>, you could pass anything you
                normally would pass to <InlineCode>{"<textarea>"}</InlineCode>{" "}
                because the return value{" "}
                <Link href="https://github.com/rfui-library/rfui-package/tree/master/src/form/textarea.tsx">
                  looks something like
                </Link>{" "}
                this:
              </div>
              <CodeBlock
                language="tsx"
                code={`<textarea
  className={className}
  {...resstWithoutClass}
>
  {children}
</textarea>`}
              />
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <ComponentDocsPage
      componentName="EditableText"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/form/editable-text.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
