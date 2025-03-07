import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { CodeBlock, InlineCode, Link, Text } from "rfui-package";

export default () => {
  const overviewNotes = (
    <div>
      To ensure that the line length is{" "}
      <Link href="https://practicaltypography.com/line-length.html">
        comfortable
      </Link>{" "}
      for people to read, this <InlineCode>Text</InlineCode> component utilizes
      Tailwind's{" "}
      <Link href="https://tailwindcss.com/docs/max-width#reading-width">
        <InlineCode>max-w-prose</InlineCode>
      </Link>{" "}
      class.
    </div>
  );
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: (
        <Text>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat
            odio facilisis mauris sit.
          </p>
          <p>
            Amet consectetur adipiscing elit duis tristique. Ac turpis egestas
            maecenas pharetra. Dui nunc mattis enim ut tellus. Egestas congue
            quisque egestas diam in.
          </p>
        </Text>
      ),
      code: `<Text>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat odio facilisis mauris sit.</p>
  <p>Amet consectetur adipiscing elit duis tristique. Ac turpis egestas maecenas pharetra. Dui nunc mattis enim ut tellus. Egestas congue quisque egestas diam in.</p>
</Text>`,
    },
    {
      title: "Small",
      description: (
        <div>
          Set <InlineCode>size</InlineCode> to <InlineCode>"sm"</InlineCode>.
        </div>
      ),
      demo: (
        <Text size="sm">
          <p>
            Illo quia quam perferendis ut consectetur rerum dolores dolores.
            Reiciendis est beatae magnam ut amet quis sequi. Eaque consequatur
            consectetur non amet nostrum quo animi.
          </p>
          <p>
            Quod enim vitae et. Impedit ut maxime fugit excepturi harum qui.
            Praesentium pariatur nisi ut rerum et dolores sed.
          </p>
        </Text>
      ),
      code: `<Text size="sm">
  <p>
    Illo quia quam perferendis ut consectetur rerum dolores dolores.
    Reiciendis est beatae magnam ut amet quis sequi. Eaque consequatur
    consectetur non amet nostrum quo animi.
  </p>
  <p>
    Quod enim vitae et. Impedit ut maxime fugit excepturi harum
    qui. Praesentium pariatur nisi ut rerum et dolores sed.
  </p>
</Text>`,
    },
    {
      title: "Medium",
      description: (
        <div>
          Set <InlineCode>size</InlineCode> to <InlineCode>"md"</InlineCode>.
        </div>
      ),
      demo: (
        <Text size="md">
          <p>
            Illo quia quam perferendis ut consectetur rerum dolores dolores.
            Reiciendis est beatae magnam ut amet quis sequi. Eaque consequatur
            consectetur non amet nostrum quo animi.
          </p>
          <p>
            Quod enim vitae et. Impedit ut maxime fugit excepturi harum qui.
            Praesentium pariatur nisi ut rerum et dolores sed.
          </p>
        </Text>
      ),
      code: `<Text size="md">
  <p>
    Illo quia quam perferendis ut consectetur rerum dolores dolores.
    Reiciendis est beatae magnam ut amet quis sequi. Eaque consequatur
    consectetur non amet nostrum quo animi.
  </p>
  <p>
    Quod enim vitae et. Impedit ut maxime fugit excepturi harum
    qui. Praesentium pariatur nisi ut rerum et dolores sed.
  </p>
</Text>`,
    },
    {
      title: "Large",
      description: (
        <div>
          Set <InlineCode>size</InlineCode> to <InlineCode>"lg"</InlineCode>.
          Note: This comes across kinda strong so you might want to balance it
          out with a lighter font weight or lighter font color.
        </div>
      ),
      demo: (
        <Text size="lg">
          <p>
            Illo quia quam perferendis ut consectetur rerum dolores dolores.
            Reiciendis est beatae magnam ut amet quis sequi. Eaque consequatur
            consectetur non amet nostrum quo animi.
          </p>
          <p>
            Quod enim vitae et. Impedit ut maxime fugit excepturi harum qui.
            Praesentium pariatur nisi ut rerum et dolores sed.
          </p>
        </Text>
      ),
      code: `<Text size="lg">
  <p>
    Illo quia quam perferendis ut consectetur rerum dolores dolores.
    Reiciendis est beatae magnam ut amet quis sequi. Eaque consequatur
    consectetur non amet nostrum quo animi.
  </p>
  <p>
    Quod enim vitae et. Impedit ut maxime fugit excepturi harum
    qui. Praesentium pariatur nisi ut rerum et dolores sed.
  </p>
</Text>`,
    },
    {
      title: "One paragraph",
      description: (
        <div>
          If you just have one paragraph with no other elements, you can
          simplify the code as demonstrated below.
        </div>
      ),
      demo: (
        <Text>
          Illo quia quam perferendis ut consectetur rerum dolores dolores.
          Reiciendis est beatae magnam ut amet quis sequi. Eaque consequatur
          consectetur non amet nostrum quo animi.
        </Text>
      ),
      code: `<Text>
  Illo quia quam perferendis ut consectetur rerum dolores dolores.
  Reiciendis est beatae magnam ut amet quis sequi. Eaque consequatur
  consectetur non amet nostrum quo animi.
</Text>`,
    },
    {
      title: "One paragraph with element",
      description: (
        <div>
          If your paragraph has some element, you'll need to wrap it in
          something like a <InlineCode>{`<p>`}</InlineCode> or{" "}
          <InlineCode>{`<div>`}</InlineCode> because{" "}
          <InlineCode>Text</InlineCode> has a container of{" "}
          <Link href="/components/layout/stack">
            <InlineCode>Stack</InlineCode>
          </Link>
          .
        </div>
      ),
      demo: (
        <Text>
          <p>
            Illo quia quam perferendis ut consectetur{" "}
            <Link href="https://example.com">rerum dolores</Link> dolores.
            Reiciendis est beatae magnam ut amet quis sequi. Eaque consequatur
            consectetur non amet nostrum quo animi.
          </p>
        </Text>
      ),
      code: `<Text>
  <p>
    Illo quia quam perferendis ut consectetur{" "}
    <Link href="https://example.com">rerum dolores</Link>{" "}
    dolores. Reiciendis est beatae magnam ut amet quis sequi. Eaque
    consequatur consectetur non amet nostrum quo animi.
  </p>
</Text>`,
    },
  ];
  const propsTables = [
    {
      title: null,
      props: [
        {
          name: "size",
          required: false,
          type: "'sm' | 'md' | 'lg'",
          default: '"md"',
          notes: null,
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
          type: '<Omit<ComponentProps<"div">, "size">',
          default: null,
          notes: (
            <div>
              <div className="leading-relaxed">
                See the docs for{" "}
                <Link href="/rest-parameters">rest parameters</Link>. For{" "}
                <InlineCode>Text</InlineCode>, you could pass anything you
                normally would pass to <InlineCode>{"<div>"}</InlineCode>{" "}
                because the return value{" "}
                <Link href="https://github.com/rfui-library/rfui-package/tree/master/src/typography/text.tsx">
                  looks something like
                </Link>{" "}
                this:
              </div>
              <CodeBlock
                language="tsx"
                code={`<div className={classValue} {...restWithoutClass}>
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
      componentName="Text"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/typography/text.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
