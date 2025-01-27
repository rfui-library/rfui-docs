import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import {
  InlineCode,
  Link,
  RadioButtonCardGroup,
  RadioButtonCardGroupItem,
  Stack,
} from "rfui-package";

export default () => {
  const overviewNotes = (
    <Stack className="gap-2">
      <div>
        Add some flair and professionalism to your radio buttons and associated
        content.
      </div>
      <div>
        Note: The example below is slightly buggy due to a quirk in the docs,
        not due to a real issue with the component.
      </div>
    </Stack>
  );
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: (
        <RadioButtonCardGroup name="basic-example">
          <RadioButtonCardGroupItem value="one">One</RadioButtonCardGroupItem>
          <RadioButtonCardGroupItem value="two">Two</RadioButtonCardGroupItem>
          <RadioButtonCardGroupItem value="three">
            Three
          </RadioButtonCardGroupItem>
        </RadioButtonCardGroup>
      ),
      code: `<RadioButtonCardGroup name="basic-example">
  <RadioButtonCardGroupItem value="one">One</RadioButtonCardGroupItem>
  <RadioButtonCardGroupItem value="two">Two</RadioButtonCardGroupItem>
  <RadioButtonCardGroupItem value="three">Three</RadioButtonCardGroupItem>
</RadioButtonCardGroup>`,
    },
    {
      title: "Reacting to changes",
      demo: (
        <RadioButtonCardGroup
          name="on-change-example"
          onChange={(newValue) => {
            console.log(newValue);
          }}
        >
          <RadioButtonCardGroupItem value="one">One</RadioButtonCardGroupItem>
          <RadioButtonCardGroupItem value="two">Two</RadioButtonCardGroupItem>
          <RadioButtonCardGroupItem value="three">
            Three
          </RadioButtonCardGroupItem>
        </RadioButtonCardGroup>
      ),
      code: `<RadioButtonCardGroup 
  name="on-change-example" 
  onChange={(newValue) => {
    console.log(newValue);
  }}
>
  <RadioButtonCardGroupItem value="one">One</RadioButtonCardGroupItem>
  <RadioButtonCardGroupItem value="two">Two</RadioButtonCardGroupItem>
  <RadioButtonCardGroupItem value="three">Three</RadioButtonCardGroupItem>
</RadioButtonCardGroup>`,
    },
    {
      title: "With different value initially selected",
      description: (
        <div>
          By default the first value will be selected. This is in accordance
          with{" "}
          <Link href="https://www.nngroup.com/articles/radio-buttons-default-selection/">
            UX best practices
          </Link>
          . If you want a different value to be selected you can use{" "}
          <InlineCode>initialSelectedValue</InlineCode>.
        </div>
      ),
      demo: (
        <RadioButtonCardGroup
          name="initial-selected-value-example"
          initialSelectedValue="two"
        >
          <RadioButtonCardGroupItem value="one">One</RadioButtonCardGroupItem>
          <RadioButtonCardGroupItem value="two">Two</RadioButtonCardGroupItem>
          <RadioButtonCardGroupItem value="three">
            Three
          </RadioButtonCardGroupItem>
        </RadioButtonCardGroup>
      ),
      code: `<RadioButtonCardGroup 
  name="initial-selected-value-example" 
  initialSelectedValue="two"
>
  <RadioButtonCardGroupItem value="one">One</RadioButtonCardGroupItem>
  <RadioButtonCardGroupItem value="two">Two</RadioButtonCardGroupItem>
  <RadioButtonCardGroupItem value="three">Three</RadioButtonCardGroupItem>
</RadioButtonCardGroup>`,
    },
    {
      title: "With no value initially selected",
      description: (
        <div>
          By default the first value will be selected. This is in accordance
          with{" "}
          <Link href="https://www.nngroup.com/articles/radio-buttons-default-selection/">
            UX best practices
          </Link>
          . If you don't want a value to be initially selected you can set{" "}
          <InlineCode>initialSelectedValue</InlineCode> to an empty string.
        </div>
      ),
      demo: (
        <RadioButtonCardGroup
          name="no-initial-selected-value-example"
          initialSelectedValue=""
        >
          <RadioButtonCardGroupItem value="one">One</RadioButtonCardGroupItem>
          <RadioButtonCardGroupItem value="two">Two</RadioButtonCardGroupItem>
          <RadioButtonCardGroupItem value="three">
            Three
          </RadioButtonCardGroupItem>
        </RadioButtonCardGroup>
      ),
      code: `<RadioButtonCardGroup 
  name="no-initial-selected-value-example" 
  initialSelectedValue=""
>
  <RadioButtonCardGroupItem value="one">One</RadioButtonCardGroupItem>
  <RadioButtonCardGroupItem value="two">Two</RadioButtonCardGroupItem>
  <RadioButtonCardGroupItem value="three">Three</RadioButtonCardGroupItem>
</RadioButtonCardGroup>`,
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
          <RadioButtonCardGroup name="padding-example-sm" padding="sm">
            <RadioButtonCardGroupItem value="one">One</RadioButtonCardGroupItem>
            <RadioButtonCardGroupItem value="two">Two</RadioButtonCardGroupItem>
            <RadioButtonCardGroupItem value="three">
              Three
            </RadioButtonCardGroupItem>
          </RadioButtonCardGroup>
          <RadioButtonCardGroup name="padding-example-md" padding="md">
            <RadioButtonCardGroupItem value="one">One</RadioButtonCardGroupItem>
            <RadioButtonCardGroupItem value="two">Two</RadioButtonCardGroupItem>
            <RadioButtonCardGroupItem value="three">
              Three
            </RadioButtonCardGroupItem>
          </RadioButtonCardGroup>
          <RadioButtonCardGroup name="padding-example-lg" padding="lg">
            <RadioButtonCardGroupItem value="one">One</RadioButtonCardGroupItem>
            <RadioButtonCardGroupItem value="two">Two</RadioButtonCardGroupItem>
            <RadioButtonCardGroupItem value="three">
              Three
            </RadioButtonCardGroupItem>
          </RadioButtonCardGroup>
        </Stack>
      ),
      code: `<Stack className="gap-5">
  <RadioButtonCardGroup name="padding-example-sm" padding="sm">
    <RadioButtonCardGroupItem value="one">One</RadioButtonCardGroupItem>
    <RadioButtonCardGroupItem value="two">Two</RadioButtonCardGroupItem>
    <RadioButtonCardGroupItem value="three">Three</RadioButtonCardGroupItem>
  </RadioButtonCardGroup>
  <RadioButtonCardGroup name="padding-example-md" padding="md">
    <RadioButtonCardGroupItem value="one">One</RadioButtonCardGroupItem>
    <RadioButtonCardGroupItem value="two">Two</RadioButtonCardGroupItem>
    <RadioButtonCardGroupItem value="three">Three</RadioButtonCardGroupItem>
  </RadioButtonCardGroup>
  <RadioButtonCardGroup name="padding-example-lg" padding="lg">
    <RadioButtonCardGroupItem value="one">One</RadioButtonCardGroupItem>
    <RadioButtonCardGroupItem value="two">Two</RadioButtonCardGroupItem>
    <RadioButtonCardGroupItem value="three">Three</RadioButtonCardGroupItem>
  </RadioButtonCardGroup>
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
          <RadioButtonCardGroup name="rounded-example-square" rounded="square">
            <RadioButtonCardGroupItem value="one">One</RadioButtonCardGroupItem>
            <RadioButtonCardGroupItem value="two">Two</RadioButtonCardGroupItem>
            <RadioButtonCardGroupItem value="three">
              Three
            </RadioButtonCardGroupItem>
          </RadioButtonCardGroup>
          <RadioButtonCardGroup name="rounded-example-sm" rounded="sm">
            <RadioButtonCardGroupItem value="one">One</RadioButtonCardGroupItem>
            <RadioButtonCardGroupItem value="two">Two</RadioButtonCardGroupItem>
            <RadioButtonCardGroupItem value="three">
              Three
            </RadioButtonCardGroupItem>
          </RadioButtonCardGroup>
          <RadioButtonCardGroup name="rounded-example-lg" rounded="lg">
            <RadioButtonCardGroupItem value="one">One</RadioButtonCardGroupItem>
            <RadioButtonCardGroupItem value="two">Two</RadioButtonCardGroupItem>
            <RadioButtonCardGroupItem value="three">
              Three
            </RadioButtonCardGroupItem>
          </RadioButtonCardGroup>
        </Stack>
      ),
      code: `<Stack className="gap-5">
  <RadioButtonCardGroup name="rounded-example-square" rounded="square">
    <RadioButtonCardGroupItem value="one">One</RadioButtonCardGroupItem>
    <RadioButtonCardGroupItem value="two">Two</RadioButtonCardGroupItem>
    <RadioButtonCardGroupItem value="three">Three</RadioButtonCardGroupItem>
  </RadioButtonCardGroup>
  <RadioButtonCardGroup name="rounded-example-sm" rounded="sm">
    <RadioButtonCardGroupItem value="one">One</RadioButtonCardGroupItem>
    <RadioButtonCardGroupItem value="two">Two</RadioButtonCardGroupItem>
    <RadioButtonCardGroupItem value="three">Three</RadioButtonCardGroupItem>
  </RadioButtonCardGroup>
  <RadioButtonCardGroup name="rounded-example-lg" rounded="lg">
    <RadioButtonCardGroupItem value="one">One</RadioButtonCardGroupItem>
    <RadioButtonCardGroupItem value="two">Two</RadioButtonCardGroupItem>
    <RadioButtonCardGroupItem value="three">Three</RadioButtonCardGroupItem>
  </RadioButtonCardGroup>
</Stack>`,
    },
  ];
  const propsTables = [
    {
      title: null,
      props: [
        {
          name: "name",
          required: true,
          type: 'RadioButtonType["name"]',
          default: null,
          notes: null,
        },
        {
          name: "initialSelectedValue",
          required: false,
          type: 'RadioButtonType["value"]',
          default: null,
          notes: null,
        },
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
          name: "onChange",
          required: false,
          type: '(newValue: RadioButtonType["value"]) => void;',
          default: null,
          notes: null,
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
      title: "RadioButtonCardGroupItem",
      props: [
        {
          name: "value",
          required: false,
          type: 'RadioButtonType["value"]',
          default: null,
          notes: null,
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
      componentName="RadioButtonCardGroup"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/islands/molecules/radio-button-card-group.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
