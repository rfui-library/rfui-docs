import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { useState } from "react";
import {
  CodeBlock,
  InlineCode,
  Link,
  RadioButtonGroup,
  RadioButtonGroupItem,
} from "rfui-package";

export default () => {
  const [selectedValue, setSelectedValue] = useState("free");
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
      code: `<RadioButtonGroup name="plan">
  <RadioButtonGroupItem value="free">
    Free
  </RadioButtonGroupItem>
  <RadioButtonGroupItem value="basic">
    Basic
  </RadioButtonGroupItem>
  <RadioButtonGroupItem value="premium">
    Premium
  </RadioButtonGroupItem>
</RadioButtonGroup>`,
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
        <RadioButtonGroup name="plan-2" initialSelectedValue="basic">
          <RadioButtonGroupItem value="free">Free</RadioButtonGroupItem>
          <RadioButtonGroupItem value="basic">Basic</RadioButtonGroupItem>
          <RadioButtonGroupItem value="premium">Premium</RadioButtonGroupItem>
        </RadioButtonGroup>
      ),
      code: `<RadioButtonGroup name="plan-2" initialSelectedValue="basic">
  <RadioButtonGroupItem value="free">
    Free
  </RadioButtonGroupItem>
  <RadioButtonGroupItem value="basic">
    Basic
  </RadioButtonGroupItem>
  <RadioButtonGroupItem value="premium">
    Premium
  </RadioButtonGroupItem>
</RadioButtonGroup>`,
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
        <RadioButtonGroup name="plan-3" initialSelectedValue="">
          <RadioButtonGroupItem value="free">Free</RadioButtonGroupItem>
          <RadioButtonGroupItem value="basic">Basic</RadioButtonGroupItem>
          <RadioButtonGroupItem value="premium">Premium</RadioButtonGroupItem>
        </RadioButtonGroup>
      ),
      code: `<RadioButtonGroup name="plan-3" initialSelectedValue="">
  <RadioButtonGroupItem value="free">
    Free
  </RadioButtonGroupItem>
  <RadioButtonGroupItem value="basic">
    Basic
  </RadioButtonGroupItem>
  <RadioButtonGroupItem value="premium">
    Premium
  </RadioButtonGroupItem>
</RadioButtonGroup>`,
    },
    {
      title: "Controlled",
      demo: (
        <RadioButtonGroup
          name="plan-4"
          selectedValue={selectedValue}
          onChange={(newSelectedVal) => {
            setSelectedValue(newSelectedVal as string);
          }}
        >
          <RadioButtonGroupItem value="free">Free</RadioButtonGroupItem>
          <RadioButtonGroupItem value="basic">Basic</RadioButtonGroupItem>
          <RadioButtonGroupItem value="premium">Premium</RadioButtonGroupItem>
        </RadioButtonGroup>
      ),
      code: `<RadioButtonGroup
  name="plan-4"
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
</RadioButtonGroup>`,
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
          name: "initialSelectedValue",
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
