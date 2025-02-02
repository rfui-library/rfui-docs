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
          name: "links",
          required: true,
          type: "BreadcrumbLink[]",
          default: null,
          notes: (
            <div>
              The type for <InlineCode>BreadcrumbLink</InlineCode> is:
              <CodeBlock
                language="tsx"
                code={`type BreadcrumbLink = {
  title: string;
  href: string;
};`}
              />
            </div>
          ),
        },
        {
          name: "size",
          required: false,
          type: '"sm" | "md" | "lg" | "xl"',
          default: '"sm"',
          notes: null,
        },
        {
          name: "...rest",
          required: false,
          type: `ComponentProps<"nav">`,
          default: null,
          notes: (
            <div>
              <div className="leading-relaxed">
                See the docs for{" "}
                <Link href="/rest-parameters">rest parameters</Link>. For{" "}
                <InlineCode>Breadcrumbs</InlineCode>, you could pass anything
                you normally would pass to <InlineCode>{"<nav>"}</InlineCode>{" "}
                because the container{" "}
                <Link href="https://github.com/rfui-library/rfui-package/tree/master/src/navigation/breadcrumbs.tsx">
                  looks something like
                </Link>{" "}
                this:
              </div>
              <CodeBlock
                language="tsx"
                code={`<nav className={className} {...restWithoutClass}>
  {children}
</nav>`}
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
