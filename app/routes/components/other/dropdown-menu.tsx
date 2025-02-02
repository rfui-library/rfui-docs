import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { CodeBlock, DropdownMenu, InlineCode } from "rfui-package";

export default () => {
  const overviewNotes = null;
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: (
        <DropdownMenu
          buttonText="Basic example"
          items={[
            {
              type: "button",
              text: "Foo long text some more longer text",
              onClick: () => {
                alert("Foo");
              },
            },
            {
              type: "button",
              text: "Bar",
              onClick: () => {
                alert("Bar");
              },
            },
          ]}
        />
      ),
      code: `<DropdownMenu
  buttonText="Basic example"
  items={[
    {
      type: "button",
      text: "Foo",
      onClick: () => {
        alert("Foo");
      },
    },
    {
      type: "button",
      text: "Bar",
      onClick: () => {
        alert("Bar");
      },
    },
  ]}
/>`,
    },
    {
      title: "Links",
      demo: (
        <DropdownMenu
          buttonText="Links example"
          items={[
            {
              type: "link",
              text: "Foo",
              href: "/foo",
            },
            {
              type: "link",
              text: "Bar",
              href: "/bar",
            },
          ]}
        />
      ),
      code: `<DropdownMenu
  buttonText="Links example"
  items={[
    {
      type: "link",
      text: "Foo",
      href: "/foo",
    },
    {
      type: "link",
      text: "Bar",
      href: "/bar",
    },
  ]}
/>`,
    },
    {
      title: "Separator",
      demo: (
        <DropdownMenu
          buttonText="Separator example"
          items={[
            {
              type: "button",
              text: "Foo",
              onClick: () => {
                alert("Foo");
              },
            },
            { type: "separator" },
            {
              type: "button",
              text: "Bar",
              onClick: () => {
                alert("Bar");
              },
            },
          ]}
        />
      ),
      code: `<DropdownMenu
  buttonText="Separator example"
  items={[
    {
      type: "button",
      text: "Foo",
      onClick: () => {
        alert("Foo");
      },
    },
    { type: "separator" },
    {
      type: "button",
      text: "Bar",
      onClick: () => {
        alert("Bar");
      },
    },
  ]}
/>`,
    },
  ];
  const propsTables = [
    {
      title: null,
      props: [
        {
          name: "buttonText",
          required: true,
          type: "string",
          default: null,
          notes: null,
        },
        {
          name: "items",
          required: true,
          type: `{
  buttonText: string;
  items: DropdownMenuItemType[];
}`,
          default: null,
          notes: (
            <div>
              The type for <InlineCode>DropdownMenuItemType</InlineCode> is:
              <CodeBlock
                language="tsx"
                code={`type DropdownMenuItemType =
  | { type: "link"; text: string; href: string; disabled?: boolean }
  | { type: "button"; text: string; onClick: () => void; disabled?: boolean }
  | { type: "separator" }
  | { type: "section"; heading: string; items: DropdownMenuItemType[] };
`}
              />
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <ComponentDocsPage
      componentName="DropdownMenu"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/other/dropdown-menu.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
