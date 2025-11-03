import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { CodeBlock, H3, InlineCode, Link, Stack, Text } from "rfui-package";

export default () => {
  const overviewNotes = null;
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: <H3>Hello world</H3>,
      code: `<H3>Hello world</H3>`,
    },
    {
      title: "Alongside paragraphs",
      demo: (
        <div>
          <H3>Hello world</H3>
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
  <H3>Hello world</H3>
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
      demo: <H3 className="my-2!">Hello world</H3>,
      code: `<H3 className="my-2!">Hello world</H3>`,
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
            code={`<H3 inPageLink="hello-world">
  Hello world
</H3>`}
          />
          <div>Gets transformed into something like:</div>
          <CodeBlock
            language="tsx"
            code={`<h3 id="hello-world">
  <a href="#hello-world">Hello world</a>
</h3>`}
          />
        </div>
      ),
      demo: <H3 inPageLink="hello-world">Hello world</H3>,
      code: `<H3 inPageLink="hello-world">Hello world</H3>`,
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
                code={`<h3 id={inPageLink} className={className} {...restWithoutClass}>
  <Link href={\`#\${inPageLink}\`} underline="hover">{children}</Link>
</h3>`}
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
          type: 'ComponentProps<"h3">',
          default: null,
          notes: (
            <div>
              <div className="leading-relaxed">
                See the docs for{" "}
                <Link href="/rest-parameters">rest parameters</Link>. For{" "}
                <InlineCode>H3</InlineCode>, you could pass anything you
                normally would pass to <InlineCode>{"<h3>"}</InlineCode> because
                the return value{" "}
                <Link href="https://github.com/rfui-library/rfui-package/tree/master/src/typography/h3.tsx">
                  looks something like
                </Link>{" "}
                this:
              </div>
              <CodeBlock
                language="tsx"
                code={`<h3
  className={className}
  {...restWithoutClass}
>
  ...
</h3>`}
              />
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <ComponentDocsPage
      componentName="H3"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/typography/h3.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
