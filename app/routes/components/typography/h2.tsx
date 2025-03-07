import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { CodeBlock, H2, InlineCode, Link, Stack, Text } from "rfui-package";

export default () => {
  const overviewNotes = null;
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: <H2>Hello world</H2>,
      code: `<H2>Hello world</H2>`,
    },
    {
      title: "Alongside paragraphs",
      demo: (
        <div>
          <H2>Hello world</H2>
          <Text>
            <p>
              Illo quia quam perferendis ut consectetur rerum dolores dolores.
              Reiciendis est beatae magnam ut amet quis sequi. Eaque consequatur
              consectetur non amet nostrum quo animi.
            </p>
            <p>
              Quod enim vitae et. Impedit ut maxime fugit excepturi harum
              qui.Praesentium pariatur nisi ut rerum et dolores sed.
            </p>
          </Text>
        </div>
      ),
      code: `<div>
  <H2>Hello world</H2>
  <Text>
    <p>
      Illo quia quam perferendis ut consectetur rerum dolores dolores.
      Reiciendis est beatae magnam ut amet quis sequi. Eaque consequatur
      consectetur non amet nostrum quo animi.
    </p>
    <p>
      Quod enim vitae et. Impedit ut maxime fugit excepturi harum
      qui.Praesentium pariatur nisi ut rerum et dolores sed.
    </p>
  </Text>
</div>`,
    },
    {
      title: "Without default margins",
      description: (
        <Stack className="gap-3">
          <div>
            By default, there is a top and bottom margin applied to the heading.
            This is helpful a) by providing a sensible default and b) by helping
            you maintain consistent spacing throughout your app. However, you
            can override these default margins if you'd like as shown below.
          </div>
          <div>
            The example below uses{" "}
            <Link href="https://tailwindcss.com/docs/configuration#important-modifier">
              Tailwind's imporant modifier
            </Link>{" "}
            to make sure that the custom margins take precedence over the
            original margins. You may need or want to take a different approach.
          </div>
        </Stack>
      ),
      demo: <H2 className="my-2!">Hello world</H2>,
      code: `<H2 className="my-2!">Hello world</H2>`,
    },
    {
      title: "In-page link",
      description: (
        <div>
          <div>
            Makes the header an{" "}
            <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#linking_to_an_element_on_the_same_page">
              in-page link
            </Link>
            .
          </div>
          <CodeBlock
            language="tsx"
            code={`<H2 inPageLink="hello-world">
  Hello world
</H2>`}
          />
          <div>Gets transformed into something like:</div>
          <CodeBlock
            language="tsx"
            code={`<h2 id="hello-world">
  <a href="#hello-world">Hello world</a>
</h2>`}
          />
        </div>
      ),
      demo: <H2 inPageLink="hello-world">Hello world</H2>,
      code: `<H2 inPageLink="hello-world">Hello world</H2>`,
    },
  ];
  const propsTables = [
    {
      title: null,
      props: [
        {
          name: "inPageLink",
          required: false,
          type: "string",
          default: null,
          notes: (
            <div>
              <div>
                Makes the header an in-page link by returning something like the
                following:
              </div>
              <CodeBlock
                language="tsx"
                code={`<h2 id={inPageLink} className={className} {...restWithoutClass}>
  <Link href={\`#\${inPageLink}\`} underline="hover">{children}</Link>
</h2>`}
              />
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
          type: 'ComponentProps<"h2">',
          default: null,
          notes: (
            <div>
              <div className="leading-relaxed">
                See the docs for{" "}
                <Link href="/rest-parameters">rest parameters</Link>. For{" "}
                <InlineCode>H2</InlineCode>, you could pass anything you
                normally would pass to <InlineCode>{"<h2>"}</InlineCode> because
                the return value{" "}
                <Link href="https://github.com/rfui-library/rfui-package/tree/master/src/typography/h2.tsx">
                  looks something like
                </Link>{" "}
                this:
              </div>
              <CodeBlock
                language="tsx"
                code={`<h2
  className={className}
  {...restWithoutClass}
>
  ...
</h2>`}
              />
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <ComponentDocsPage
      componentName="H2"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/typography/h2.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
