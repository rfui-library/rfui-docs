import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { Checkbox, CodeBlock, InlineCode, Link, Stack } from "rfui";

export default () => {
  const overviewNotes = (
    <div>
      This component is basically just a wrapper for{" "}
      <InlineCode>{`<input type="checkbox" />`}</InlineCode>. You'll probably
      want to use it along with a <InlineCode>{`<label>`}</InlineCode>. You also
      might prefer to use RFUI's{" "}
      <Link href="/molecules/form-field">
        <InlineCode>{`FormField`}</InlineCode>
      </Link>{" "}
      component instead.
    </div>
  );
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: <Checkbox />,
      code: <CodeBlock className="mt-4" language="tsx" code={`<Checkbox />`} />,
    },
    {
      title: "Controlled",
      description: (
        <div>
          See{" "}
          <Link href="https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components">
            Controlled & Uncontrolled Components
          </Link>
          . Passing <InlineCode>checked</InlineCode> and{" "}
          <InlineCode>onClick</InlineCode> work because of{" "}
          <Link href="/rest-parameters">
            <InlineCode>...rest</InlineCode>
          </Link>
          .
        </div>
      ),
      demo: <Checkbox />,
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<Checkbox checked={checked} onClick={onClick} />`}
        />
      ),
    },
    {
      title: "Size",
      description: (
        <div>
          Set <InlineCode>size</InlineCode> to <InlineCode>"sm"</InlineCode>,{" "}
          <InlineCode>"md"</InlineCode>, or <InlineCode>"lg"</InlineCode>.
          Defaults to <InlineCode>"md"</InlineCode>.
        </div>
      ),
      demo: (
        <Stack className="gap-5">
          <Checkbox size="sm" />
          <Checkbox size="md" />
          <Checkbox size="lg" />
        </Stack>
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<Stack className="gap-5">
  <Checkbox size="sm" />
  <Checkbox size="md" />
  <Checkbox size="lg" />
</Stack>`}
        />
      ),
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
      demo: <Checkbox disabled />,
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<Checkbox disabled />`}
        />
      ),
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
      demo: <Checkbox invalid />,
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<Checkbox invalid />`}
        />
      ),
    },
  ];
  const propsTables = [
    {
      title: null,
      props: [
        {
          name: "size",
          required: false,
          type: '"sm" | "md" | "lg"',
          default: '"md"',
          notes: null,
        },
        {
          name: "invalid",
          required: false,
          type: '"sm" | "md" | "lg"',
          default: '"md"',
          notes: null,
        },
        {
          name: "...rest",
          required: false,
          type: 'Omit<ComponentProps<"input">, "size">',
          default: null,
          notes: (
            <div>
              <div className="leading-relaxed">
                See the docs for{" "}
                <Link href="/rest-parameters">rest parameters</Link>. For{" "}
                <InlineCode>Checkbox</InlineCode>, you could pass anything you
                normally would pass to{" "}
                <InlineCode>{'<input type="checkbox" />'}</InlineCode> because
                the return value{" "}
                <Link href="https://github.com/rfui-library/rfui-package/tree/master/src/form/checkbox.tsx">
                  looks something like
                </Link>{" "}
                this:
              </div>
              <CodeBlock
                language="tsx"
                code={`<input
  type="checkbox"
  className={className}
  {...rest}
/>`}
              />
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <ComponentDocsPage
      componentName="Checkbox"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/form/checkbox.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
