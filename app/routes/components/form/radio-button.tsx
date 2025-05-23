import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { CodeBlock, InlineCode, Link, RadioButton, Stack } from "rfui-package";

export default () => {
  const overviewNotes = (
    <Stack className="gap-3">
      <div>
        This component is basically just a wrapper for{" "}
        <InlineCode>{`<input type="radio" />`}</InlineCode>. You'll probably
        want to use it along with a <InlineCode>{`<label>`}</InlineCode>. You
        also might prefer to use RFUI's{" "}
        <Link href="/components/form/form-field">
          <InlineCode>FormField</InlineCode>
        </Link>{" "}
        component to wrap it.
      </div>
      <div>
        Radio buttons are{" "}
        <Link href="https://ux.stackexchange.com/q/456/39046">appropriate</Link>{" "}
        when you are allowing the user to choose between a few options. If there
        are many options to choose from, prefer the{" "}
        <Link href="/components/form/select">
          <InlineCode>Select</InlineCode>
        </Link>{" "}
        component.
      </div>
    </Stack>
  );
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: <RadioButton />,
      code: `<RadioButton />`,
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
      demo: <RadioButton />,
      code: `<RadioButton checked={checked} onClick={onClick} />`,
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
        <Stack className="gap-5">
          <RadioButton size="sm" />
          <RadioButton size="md" />
          <RadioButton size="lg" />
        </Stack>
      ),
      code: `<Stack className="gap-5">
  <RadioButton size="sm" />
  <RadioButton size="md" />
  <RadioButton size="lg" />
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
      demo: <RadioButton disabled />,
      code: `<RadioButton disabled />`,
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
      demo: <RadioButton invalid />,
      code: `<RadioButton invalid />`,
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
                <InlineCode>RadioButton</InlineCode>, you could pass anything
                you normally would pass to{" "}
                <InlineCode>{'<input type="radio">'}</InlineCode> because the
                return value{" "}
                <Link href="https://github.com/rfui-library/rfui-package/tree/master/src/form/radio-button.tsx">
                  looks something like
                </Link>{" "}
                this:
              </div>
              <CodeBlock
                language="tsx"
                code={`<input
  type="radio"
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
      componentName="RadioButton"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/form/radio-button.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
