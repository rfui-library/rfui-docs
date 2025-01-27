import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { CodeBlock, InlineCode, Link, Stack, Textarea } from "rfui-package";

export default () => {
  const overviewNotes = null;
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: <Textarea></Textarea>,
      code: `<Textarea></Textarea>`,
    },
    {
      title: "Controlled",
      description: (
        <div>
          See{" "}
          <Link href="https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components">
            Controlled & Uncontrolled Components
          </Link>
          . Passing <InlineCode>value</InlineCode> and{" "}
          <InlineCode>onInput</InlineCode> work because of{" "}
          <Link href="/rest-parameters">
            <InlineCode>...rest</InlineCode>
          </Link>
          .
        </div>
      ),
      demo: <Textarea></Textarea>,
      code: `<Textarea value={value} onInput={onInput}></Textarea>`,
    },
    {
      title: "Rounded",
      description: (
        <div>
          Set <InlineCode>rounded</InlineCode> to{" "}
          <InlineCode>"square"</InlineCode>, <InlineCode>"sm"</InlineCode> or{" "}
          <InlineCode>"lg"</InlineCode>. Defaults to the value of the CSS
          variable <InlineCode>--default-roundedness</InlineCode>. See{" "}
          <Link href="/default-roundedness">"Default roundedness"</Link>.
        </div>
      ),
      demo: (
        <Stack className="gap-5">
          <Textarea rounded="square"></Textarea>
          <Textarea rounded="sm"></Textarea>
          <Textarea rounded="lg"></Textarea>
        </Stack>
      ),
      code: `<Stack className="gap-5">
  <Textarea rounded="square"></Textarea>
  <Textarea rounded="sm"></Textarea>
  <Textarea rounded="lg"></Textarea>
</Stack>`,
    },
    {
      title: "Disabled",
      description: (
        <div>
          Set <InlineCode>disabled</InlineCode> to either{" "}
          <InlineCode>true</InlineCode> or <InlineCode>false</InlineCode>.
          Defaults to <InlineCode>false</InlineCode>.
        </div>
      ),
      demo: <Textarea disabled></Textarea>,
      code: `<Textarea disabled></Textarea>`,
    },
    {
      title: "Readonly",
      description: (
        <div>
          Set <InlineCode>readOnly</InlineCode> to either{" "}
          <InlineCode>true</InlineCode> or <InlineCode>false</InlineCode>.
          Defaults to <InlineCode>false</InlineCode>.
        </div>
      ),
      demo: <Textarea readOnly>Example</Textarea>,
      code: `<Textarea readOnly>Example</Textarea>`,
    },
    {
      title: "Invalid",
      description: (
        <div>
          Set <InlineCode>invalid</InlineCode> to either{" "}
          <InlineCode>true</InlineCode> or <InlineCode>false</InlineCode>.
          Defaults to <InlineCode>false</InlineCode>.
        </div>
      ),
      demo: <Textarea invalid>Example</Textarea>,
      code: `<Textarea invalid>Example</Textarea>`,
    },
  ];
  const propsTables = [
    {
      title: null,
      props: [
        {
          name: "rounded",
          required: false,
          type: "'square' | 'sm' | 'lg'",
          default: null,
          notes: (
            <div>
              Defaults to the value of the CSS variable{" "}
              <InlineCode>--default-roundedness</InlineCode>. See{" "}
              <Link href="/default-roundedness">"Default roundedness"</Link>.
            </div>
          ),
        },
        {
          name: "invalid",
          required: false,
          type: "boolean",
          default: "false",
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
      componentName="Textarea"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/form/textarea.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
