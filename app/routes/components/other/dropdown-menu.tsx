import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { CodeBlock, DropdownMenu, InlineCode, Link } from "rfui-package";

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
      title: "Button styling",
      description: (
        <div>
          Whatever you pass to <InlineCode>buttonProps</InlineCode> will be
          passed through to a{" "}
          <Link href="/components/form/button">
            <InlineCode>Button</InlineCode>
          </Link>{" "}
          component that <InlineCode>DropdownMenu</InlineCode> uses internally.
        </div>
      ),
      demo: (
        <DropdownMenu
          buttonText="Button styling example"
          buttonProps={{ variant: "primary" }}
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
        />
      ),
      code: `<DropdownMenu
  buttonText="Button styling example"
  buttonProps={{ variant: "primary" }}
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
    {
      title: "Sections",
      demo: (
        <DropdownMenu
          buttonText="Example of sections"
          items={[
            {
              type: "section",
              heading: "Fruits",
              items: [
                {
                  type: "button",
                  text: "Apple",
                  onClick: () => {
                    alert("Apple");
                  },
                },
                {
                  type: "button",
                  text: "Banana",
                  onClick: () => {
                    alert("Banana");
                  },
                },
              ],
            },
            {
              type: "section",
              heading: "Vegetables",
              items: [
                {
                  type: "button",
                  text: "Onion",
                  onClick: () => {
                    alert("Onion");
                  },
                },
                {
                  type: "button",
                  text: "Carrot",
                  onClick: () => {
                    alert("Carrot");
                  },
                },
              ],
            },
          ]}
        />
      ),
      code: `<DropdownMenu
  buttonText="Example of sections"
  items={[
    {
      type: "section",
      heading: "Fruits",
      items: [
        {
          type: "button",
          text: "Apple",
          onClick: () => {
            alert("Apple");
          },
        },
        {
          type: "button",
          text: "Banana",
          onClick: () => {
            alert("Banana");
          },
        },
      ],
    },
    {
      type: "section",
      heading: "Vegetables",
      items: [
        {
          type: "button",
          text: "Onion",
          onClick: () => {
            alert("Onion");
          },
        },
        {
          type: "button",
          text: "Carrot",
          onClick: () => {
            alert("Carrot");
          },
        },
      ],
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
          name: "buttonProps",
          required: false,
          type: "Partial<ButtonType>",
          default: null,
          notes: (
            <div>
              See the docs for the{" "}
              <Link href="/components/form/button">
                <InlineCode>Button</InlineCode>
              </Link>{" "}
              component.
            </div>
          ),
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
