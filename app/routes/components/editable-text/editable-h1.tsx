import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { useState } from "react";
import { EditableH1, InlineCode } from "rfui-package";

export default () => {
  const [basicExampleText, setBasicExampleText] = useState(
    "Lorem ipsum dolor..."
  );
  const [emptyStateExampleText, setEmptyStateExampleText] = useState("");
  const [restExampleText, setRestExampleText] = useState(
    "Lorem ipsum dolor..."
  );
  const overviewNotes = null;
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: (
        <EditableH1
          text={basicExampleText}
          onChange={(newText) => {
            setBasicExampleText(newText);
          }}
        />
      ),
      code: `<EditableH1
  text={basicExampleText}
  onChange={(newText) => {
    setBasicExampleText(newText);
  }}
/>`,
    },
    {
      title: "Empty state with placeholder",
      demo: (
        <EditableH1
          emptyStateText="Empty state text"
          text={emptyStateExampleText}
          onChange={(newText) => {
            if (newText.length > 0) {
              setEmptyStateExampleText(newText);
            }
          }}
          inputProps={{ placeholder: "Placeholder text..." }}
        />
      ),
      code: `<EditableH1
  emptyStateText="Empty state text"
  text={emptyStateExampleText}
  onChange={(newText) => {
    if (newText.length > 0) {
      setEmptyStateExampleText(newText);
    }
  }}
  inputProps={{ placeholder: "Placeholder text..." }}
/>`,
    },
    {
      title: "...rest",
      description: (
        <div>
          Whatever you pass to <InlineCode>...rest</InlineCode> will get passed
          to <InlineCode>H1</InlineCode> and
          <InlineCode>Input</InlineCode>. If instead you want to pass props to
          only one of those two components, you can use{" "}
          <InlineCode>h1</InlineCode> or
          <InlineCode>inputProps</InlineCode>.
        </div>
      ),
      demo: (
        <EditableH1
          text={restExampleText}
          onChange={(newText) => {
            setRestExampleText(newText);
          }}
          className="text-supporting-green-500"
        />
      ),
      code: `<EditableH1
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
          name: "emptyStateText",
          required: false,
          type: "string",
          default: null,
          notes: null,
        },
        {
          name: "h1Props",
          required: false,
          type: 'Omit<H1Type, "onClick">',
          default: null,
          notes: (
            <div>
              Gets passed to <InlineCode>H1</InlineCode>.
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
              passed to <InlineCode>H1</InlineCode> and
              <InlineCode>Input</InlineCode>. If instead you want to pass props
              to only one of those two components, you can use{" "}
              <InlineCode>h1</InlineCode> or
              <InlineCode>inputProps</InlineCode>.
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <ComponentDocsPage
      componentName="EditableH1"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/editable-text/editable-h1.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
