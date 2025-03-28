import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { CodeBlock, H1, InlineCode, Link, Stack, Text } from "rfui-package";

export default () => {
  const overviewNotes = null;
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: <H1>Hello world</H1>,
      code: `<H1>Hello world</H1>`,
    },
    {
      title: "Alongside paragraphs",
      demo: (
        <div>
          <H1>Hello world</H1>
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
  <H1>Hello world</H1>
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
      demo: <H1 className="my-4!">Hello world</H1>,
      code: `<H1 className="my-4!">Hello world</H1>`,
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
          type: 'ComponentProps<"h1">',
          default: null,
          notes: (
            <div>
              <div className="leading-relaxed">
                See the docs for{" "}
                <Link href="/rest-parameters">rest parameters</Link>. For{" "}
                <InlineCode>H1</InlineCode>, you could pass anything you
                normally would pass to <InlineCode>{"<h1>"}</InlineCode> because
                the return value{" "}
                <Link href="https://github.com/rfui-library/rfui-package/tree/master/src/typography/h1.tsx">
                  looks something like
                </Link>{" "}
                this:
              </div>
              <CodeBlock
                language="tsx"
                code={`<h1
  className={className}
  {...restWithoutClass}
>
  {children}
</h1>`}
              />
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <ComponentDocsPage
      componentName="H1"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/typography/h1.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
