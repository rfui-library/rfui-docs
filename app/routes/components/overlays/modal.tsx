import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import type { ReactNode } from "react";
import { useState } from "react";
import { Button, InlineCode, Modal } from "rfui-package";

type ModalExampleProps = { heading?: string; children: ReactNode };

export const ModalExample = ({ heading, children }: ModalExampleProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Button onClick={open}>Open Modal</Button>
      <Modal isOpen={isOpen} close={close} heading={heading}>
        {children}
      </Modal>
    </div>
  );
};

export default () => {
  const overviewNotes = null;
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: <ModalExample>Example</ModalExample>,
      code: `<Modal isOpen={isOpen} close={close}>
  Example
</Modal>`,
    },
    {
      title: "With heading",
      description: (
        <div>
          Set <InlineCode>heading</InlineCode> to a string.
        </div>
      ),
      demo: <ModalExample heading="Modal heading">Example</ModalExample>,
      code: `<Modal heading="Modal heading" isOpen={isOpen} close={close}>
  Example
</Modal>`,
    },
  ];
  const propsTables = [
    {
      title: null,
      props: [
        {
          name: "isOpen",
          required: true,
          type: "boolean",
          default: null,
          notes: null,
        },
        {
          name: "close",
          required: true,
          type: "() => void",
          default: null,
          notes: (
            <div>
              Use this to set <InlineCode>isOpen</InlineCode> to{" "}
              <InlineCode>false</InlineCode>.
            </div>
          ),
        },
        {
          name: "heading",
          required: false,
          type: "string",
          default: null,
          notes: null,
        },
        {
          name: "className",
          required: false,
          type: "string",
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
      componentName="Modal"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/overlays/modal.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
