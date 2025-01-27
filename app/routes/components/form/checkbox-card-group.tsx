import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import {
  CheckboxCardGroup,
  CheckboxCardGroupItem,
  CodeBlock,
  InlineCode,
  Link,
  Stack,
} from "rfui-package";

export default () => {
  const overviewNotes =
    "Add some flair and professionalism to your checkboxes and associated content.";
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: (
        <CheckboxCardGroup>
          <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
          <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
          <CheckboxCardGroupItem>Three</CheckboxCardGroupItem>
        </CheckboxCardGroup>
      ),
      code: `<CheckboxCardGroup>
  <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
  <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
  <CheckboxCardGroupItem>Three</CheckboxCardGroupItem>
</CheckboxCardGroup>`,
    },
    {
      title: "Name",
      description: (
        <div>
          The approach below leads to <InlineCode>name</InlineCode> being passed
          to <InlineCode>{`<input type="checkbox" />`}</InlineCode>. This is
          useful when you are doing native form submissions.
        </div>
      ),
      demo: (
        <CheckboxCardGroup>
          <CheckboxCardGroupItem name="one">One</CheckboxCardGroupItem>
          <CheckboxCardGroupItem name="two">Two</CheckboxCardGroupItem>
          <CheckboxCardGroupItem name="three">Three</CheckboxCardGroupItem>
        </CheckboxCardGroup>
      ),
      code: `<CheckboxCardGroup>
  <CheckboxCardGroupItem name="one">One</CheckboxCardGroupItem>
  <CheckboxCardGroupItem name="two">Two</CheckboxCardGroupItem>
  <CheckboxCardGroupItem name="three">Three</CheckboxCardGroupItem>
</CheckboxCardGroup>`,
    },
    {
      title: "Handling changes",
      description: (
        <div>
          Pass <InlineCode>onChange</InlineCode> to{" "}
          <InlineCode>CheckboxCardGroupItem</InlineCode>. It has a type of{" "}
          <InlineCode>{`(newValue: boolean) => void`}</InlineCode>.
        </div>
      ),
      demo: (
        <CheckboxCardGroup>
          <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
          <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
          <CheckboxCardGroupItem>Three</CheckboxCardGroupItem>
        </CheckboxCardGroup>
      ),
      code: `<CheckboxCardGroup>
  <CheckboxCardGroupItem onChange={() => {...}}>One</CheckboxCardGroupItem>
  <CheckboxCardGroupItem onChange={() => {...}}>Two</CheckboxCardGroupItem>
  <CheckboxCardGroupItem onChange={() => {...}}>Three</CheckboxCardGroupItem>
</CheckboxCardGroup>`,
    },
    {
      title: "Padding",
      description: (
        <div>
          Set <InlineCode>padding</InlineCode> to <InlineCode>"sm"</InlineCode>,{" "}
          <InlineCode>"md"</InlineCode>, or <InlineCode>"lg"</InlineCode>.
          Defaults to <InlineCode>"md"</InlineCode>.
        </div>
      ),
      demo: (
        <Stack className="gap-5">
          <CheckboxCardGroup padding="sm">
            <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
            <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
            <CheckboxCardGroupItem>Three</CheckboxCardGroupItem>
          </CheckboxCardGroup>
          <CheckboxCardGroup padding="md">
            <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
            <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
            <CheckboxCardGroupItem>Three</CheckboxCardGroupItem>
          </CheckboxCardGroup>
          <CheckboxCardGroup padding="lg">
            <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
            <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
            <CheckboxCardGroupItem>Three</CheckboxCardGroupItem>
          </CheckboxCardGroup>
        </Stack>
      ),
      code: `<Stack class="gap-5">
  <CheckboxCardGroup padding="sm">
    <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
    <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
    <CheckboxCardGroupItem>Three</CheckboxCardGroupItem>
  </CheckboxCardGroup>
  <CheckboxCardGroup padding="md">
    <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
    <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
    <CheckboxCardGroupItem>Three</CheckboxCardGroupItem>
  </CheckboxCardGroup>
  <CheckboxCardGroup padding="lg">
    <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
    <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
    <CheckboxCardGroupItem>Three</CheckboxCardGroupItem>
  </CheckboxCardGroup>
</Stack>`,
    },
    {
      title: "Rounded",
      description: (
        <div>
          Set <InlineCode>rounded</InlineCode> to{" "}
          <InlineCode>"square"</InlineCode>, <InlineCode>"sm"</InlineCode>, or{" "}
          <InlineCode>"lg"</InlineCode>. Defaults to the value of the CSS
          variable <InlineCode>--default-roundedness</InlineCode>. See{" "}
          <Link href="/default-roundedness">"Default roundedness"</Link>.
        </div>
      ),
      demo: (
        <Stack className="gap-5">
          <CheckboxCardGroup rounded="square">
            <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
            <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
            <CheckboxCardGroupItem>Three</CheckboxCardGroupItem>
          </CheckboxCardGroup>
          <CheckboxCardGroup rounded="sm">
            <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
            <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
            <CheckboxCardGroupItem>Three</CheckboxCardGroupItem>
          </CheckboxCardGroup>
          <CheckboxCardGroup rounded="lg">
            <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
            <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
            <CheckboxCardGroupItem>Three</CheckboxCardGroupItem>
          </CheckboxCardGroup>
        </Stack>
      ),
      code: `<Stack class="gap-5">
  <CheckboxCardGroup rounded="square">
    <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
    <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
    <CheckboxCardGroupItem>Three</CheckboxCardGroupItem>
  </CheckboxCardGroup>
  <CheckboxCardGroup rounded="sm">
    <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
    <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
    <CheckboxCardGroupItem>Three</CheckboxCardGroupItem>
  </CheckboxCardGroup>
  <CheckboxCardGroup rounded="lg">
    <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
    <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
    <CheckboxCardGroupItem>Three</CheckboxCardGroupItem>
  </CheckboxCardGroup>
</Stack>`,
    },
  ];
  const propsTables = [
    {
      title: null,
      props: [
        {
          name: "padding",
          required: false,
          type: '"sm" | "md" | "lg"',
          default: '"md"',
          notes: null,
        },
        {
          name: "rounded",
          required: false,
          type: '"square" | "sm" | "lg"',
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
          name: "children",
          required: true,
          type: "ComponentChild",
          default: null,
          notes: null,
        },
      ],
    },
    {
      title: "CheckboxCardGroupItem",
      props: [
        {
          name: "defaultIsChecked",
          required: false,
          type: "boolean",
          default: "false",
          notes: null,
        },
        {
          name: "onChange",
          required: false,
          type: "(newValue: boolean) => void",
          default: null,
          notes: null,
        },
        {
          name: "name",
          required: false,
          type: 'CheckboxType["name"]',
          default: null,
          notes: null,
        },
        {
          name: "checkboxRest",
          required: false,
          type: 'Omit<CheckboxType, "size" | "name">',
          default: null,
          notes: (
            <div>
              <div className="leading-relaxed">
                This gets spread to the <InlineCode>Checkbox</InlineCode> like
                so:
              </div>
              <CodeBlock
                language="tsx"
                code={`<div>
  ...
  <Checkbox {...checkboxRest} />
</div>`}
              />
            </div>
          ),
        },
        {
          name: "children",
          required: true,
          type: "ComponentChild",
          default: null,
          notes: null,
        },
      ],
    },
  ];

  return (
    <ComponentDocsPage
      componentName="CheckboxCardGroup"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/islands/molecules/checkbox-card-group.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
