import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { CodeBlock, InlineCode, Link, NavigationLinks, Stack } from "rfui";

export default () => {
  const overviewNotes =
    'This component is useful for lists of links. RFUI uses it for the "Components" section on the left side of this page and for the "On this page" section on the right side of this page.';
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: (
        <NavigationLinks
          linkItems={[
            {
              name: "One",
              href: "/one",
            },
            {
              name: "Two",
              href: "/two",
            },
          ]}
        />
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<NavigationLinks
  linkItems={[{
    name: "One",
    href: "/one",
  }, {
    name: "Two",
    href: "/two",
  }]}
/>`}
        />
      ),
    },
    {
      title: "With header",
      demo: (
        <NavigationLinks
          linkItems={[
            {
              name: "Header",
              isHeader: true,
            },
            {
              name: "One",
              href: "/one",
            },
            {
              name: "Two",
              href: "/two",
            },
          ]}
        />
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<NavigationLinks
  linkItems={[{
    name: "Header",
    isHeader: true,
  }, {
    name: "One",
    href: "/one",
  }, {
    name: "Two",
    href: "/two",
  }]}
/>`}
        />
      ),
    },
    {
      title: "Multilevel",
      description: (
        <div>
          To go more levels deep, just keep using{" "}
          <InlineCode>children</InlineCode>.
        </div>
      ),
      demo: (
        <NavigationLinks
          linkItems={[
            {
              name: "Components",
              isHeader: true,
            },
            {
              name: "Atoms",
              children: [
                {
                  name: "Badge",
                  href: "/atoms/badge",
                },
                {
                  name: "Blockquote",
                  href: "/atoms/blockquote",
                },
              ],
            },
            {
              name: "Molecules",
              children: [
                {
                  name: "Alert",
                  href: "/molecules/alert",
                },
                {
                  name: "Card",
                  href: "/molecules/card",
                },
              ],
            },
          ]}
        />
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<NavigationLinks
  linkItems={[{
    name: "Components",
    isHeader: true,
  }, {
    name: "Atoms",
    children: [{
      name: "Badge",
      href: "/atoms/badge",
    }, {
      name: "Blockquote",
      href: "/atoms/blockquote",
    }],
  }, {
    name: "Molecules",
    children: [{
      name: "Alert",
      href: "/molecules/alert",
    }, {
      name: "Card",
      href: "/molecules/card",
    }],
  }]}
/>`}
        />
      ),
    },
    {
      title: "In page",
      description: (
        <div>
          Using the <InlineCode>inPage</InlineCode> property will trigger the{" "}
          <InlineCode>Link</InlineCode> component's{" "}
          <Link href="/atoms/link#example-in-page-link">
            in-page link functionality
          </Link>
          .
        </div>
      ),
      demo: (
        <NavigationLinks
          linkItems={[
            {
              name: "One",
              href: "#one",
              inPage: true,
            },
            {
              name: "Two",
              href: "#two",
              inPage: true,
            },
          ]}
        />
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<NavigationLinks
  linkItems={[{
    name: "One",
    href: "#one",
    inPage: true,
  }, {
    name: "Two",
    href: "#two",
    inPage: true,
  }]}
/>`}
        />
      ),
    },
    {
      title: "Sticky",
      description: (
        <Stack className="gap-4">
          <div>
            Often times you'll want this component to be sticky, such that it
            stays in place when you scroll down. To accomplish this you'll want
            to add something like:
          </div>
          <CodeBlock
            language="tsx"
            code='className="sticky top-6 max-h-[90vh] overflow-y-auto"'
          />
          <div>Note: the example below isn't actually sticky.</div>
        </Stack>
      ),
      demo: (
        <NavigationLinks
          linkItems={[
            {
              name: "One",
              href: "/one",
            },
            {
              name: "Two",
              href: "/two",
            },
          ]}
        />
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<NavigationLinks
  className="sticky top-6 max-h-[90vh] overflow-y-auto"
  linkItems={[{
    name: "One",
    href: "/one",
  }, {
    name: "Two",
    href: "/two",
  }]}
/>`}
        />
      ),
    },
  ];
  const propsTables = [
    {
      title: null,
      props: [
        {
          name: "linkItems",
          required: true,
          type: "LinkItemType[]",
          default: null,
          notes: (
            <div>
              The type for <InlineCode>LinkItemType</InlineCode> is below. Note
              that it is defined recursively.
              <CodeBlock
                language="tsx"
                code={`type LinkItemType = {
  name: string;
  href?: string;
  isHeader?: boolean;
  inPage?: boolean;
  children?: LinkItemType[];
}`}
              />
            </div>
          ),
        },
        {
          name: "...rest",
          required: false,
          type: 'ComponentProps<"nav">',
          default: null,
          notes: (
            <div>
              <div className="leading-relaxed">
                See the docs for{" "}
                <Link href="/rest-parameters">rest parameters</Link>. For{" "}
                <InlineCode>NavigationLinks</InlineCode>, you could pass
                anything you normally would pass to{" "}
                <InlineCode>{"<nav>"}</InlineCode> because the return value{" "}
                <Link href="https://github.com/adamzerner/rfui/blob/master/components/molecules/navigation-links.tsx">
                  looks something like
                </Link>{" "}
                this:
              </div>
              <CodeBlock
                language="tsx"
                code={`<nav className={containerClass} {...restWithoutClass}>
  ...
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
      componentName="NavigationLinks"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/navigation/navigation-links.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
