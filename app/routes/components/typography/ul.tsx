import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { CodeBlock, Flex, InlineCode, Link, Stack, UL } from "rfui-package";

export default () => {
  const overviewNotes = null;
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: (
        <UL>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </UL>
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<UL>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</UL>`}
        />
      ),
    },
    {
      title: "Bullet type",
      description: (
        <div>
          Set <InlineCode>bulletType</InlineCode> to either{" "}
          <InlineCode>"bullet"</InlineCode>, <InlineCode>"check"</InlineCode>,{" "}
          <InlineCode>"arrow"</InlineCode>, <InlineCode>"triangle"</InlineCode>{" "}
          or <InlineCode>"none"</InlineCode>. Defaults to{" "}
          <InlineCode>"bullet"</InlineCode>.
        </div>
      ),
      demo: (
        <Stack className="gap-5">
          <UL bulletType="bullet">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UL>
          <UL bulletType="check">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UL>
          <UL bulletType="arrow">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UL>
          <UL bulletType="triangle">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UL>
          <UL bulletType="none">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UL>
        </Stack>
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<Stack className="gap-5">
  <UL bulletType="bullet">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </UL>
  <UL bulletType="check">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </UL>
  <UL bulletType="arrow">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </UL>
  <UL bulletType="triangle">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </UL>
  <UL bulletType="none">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </UL>
</Stack>`}
        />
      ),
    },
    {
      title: "Outside",
      description: (
        <div>
          Set <InlineCode>bulletLocation</InlineCode> to{" "}
          <InlineCode>"outside"</InlineCode>.
        </div>
      ),
      demo: (
        <Stack className="gap-5">
          <UL bulletLocation="outside" bulletType="bullet">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UL>
          <UL bulletLocation="outside" bulletType="check">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UL>
          <UL bulletLocation="outside" bulletType="arrow">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UL>
          <UL bulletLocation="outside" bulletType="triangle">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UL>
        </Stack>
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<Stack className="gap-5">
  <UL bulletLocation="outside" bulletType="bullet">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </UL>
  <UL bulletLocation="outside" bulletType="check">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </UL>
  <UL bulletLocation="outside" bulletType="arrow">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </UL>
  <UL bulletLocation="outside" bulletType="triangle">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </UL>
</Stack>`}
        />
      ),
    },
    {
      title: "Bigger",
      description: (
        <div>
          Here is an example of using{" "}
          <InlineCode>className="text-xl"</InlineCode> to make the unordered
          list larger.
        </div>
      ),
      demo: (
        <Stack className="gap-5">
          <UL bulletType="bullet" className="text-xl">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UL>
          <UL bulletType="check" className="text-xl">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UL>
          <UL bulletType="arrow" className="text-xl">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UL>
          <UL bulletType="triangle" className="text-xl">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UL>
        </Stack>
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<Stack className="gap-5">
  <UL bulletType="bullet" className="text-xl">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </UL>
  <UL bulletType="check" className="text-xl">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </UL>
  <UL bulletType="arrow" className="text-xl">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </UL>
  <UL bulletType="triangle" className="text-xl">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </UL>
</Stack>`}
        />
      ),
    },
    {
      title: "Color",
      description: (
        <div>
          Here is an example of using{" "}
          <InlineCode>className="text-neutral-500"</InlineCode> to change the
          color of the unordered list.
        </div>
      ),
      demo: (
        <Stack className="gap-5">
          <UL bulletType="bullet" className="text-neutral-500">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UL>
          <UL bulletType="check" className="text-neutral-500">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UL>
          <UL bulletType="arrow" className="text-neutral-500">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UL>
          <UL bulletType="triangle" className="text-neutral-500">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UL>
        </Stack>
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<Stack className="gap-5">
  <UL bulletType="bullet" className="text-neutral-500">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </UL>
  <UL bulletType="check" className="text-neutral-500">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </UL>
  <UL bulletType="arrow" className="text-neutral-500">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </UL>
  <UL bulletType="triangle" className="text-neutral-500">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </UL>
</Stack>`}
        />
      ),
    },
    {
      title: "Custom",
      description:
        "You'll have to do a little more work yourself for custom bullet types.",
      demo: (
        <UL bulletType="none">
          <li>
            <Flex className="gap-2">
              <span>😎</span>
              One
            </Flex>
          </li>
          <li>
            <Flex className="gap-2">
              <span>😎</span>
              Two
            </Flex>
          </li>
          <li>
            <Flex className="gap-2">
              <span>😎</span>
              Three
            </Flex>
          </li>
        </UL>
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<UL bulletType="none">
  <li>
    <Flex className="gap-2">
      <span>😎</span>
      One
    </Flex>
  </li>
  <li>
    <Flex className="gap-2">
      <span>😎</span>
      Two
    </Flex>
  </li>
  <li>
    <Flex className="gap-2">
      <span>😎</span>
      Three
    </Flex>
  </li>
</UL>`}
        />
      ),
    },
  ];
  const propsTables = [
    {
      title: null,
      props: [
        {
          name: "bulletLocation",
          required: false,
          type: "'inside' | 'outside'",
          default: "'inside'",
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
          type: 'ComponentProps<"ul">',
          default: null,
          notes: (
            <div>
              <div className="leading-relaxed">
                See the docs for{" "}
                <Link href="/rest-parameters">rest parameters</Link>. For{" "}
                <InlineCode>UL</InlineCode>, you could pass anything you
                normally would pass to <InlineCode>{"<ul>"}</InlineCode> because
                the return value{" "}
                <Link href="https://github.com/rfui-library/rfui-package/tree/master/src/typography/ul.tsx">
                  looks something like
                </Link>{" "}
                this:
              </div>
              <CodeBlock
                language="tsx"
                code={`<ul
  className={className}
  {...restWithoutClass}
>
  {children}
</ul>`}
              />
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <ComponentDocsPage
      componentName="UL"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/typography/ul.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
