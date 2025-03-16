import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { useState } from "react";
import { EditableText, InlineCode } from "rfui-package";

export default () => {
  const [basicExampleText, setBasicExampleText] = useState(
    "Lorem ipsum dolor..."
  );
  const [textareaExampleText, setTextareaExampleText] = useState(
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
        <EditableText
          text={basicExampleText}
          onChange={(newText) => {
            setBasicExampleText(newText);
          }}
        />
      ),
      code: `<EditableText
  text={basicExampleText}
  onChange={(newText) => {
    setBasicExampleText(newText);
  }}
/>`,
    },
    {
      title: "Textarea",
      demo: (
        <EditableText
          type="textarea"
          text={textareaExampleText}
          onChange={(newText) => {
            setTextareaExampleText(newText);
          }}
        />
      ),
      code: `<EditableText
  text={textareaExampleText}
  onChange={(newText) => {
    setTextareaExampleText(newText);
  }}
/>`,
    },
    {
      title: "Empty state with placeholder",
      demo: (
        <EditableText
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
      code: `<EditableText
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
          to <InlineCode>Text</InlineCode>, <InlineCode>Input</InlineCode>, and{" "}
          <InlineCode>Textarea</InlineCode>. If instead you want to pass props
          to only one of those three components, you can use{" "}
          <InlineCode>textProps</InlineCode>,{" "}
          <InlineCode>inputProps</InlineCode>, or{" "}
          <InlineCode>textareaProps</InlineCode>.
        </div>
      ),
      demo: (
        <EditableText
          text={restExampleText}
          onChange={(newText) => {
            setRestExampleText(newText);
          }}
          className="text-supporting-green-500"
        />
      ),
      code: `<EditableText
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
          name: "type",
          required: false,
          type: '"input" | "textarea"',
          default: '"input"',
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
          name: "textProps",
          required: false,
          type: 'Omit<TextType, "onClick">',
          default: null,
          notes: (
            <div>
              Gets passed to <InlineCode>Text</InlineCode>.
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
          name: "textareaProps",
          required: false,
          type: `Omit<
  InputType,
  "onClick" | "type" | "value" | "onChange" | "onBlur"
>`,
          default: null,
          notes: (
            <div>
              Gets passed to <InlineCode>Textarea</InlineCode>.
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
              passed to <InlineCode>Text</InlineCode>,{" "}
              <InlineCode>Input</InlineCode>, and{" "}
              <InlineCode>Textarea</InlineCode>. If instead you want to pass
              props to only one of those three components, you can use{" "}
              <InlineCode>textProps</InlineCode>,{" "}
              <InlineCode>inputProps</InlineCode>, or{" "}
              <InlineCode>textareaProps</InlineCode>.
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <ComponentDocsPage
      componentName="EditableText"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/editable-text/editable-text.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
