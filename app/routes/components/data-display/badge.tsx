import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { Badge, CodeBlock, Flex, InlineCode, Link, Stack } from "rfui-package";

export default () => {
  const overviewNotes = null;
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: <Badge>Basic</Badge>,
      code: `<Badge>Basic</Badge>`,
    },
    {
      title: "Type",
      description: (
        <p>
          Set <InlineCode>type</InlineCode> to either{" "}
          <InlineCode>"neutral"</InlineCode>, <InlineCode>"info"</InlineCode>,{" "}
          <InlineCode>"success"</InlineCode>, <InlineCode>"warning"</InlineCode>
          , or <InlineCode>"danger"</InlineCode>. Defaults to{" "}
          <InlineCode>"neutral"</InlineCode>.
        </p>
      ),
      demo: (
        <Flex className="gap-3">
          <Badge type="neutral">neutral</Badge>
          <Badge type="info">info</Badge>
          <Badge type="success">success</Badge>
          <Badge type="warning">warning</Badge>
          <Badge type="danger">danger</Badge>
        </Flex>
      ),
      code: `<Flex className="gap-3">
  <Badge type="neutral">neutral</Badge>
  <Badge type="info">info</Badge>
  <Badge type="success">success</Badge>
  <Badge type="warning">warning</Badge>
  <Badge type="danger">danger</Badge>
</Flex>
`,
    },
    {
      title: "Size",
      description: (
        <p>
          Set <InlineCode>size</InlineCode> to either{" "}
          <InlineCode>"sm"</InlineCode>, <InlineCode>"md"</InlineCode>, or{" "}
          <InlineCode>"lg"</InlineCode>. Defaults to{" "}
          <InlineCode>"md"</InlineCode>.
        </p>
      ),
      demo: (
        <Stack className="gap-5">
          <Flex className="gap-3">
            <Badge type="neutral" size="sm">
              neutral
            </Badge>
            <Badge type="info" size="sm">
              info
            </Badge>
            <Badge type="success" size="sm">
              success
            </Badge>
            <Badge type="warning" size="sm">
              warning
            </Badge>
            <Badge type="danger" size="sm">
              danger
            </Badge>
          </Flex>
          <Flex className="gap-3">
            <Badge type="neutral" size="md">
              neutral
            </Badge>
            <Badge type="info" size="md">
              info
            </Badge>
            <Badge type="success" size="md">
              success
            </Badge>
            <Badge type="warning" size="md">
              warning
            </Badge>
            <Badge type="danger" size="md">
              danger
            </Badge>
          </Flex>
          <Flex className="gap-3">
            <Badge type="neutral" size="lg">
              neutral
            </Badge>
            <Badge type="info" size="lg">
              info
            </Badge>
            <Badge type="success" size="lg">
              success
            </Badge>
            <Badge type="warning" size="lg">
              warning
            </Badge>
            <Badge type="danger" size="lg">
              danger
            </Badge>
          </Flex>
        </Stack>
      ),
      code: `<Stack className="gap-5">
  <Flex className="gap-3">
    <Badge type="neutral" size="sm">neutral</Badge>
    <Badge type="info" size="sm">info</Badge>
    <Badge type="success" size="sm">success</Badge>
    <Badge type="warning" size="sm">warning</Badge>
    <Badge type="danger" size="sm">danger</Badge>
  </Flex>
  <Flex className="gap-3">
    <Badge type="neutral" size="md">neutral</Badge>
    <Badge type="info" size="md">info</Badge>
    <Badge type="success" size="md">success</Badge>
    <Badge type="warning" size="md">warning</Badge>
    <Badge type="danger" size="md">danger</Badge>
  </Flex>
  <Flex className="gap-3">
    <Badge type="neutral" size="lg">neutral</Badge>
    <Badge type="info" size="lg">info</Badge>
    <Badge type="success" size="lg">success</Badge>
    <Badge type="warning" size="lg">warning</Badge>
    <Badge type="danger" size="lg">danger</Badge>
  </Flex>
</Stack>
`,
    },
    {
      title: "Rounded",
      description: (
        <p>
          Set <InlineCode>rounded</InlineCode> to either{" "}
          <InlineCode>"square"</InlineCode>, <InlineCode>"sm"</InlineCode>,{" "}
          <InlineCode>"lg"</InlineCode>, or <InlineCode>"full"</InlineCode>.
          Defaults to the value of the CSS variable{" "}
          <InlineCode>--default-roundedness</InlineCode>. See{" "}
          <Link href="/default-roundedness">"Default roundedness"</Link>.
        </p>
      ),
      demo: (
        <Stack className="gap-5">
          <Flex className="gap-3">
            <Badge type="neutral" rounded="square">
              neutral
            </Badge>
            <Badge type="info" rounded="square">
              info
            </Badge>
            <Badge type="success" rounded="square">
              success
            </Badge>
            <Badge type="warning" rounded="square">
              warning
            </Badge>
            <Badge type="danger" rounded="square">
              danger
            </Badge>
          </Flex>
          <Flex className="gap-3">
            <Badge type="neutral" rounded="sm">
              neutral
            </Badge>
            <Badge type="info" rounded="sm">
              info
            </Badge>
            <Badge type="success" rounded="sm">
              success
            </Badge>
            <Badge type="warning" rounded="sm">
              warning
            </Badge>
            <Badge type="danger" rounded="sm">
              danger
            </Badge>
          </Flex>
          <Flex className="gap-3">
            <Badge type="neutral" rounded="lg">
              neutral
            </Badge>
            <Badge type="info" rounded="lg">
              info
            </Badge>
            <Badge type="success" rounded="lg">
              success
            </Badge>
            <Badge type="warning" rounded="lg">
              warning
            </Badge>
            <Badge type="danger" rounded="lg">
              danger
            </Badge>
          </Flex>
          <Flex className="gap-3">
            <Badge type="neutral" rounded="full">
              neutral
            </Badge>
            <Badge type="info" rounded="full">
              info
            </Badge>
            <Badge type="success" rounded="full">
              success
            </Badge>
            <Badge type="warning" rounded="full">
              warning
            </Badge>
            <Badge type="danger" rounded="full">
              danger
            </Badge>
          </Flex>
        </Stack>
      ),
      code: `<Stack className="gap-5">
  <Flex className="gap-3">
    <Badge type="neutral" rounded="square">neutral</Badge>
    <Badge type="info" rounded="square">info</Badge>
    <Badge type="success" rounded="square">success</Badge>
    <Badge type="warning" rounded="square">warning</Badge>
    <Badge type="danger" rounded="square">danger</Badge>
  </Flex>
  <Flex className="gap-3">
    <Badge type="neutral" rounded="sm">neutral</Badge>
    <Badge type="info" rounded="sm">info</Badge>
    <Badge type="success" rounded="sm">success</Badge>
    <Badge type="warning" rounded="sm">warning</Badge>
    <Badge type="danger" rounded="sm">danger</Badge>
  </Flex>
  <Flex className="gap-3">
    <Badge type="neutral" rounded="lg">neutral</Badge>
    <Badge type="info" rounded="lg">info</Badge>
    <Badge type="success" rounded="lg">success</Badge>
    <Badge type="warning" rounded="lg">warning</Badge>
    <Badge type="danger" rounded="lg">danger</Badge>
  </Flex>
  <Flex className="gap-3">
    <Badge type="neutral" rounded="full">neutral</Badge>
    <Badge type="info" rounded="full">info</Badge>
    <Badge type="success" rounded="full">success</Badge>
    <Badge type="warning" rounded="full">warning</Badge>
    <Badge type="danger" rounded="full">danger</Badge>
  </Flex>
</Stack>
`,
    },
  ];
  const propsTables = [
    {
      title: null,
      props: [
        {
          name: "type",
          required: false,
          type: '"neutral" | "info" | "success" | "warning" | "danger"',
          default: '"neutral"',
          notes: null,
        },
        {
          name: "size",
          required: false,
          type: '"sm" | "md" | "lg"',
          default: '"md"',
          notes: null,
        },
        {
          name: "rounded",
          required: false,
          type: '"square" | "sm" | "lg" | "full"',
          default: null,
          notes: (
            <div>
              Defaults to the value of the CSS variable{" "}
              <InlineCode>--default-roundedness</InlineCode>. See{" "}
              <Link href="/default-roundedness">"Default roundedness"</Link>.
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
                <InlineCode>Badge</InlineCode>, you could pass anything you
                normally would pass to <InlineCode>{"<div>"}</InlineCode>{" "}
                because the container{" "}
                <Link href="https://github.com/rfui-library/rfui-package/tree/master/src/data-display/badge.tsx">
                  looks something like
                </Link>{" "}
                this:
              </div>
              <CodeBlock
                language="tsx"
                code={`<div className={className} {...restWithoutClass}>
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
      componentName="Badge"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/data-display/badge.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
