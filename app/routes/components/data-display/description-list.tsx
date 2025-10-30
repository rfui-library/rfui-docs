import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import {
  CodeBlock,
  DescriptionList,
  DescriptionListItem,
  InlineCode,
  Link,
} from "rfui-package";

export default () => {
  const overviewNotes = null;
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: (
        <DescriptionList>
          <DescriptionListItem label="Name">John Doe</DescriptionListItem>
          <DescriptionListItem label="Age">30</DescriptionListItem>
        </DescriptionList>
      ),
      code: `<DescriptionList>
  <DescriptionListItem label="Name">John Doe</DescriptionListItem>
  <DescriptionListItem label="Age">30</DescriptionListItem>
</DescriptionList>`,
    },
  ];
  const propsTables = [
    {
      title: null,
      props: [
        {
          name: "...rest",
          required: false,
          type: 'ComponentProps<"dl">',
          default: null,
          notes: (
            <div>
              <div className="leading-relaxed">
                See the docs for{" "}
                <Link href="/rest-parameters">rest parameters</Link>. For{" "}
                <InlineCode>DefinitionList</InlineCode>, you could pass anything
                you normally would pass to <InlineCode>{"<dl>"}</InlineCode>{" "}
                because the container{" "}
                <Link href="https://github.com/rfui-library/rfui-package/tree/master/src/data-display/definition-list.tsx">
                  looks something like
                </Link>{" "}
                this:
              </div>
              <CodeBlock
                language="tsx"
                code={`<dl className={className} {...restWithoutClass}>
  {children}
</dl>`}
              />
            </div>
          ),
        },
      ],
    },
    {
      title: "DescriptionListItem",
      props: [
        {
          name: "label",
          required: true,
          type: "string",
          default: null,
          notes: null,
        },
      ],
    },
  ];

  return (
    <ComponentDocsPage
      componentName="DefinitionList"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/data-display/definition-list.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
