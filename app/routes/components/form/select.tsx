import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { CodeBlock, InlineCode, Link, Select, Stack } from "rfui";

export default () => {
  const overviewNotes = (
    <div>
      Select dropdowns are{" "}
      <Link href="https://ux.stackexchange.com/q/456/39046">appropriate</Link>{" "}
      when you are allowing the user to choose between many options. If there
      are only a few options to choose from, prefer the{" "}
      <Link href="/components/form/radio-button">
        <InlineCode>RadioButton</InlineCode>
      </Link>{" "}
      component.
    </div>
  );
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: (
        <Select>
          <option value="foo">foo</option>
          <option value="bar">bar</option>
          <option value="baz">baz</option>
        </Select>
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<Select>
  <option value="foo">foo</option>
  <option value="bar">bar</option>
  <option value="baz">baz</option>
</Select>`}
        />
      ),
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
          <InlineCode>onChange</InlineCode> work because of{" "}
          <Link href="/rest-parameters">
            <InlineCode>...rest</InlineCode>
          </Link>
          .
        </div>
      ),
      demo: (
        <Select>
          <option value="foo">foo</option>
          <option value="bar">bar</option>
          <option value="baz">baz</option>
        </Select>
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<Select value={value} onChange={onChange}>
  <option value="foo">foo</option>
  <option value="bar">bar</option>
  <option value="baz">baz</option>
</Select>`}
        />
      ),
    },
    {
      title: "Size",
      description: (
        <div>
          Set <InlineCode>size</InlineCode> to either{" "}
          <InlineCode>"sm"</InlineCode>, <InlineCode>"md"</InlineCode> or{" "}
          <InlineCode>"lg"</InlineCode>. Defaults to{" "}
          <InlineCode>"md"</InlineCode>.
        </div>
      ),
      demo: (
        <Stack className="w-fit gap-5">
          <Select size="sm">
            <option value="foo">foo</option>
            <option value="bar">bar</option>
            <option value="baz">baz</option>
          </Select>
          <Select size="md">
            <option value="foo">foo</option>
            <option value="bar">bar</option>
            <option value="baz">baz</option>
          </Select>
          <Select size="lg">
            <option value="foo">foo</option>
            <option value="bar">bar</option>
            <option value="baz">baz</option>
          </Select>
        </Stack>
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<Stack className="w-fit gap-5">
  <Select size="sm">
    <option value="foo">foo</option>
    <option value="bar">bar</option>
    <option value="baz">baz</option>
  </Select>
  <Select size="md">
    <option value="foo">foo</option>
    <option value="bar">bar</option>
    <option value="baz">baz</option>
  </Select>
  <Select size="lg">
    <option value="foo">foo</option>
    <option value="bar">bar</option>
    <option value="baz">baz</option>
  </Select>
</Stack>`}
        />
      ),
    },
    {
      title: "Rounded",
      description: (
        <div>
          Set <InlineCode>rounded</InlineCode> to either{" "}
          <InlineCode>"square"</InlineCode>, <InlineCode>"sm"</InlineCode>, or{" "}
          <InlineCode>"lg"</InlineCode>. Defaults to the value of the CSS
          variable <InlineCode>--default-roundedness</InlineCode>. See{" "}
          <Link href="/default-roundedness">"Default roundedness"</Link>.
        </div>
      ),
      demo: (
        <Stack className="w-fit gap-5">
          <Select rounded="square">
            <option value="foo">foo</option>
            <option value="bar">bar</option>
            <option value="baz">baz</option>
          </Select>
          <Select rounded="sm">
            <option value="foo">foo</option>
            <option value="bar">bar</option>
            <option value="baz">baz</option>
          </Select>
          <Select rounded="lg">
            <option value="foo">foo</option>
            <option value="bar">bar</option>
            <option value="baz">baz</option>
          </Select>
        </Stack>
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<Stack className="w-fit gap-5">
  <Select rounded="square">
    <option value="foo">foo</option>
    <option value="bar">bar</option>
    <option value="baz">baz</option>
  </Select>
  <Select rounded="sm">
    <option value="foo">foo</option>
    <option value="bar">bar</option>
    <option value="baz">baz</option>
  </Select>
  <Select rounded="lg">
    <option value="foo">foo</option>
    <option value="bar">bar</option>
    <option value="baz">baz</option>
  </Select>
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
      demo: (
        <Select disabled>
          <option value="foo">foo</option>
          <option value="bar">bar</option>
          <option value="baz">baz</option>
        </Select>
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<Select disabled>
  <option value="foo">foo</option>
  <option value="bar">bar</option>
  <option value="baz">baz</option>
</Select>`}
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
      demo: (
        <Select invalid>
          <option value="foo">foo</option>
          <option value="bar">bar</option>
          <option value="baz">baz</option>
        </Select>
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<Select invalid>
  <option value="foo">foo</option>
  <option value="bar">bar</option>
  <option value="baz">baz</option>
</Select>`}
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
          name: "rounded",
          required: false,
          type: '"square" | "sm" | "lg" | "full"',
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
          name: "disabled",
          required: false,
          type: "boolean",
          default: "false",
          notes: null,
        },
        {
          name: "invalid",
          required: false,
          type: "boolean",
          default: "false",
          notes: null,
        },
        {
          name: "...rest",
          required: false,
          type: 'Omit<ComponentProps<"select">, "size">',
          default: null,
          notes: (
            <div>
              <div className="leading-relaxed">
                See the docs for{" "}
                <Link href="/rest-parameters">rest parameters</Link>. For{" "}
                <InlineCode>Select</InlineCode>, you could pass anything you
                normally would pass to <InlineCode>{"<select>"}</InlineCode>{" "}
                because the return value{" "}
                <Link href="https://github.com/rfui-library/rfui-package/tree/master/src/form/select.tsx">
                  looks something like
                </Link>{" "}
                this:
              </div>
              <CodeBlock
                language="tsx"
                code={`<select
  className={className}
  {...restWithoutClass}
>
  {children}
</select>`}
              />
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <ComponentDocsPage
      componentName="Select"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/form/select.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
