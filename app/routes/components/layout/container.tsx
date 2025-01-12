import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { Container, Link, CodeBlock, InlineCode } from "rfui";

export default () => {
  const overviewNotes =
    "Wrap your site's content in a container to provide an app-wide width.";
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: <Container className="bg-neutral-50">Example</Container>,
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<Container className="bg-neutral-50">Example</Container>`}
        />
      ),
    },
  ];
  const propsTables = [
    {
      title: null,
      props: [
        {
          name: "size",
          required: false,
          type: '"sm" | "md" | "lg" | "xl" | "2xl"',
          default: '"lg"',
          notes: (
            <div>
              The screen size that you want the width of the inner content to
              be. See Tailwind CSS's{" "}
              <Link href="https://tailwindcss.com/docs/responsive-design">
                Responsive Design
              </Link>{" "}
              page.
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
          type: 'Omit<ComponentProps<"div">, "size">',
          default: null,
          notes: (
            <div>
              <div className="leading-relaxed">
                See the docs for{" "}
                <Link href="/rest-parameters">rest parameters</Link>. For{" "}
                <InlineCode>Container</InlineCode>, you could pass anything you
                normally would pass to <InlineCode>{"<div>"}</InlineCode>{" "}
                because the return value{" "}
                <Link href="https://github.com/adamzerner/rfui/blob/master/islands/molecules/container.tsx">
                  looks something like
                </Link>{" "}
                this:
              </div>
              <CodeBlock
                language="tsx"
                code={`<div className={containerClass} {...restWithoutClass}>
  {children}
</div>`}
              />
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <ComponentDocsPage
      componentName="Container"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/helpers/container.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
