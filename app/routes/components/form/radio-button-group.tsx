import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import {
  CodeBlock,
  InlineCode,
  RadioButtonGroup,
  RadioButtonGroupItem,
} from "rfui";

export default () => {
  const overviewNotes = null;
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: (
        <RadioButtonGroup name="plan">
          <RadioButtonGroupItem value="free">Free</RadioButtonGroupItem>
          <RadioButtonGroupItem value="basic">Basic</RadioButtonGroupItem>
          <RadioButtonGroupItem value="premium">Premium</RadioButtonGroupItem>
        </RadioButtonGroup>
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<RadioButtonGroup name="plan">
  <RadioButtonGroupItem value="free">
    Free
  </RadioButtonGroupItem>
  <RadioButtonGroupItem value="basic">
    Basic
  </RadioButtonGroupItem>
  <RadioButtonGroupItem value="premium">
    Premium
  </RadioButtonGroupItem>
</RadioButtonGroup>`}
        />
      ),
    },
    {
      title: "With value initially selected",
      demo: (
        <RadioButtonGroup name="plan" defaultSelectedValue="free">
          <RadioButtonGroupItem value="free">Free</RadioButtonGroupItem>
          <RadioButtonGroupItem value="basic">Basic</RadioButtonGroupItem>
          <RadioButtonGroupItem value="premium">Premium</RadioButtonGroupItem>
        </RadioButtonGroup>
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<RadioButtonGroup name="plan" defaultSelectedValue="free">
  <RadioButtonGroupItem value="free">
    Free
  </RadioButtonGroupItem>
  <RadioButtonGroupItem value="basic">
    Basic
  </RadioButtonGroupItem>
  <RadioButtonGroupItem value="premium">
    Premium
  </RadioButtonGroupItem>
</RadioButtonGroup>`}
        />
      ),
    },
    {
      title: "Controlled",
      demo: (
        <RadioButtonGroup name="plan">
          <RadioButtonGroupItem value="free">Free</RadioButtonGroupItem>
          <RadioButtonGroupItem value="basic">Basic</RadioButtonGroupItem>
          <RadioButtonGroupItem value="premium">Premium</RadioButtonGroupItem>
        </RadioButtonGroup>
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<RadioButtonGroup
  name="plan"
  selectedValue={selectedValue}
  onChange={(newSelectedValue) => {
    setSelectedValue(newSelectedValue);
  }}
>
  <RadioButtonGroupItem value="free">
    Free
  </RadioButtonGroupItem>
  <RadioButtonGroupItem value="basic">
    Basic
  </RadioButtonGroupItem>
  <RadioButtonGroupItem value="premium">
    Premium
  </RadioButtonGroupItem>
</RadioButtonGroup>`}
        />
      ),
    },
  ];
  const propsTables = [
    {
      title: null,
      props: [
        {
          name: "name",
          required: false,
          type: "string",
          default: null,
          notes: (
            <div>
              This will be passed to the{" "}
              <InlineCode>{`<input type="radio" />`}</InlineCode> in{" "}
              <InlineCode>{`RadioButtonGroupItem`}</InlineCode>.
            </div>
          ),
        },
        {
          name: "defaultSelectedValue",
          required: false,
          type: 'RadioButtonType["value"]',
          default: null,
          notes: null,
        },
        {
          name: "selectedValue",
          required: false,
          type: 'RadioButtonType["value"]',
          default: null,
          notes: null,
        },
        {
          name: "onChange",
          required: false,
          type: '(newSelectedVal: RadioButtonType["value"]) => void',
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
      title: "RadioButtonGroupItem",
      props: [
        {
          name: "value",
          required: false,
          type: 'RadioButtonType["value"]',
          default: null,
          notes: null,
        },
        {
          name: "radioButtonRest",
          required: false,
          type: 'Omit<RadioButtonType, "size">',
          default: null,
          notes: (
            <div>
              <div className="leading-relaxed">
                This gets spread to the <InlineCode>RadioButton</InlineCode>{" "}
                like so:
              </div>
              <CodeBlock
                language="tsx"
                code={`<div>
  ...
  <RadioButton {...radioButtonRest} />
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
        {
          name: "...rest",
          required: false,
          type: 'ComponentProps<"label">',
          default: null,
          notes: null,
        },
      ],
    },
  ];

  return (
    <ComponentDocsPage
      componentName="RadioButtonGroup"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/form/radio-button-group.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
