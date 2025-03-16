import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { useState } from "react";
import { EditableH2, InlineCode } from "rfui-package";

export default () => {
  const [basicExampleText, setBasicExampleText] = useState(
    "Lorem ipsum dolor..."
  );
  const [restExampleText, setRestExampleText] = useState(
    "Lorem ipsum dolor..."
  );
  const overviewNotes = null;
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: (
        <EditableH2
          text={basicExampleText}
          onChange={(newText) => {
            setBasicExampleText(newText);
          }}
        />
      ),
      code: `<EditableH2
  text={basicExampleText}
  onChange={(newText) => {
    setBasicExampleText(newText);
  }}
/>`,
    },
    {
      title: "...rest",
      description: (
        <div>
          Whatever you pass to <InlineCode>...rest</InlineCode> will get passed
          to <InlineCode>H2</InlineCode> and
          <InlineCode>Input</InlineCode>. If instead you want to pass props to
          only one of those two components, you can use{" "}
          <InlineCode>h2</InlineCode> or
          <InlineCode>inputProps</InlineCode>.
        </div>
      ),
      demo: (
        <EditableH2
          text={restExampleText}
          onChange={(newText) => {
            setRestExampleText(newText);
          }}
          className="text-supporting-green-500"
        />
      ),
      code: `<EditableH2
  text={restExampleText}
  onChange={(newText) => {
    setRestExampleText(newText);
  }}
  className="text-supporting-green-500"
/>`,
    },
  ];
  const propsTables = [
    {
      title: null,
      props: [
        {
          name: "text",
          required: true,
          type: "string",
          default: null,
          notes: null,
        },
        {
          name: "onChange",
          required: true,
          type: "(newText: string) => void",
          default: null,
          notes: null,
        },
        {
          name: "h2Props",
          required: false,
          type: 'Omit<H2Type, "onClick">',
          default: null,
          notes: (
            <div>
              Gets passed to <InlineCode>H2</InlineCode>.
            </div>
          ),
        },
        {
          name: "inputProps",
          required: false,
          type: `Omit<
  InputType,
  "onClick" | "type" | "value" | "onChange" | "onBlur"
>`,
          default: null,
          notes: (
            <div>
              Gets passed to <InlineCode>Input</InlineCode>.
            </div>
          ),
        },
        {
          name: "...rest",
          required: false,
          type: `See TypeScript type`,
          default: null,
          notes: (
            <div>
              Whatever you pass to <InlineCode>...rest</InlineCode> will get
              passed to <InlineCode>H2</InlineCode> and
              <InlineCode>Input</InlineCode>. If instead you want to pass props
              to only one of those two components, you can use{" "}
              <InlineCode>h2</InlineCode> or
              <InlineCode>inputProps</InlineCode>.
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <ComponentDocsPage
      componentName="EditableH2"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/editable-text/editable-h2.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
