import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { CodeBlock, Highlight, InlineCode, Link } from "rfui-package";

export default () => {
  const overviewNotes = null;
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: (
        <div>
          The <Highlight>pizza</Highlight> is very good.
        </div>
      ),
      code: `<div>
  The <Highlight>pizza</Highlight> is very good.
</div>`,
    },
    {
      title: "Longer example",
      demo: (
        <div>
          <h1 className="mb-5 text-3xl">
            Lorem ipsum <Highlight>dolor</Highlight> sit amet, consectetur.
          </h1>
          <div>
            Lorem ipsum <Highlight>dolor sit amet</Highlight>, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. <Highlight>Duis aute irure</Highlight> dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      ),
      code: `<div>
  <h1 className="mb-5 text-3xl">
    Lorem ipsum <Highlight>dolor</Highlight> sit amet, consectetur.
  </h1>
  <div>
    Lorem ipsum{" "}
    <Highlight>dolor sit amet</Highlight>, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
    ut aliquip ex ea commodo consequat.{" "}
    <Highlight>Duis aute irure</Highlight>{" "}
    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
    in culpa qui officia deserunt mollit anim id est laborum.
  </div>
</div>`,
    },
  ];
  const propsTables = [
    {
      title: null,
      props: [
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
          type: 'ComponentProps<"mark">',
          default: null,
          notes: (
            <div>
              <div className="leading-relaxed">
                See the docs for{" "}
                <Link href="/rest-parameters">rest parameters</Link>. For{" "}
                <InlineCode>Highlight</InlineCode>, you could pass anything you
                normally would pass to <InlineCode>{"<mark>"}</InlineCode>{" "}
                because the return value{" "}
                <Link href="https://github.com/rfui-library/rfui-package/tree/master/src/typography/highlight.tsx">
                  looks something like
                </Link>{" "}
                this:
              </div>
              <CodeBlock
                language="tsx"
                code={`<mark
  className={className}
  {...restWithoutClass}
>
  {children}
</mark>`}
              />
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <ComponentDocsPage
      componentName="Highlight"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/typography/highlight.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
