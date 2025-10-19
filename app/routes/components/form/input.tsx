import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { CodeBlock, InlineCode, Input, Link, Stack } from "rfui-package";

export default () => {
  const overviewNotes = (
    <div>
      This component is basically just a wrapper for{" "}
      <InlineCode>{`<input />`}</InlineCode>. You'll probably want to use it
      along with a <InlineCode>{`<label>`}</InlineCode>. You also might prefer
      to use RFUI's{" "}
      <Link href="/components/form/form-field">
        <InlineCode>FormField</InlineCode>
      </Link>{" "}
      to wrap it.
    </div>
  );
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: <Input />,
      code: `<Input />`,
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
          <InlineCode>onChange</InlineCode> work because of{" "}
          <Link href="/rest-parameters">
            <InlineCode>...rest</InlineCode>
          </Link>
          .
        </div>
      ),
      demo: <Input />,
      code: `<Input value={value} onChange={onChange} />`,
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
          <Input size="sm" />
          <Input size="md" />
          <Input size="lg" />
        </Stack>
      ),
      code: `<Stack className="w-fit gap-5">
  <Input size="sm" />
  <Input size="md" />
  <Input size="lg" />
</Stack>`,
    },
    {
      title: "Rounded",
      description: (
        <div>
          Set <InlineCode>rounded</InlineCode> to either{" "}
          <InlineCode>"square"</InlineCode>, <InlineCode>"sm"</InlineCode>,{" "}
          <InlineCode>"lg"</InlineCode> or <InlineCode>"full"</InlineCode>.
          Defaults to the value of the CSS variable{" "}
          <InlineCode>--default-roundedness</InlineCode>. See{" "}
          <Link href="/default-roundedness">"Default roundedness"</Link>.
        </div>
      ),
      demo: (
        <Stack className="w-fit gap-5">
          <Input rounded="square" />
          <Input rounded="sm" />
          <Input rounded="lg" />
          <Input rounded="full" />
        </Stack>
      ),
      code: `<Stack className="w-fit gap-5">
  <Input rounded="square" />
  <Input rounded="sm" />
  <Input rounded="lg" />
  <Input rounded="full" />
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
      demo: <Input disabled />,
      code: `<Input disabled />`,
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
      demo: <Input readOnly defaultValue="example" />,
      code: `<Input readOnly defaultValue="example" />`,
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
      demo: <Input invalid defaultValue="example" />,
      code: `<Input invalid defaultValue="example" />`,
    },
    {
      title: "Content before/after",
      description: (
        <div>
          Set <InlineCode>contentBefore</InlineCode> and{" "}
          <InlineCode>contentAfter</InlineCode> to the content you want to
          display before and after the input.{" "}
        </div>
      ),
      demo: (
        <Stack className="gap-4">
          <Input contentBefore="$" />
          <Input contentAfter="%" />
          <Input contentBefore="https://" contentAfter=".com" />
        </Stack>
      ),
      code: `<Stack className="gap-4">
  <Input contentBefore="$" />
  <Input contentAfter="%" />
  <Input contentBefore="https://" contentAfter=".com" />
</Stack>`,
    },
    {
      title: "Type",
      description: (
        <div>
          RFUI's <InlineCode>Input</InlineCode> component wraps the native HTML{" "}
          <InlineCode>input</InlineCode> and passes{" "}
          <InlineCode>type</InlineCode> to <InlineCode>input</InlineCode>, and
          so you could find the possible values documented{" "}
          <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#input_types">
            here on MDN
          </Link>
          . If you are thinking of using <InlineCode>number</InlineCode>,
          consider taking{" "}
          <Link href="https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/">
            this approach
          </Link>{" "}
          instead.
        </div>
      ),
      demo: (
        <Stack className="gap-5">
          <Input type="text" placeholder="text" />
          <Input type="email" placeholder="email" />
          <Input type="text" inputMode="numeric" pattern="[0-9]*" />
          <Input type="number" />
          <Input type="password" defaultValue="foobar" />
          <Input type="date" />
          <Input type="datetime-local" />
          <Input type="time" />
          <Input type="file" />
          <Input type="range" />
          <Input type="color" />
        </Stack>
      ),
      code: `<Stack className="gap-5">
  <Input type="text" placeholder="text" />
  <Input type="email" placeholder="email" />
  <Input type="text" inputmode="numeric" pattern="[0-9]*" />
  <Input type="number" />
  <Input type="password" defaultValue="foobar" />
  <Input type="date" />
  <Input type="datetime-local" />
  <Input type="time" />
  <Input type="file" />
  <Input type="range" />
  <Input type="color" />
</Stack>`,
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
          name: "invalid",
          required: false,
          type: "boolean",
          default: "false",
          notes: null,
        },
        {
          name: "contentBefore",
          required: false,
          type: "ReactNode",
          default: null,
          notes: null,
        },
        {
          name: "contentAfter",
          required: false,
          type: "ReactNode",
          default: null,
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
                <InlineCode>Input</InlineCode>, you could pass anything you
                normally would pass to <InlineCode>{"<input />"}</InlineCode>{" "}
                because the return value{" "}
                <Link href="https://github.com/rfui-library/rfui-package/tree/master/src/form/input.tsx">
                  looks something like
                </Link>{" "}
                this:
              </div>
              <CodeBlock
                language="tsx"
                code={`<input
  className={className}
  {...restWithoutClass}
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
      componentName="Input"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/form/input.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
