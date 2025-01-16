import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { Button, CodeBlock, Flex, InlineCode, Link, Stack } from "rfui";

export default () => {
  const overviewNotes = null;
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: <Button>Example</Button>,
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<Button>Example</Button>`}
        />
      ),
    },
    {
      title: "Handle click",
      description: (
        <div>
          Passing <InlineCode>onClick</InlineCode> works because of{" "}
          <Link href="/rest-parameters">
            <InlineCode>...rest</InlineCode>
          </Link>
          .
        </div>
      ),
      demo: <Button>Example</Button>,
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<Button onClick={onClick}>Example</Button>`}
        />
      ),
    },
    {
      title: "Variant",
      description: (
        <div>
          Set <InlineCode>variant</InlineCode> to either{" "}
          <InlineCode>"primary"</InlineCode>,{" "}
          <InlineCode>"secondary"</InlineCode>, or{" "}
          <InlineCode>"tertiary"</InlineCode>. Defaults to{" "}
          <InlineCode>"secondary"</InlineCode>.
        </div>
      ),
      demo: (
        <Flex className="gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
        </Flex>
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<Flex className="gap-3">
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="tertiary">Tertiary</Button>
</Flex>`}
        />
      ),
    },
    {
      title: "Danger variants",
      description: (
        <p>
          Set <InlineCode>variant</InlineCode> to either{" "}
          <InlineCode>"danger-primary"</InlineCode>,{" "}
          <InlineCode>"danger-secondary"</InlineCode>, or{" "}
          <InlineCode>"danger-tertiary"</InlineCode>.
        </p>
      ),
      demo: (
        <Flex className="gap-3">
          <Button variant="danger-primary">Primary</Button>
          <Button variant="danger-secondary">Secondary</Button>
          <Button variant="danger-tertiary">Tertiary</Button>
        </Flex>
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<Flex className="gap-3">
  <Button variant="danger-primary">Primary</Button>
  <Button variant="danger-secondary">Secondary</Button>
  <Button variant="danger-tertiary">Tertiary</Button>
</Flex>`}
        />
      ),
    },
    {
      title: "Size",
      description: (
        <p>
          Set <InlineCode>size</InlineCode> to either{" "}
          <InlineCode>"sm"</InlineCode>, <InlineCode>"md"</InlineCode>,{" "}
          <InlineCode>"lg"</InlineCode>, or <InlineCode>"block"</InlineCode>.
          Defaults to <InlineCode>"md"</InlineCode>.
        </p>
      ),
      demo: (
        <Stack className="gap-5">
          <Flex className="gap-3">
            <Button variant="primary" size="sm">
              Primary
            </Button>
            <Button variant="secondary" size="sm">
              Secondary
            </Button>
            <Button variant="tertiary" size="sm">
              Tertiary
            </Button>
          </Flex>
          <Flex className="gap-3">
            <Button variant="primary" size="md">
              Primary
            </Button>
            <Button variant="secondary" size="md">
              Secondary
            </Button>
            <Button variant="tertiary" size="md">
              Tertiary
            </Button>
          </Flex>
          <Flex className="gap-3">
            <Button variant="primary" size="lg">
              Primary
            </Button>
            <Button variant="secondary" size="lg">
              Secondary
            </Button>
            <Button variant="tertiary" size="lg">
              Tertiary
            </Button>
          </Flex>
          <Stack className="w-full gap-3">
            <Button variant="primary" size="block">
              Primary
            </Button>
            <Button variant="secondary" size="block">
              Secondary
            </Button>
          </Stack>
        </Stack>
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<Stack className="gap-5">
  <Flex className="gap-3">
    <Button variant="primary" size="sm">Primary</Button>
    <Button variant="secondary" size="sm">Secondary</Button>
    <Button variant="tertiary" size="sm">Tertiary</Button>
  </Flex>
  <Flex className="gap-3">
    <Button variant="primary" size="md">Primary</Button>
    <Button variant="secondary" size="md">Secondary</Button>
    <Button variant="tertiary" size="md">Tertiary</Button>
  </Flex>
  <Flex className="gap-3">
    <Button variant="primary" size="lg">Primary</Button>
    <Button variant="secondary" size="lg">Secondary</Button>
    <Button variant="tertiary" size="lg">Tertiary</Button>
  </Flex>
  <Stack className="w-full gap-3">
    <Button variant="primary" size="block">Primary</Button>
    <Button variant="secondary" size="block">Secondary</Button>
  </Stack>
</Stack>`}
        />
      ),
    },
    {
      title: "Rounded",
      description: (
        <div>
          Set <InlineCode>rounded</InlineCode> to either{" "}
          <InlineCode>"square"</InlineCode>, <InlineCode>"sm"</InlineCode>,{" "}
          <InlineCode>"lg"</InlineCode>, or <InlineCode>"full"</InlineCode>.
          Defaults to the value of the CSS variable{" "}
          <InlineCode>--default-roundedness</InlineCode>. See{" "}
          <Link href="/default-roundedness">"Default roundedness"</Link>.
        </div>
      ),
      demo: (
        <Stack className="gap-5">
          <Flex className="gap-3">
            <Button variant="primary" rounded="square">
              Primary
            </Button>
            <Button variant="secondary" rounded="square">
              Secondary
            </Button>
            <Button variant="tertiary" rounded="square">
              Tertiary
            </Button>
          </Flex>
          <Flex className="gap-3">
            <Button variant="primary" rounded="sm">
              Primary
            </Button>
            <Button variant="secondary" rounded="sm">
              Secondary
            </Button>
            <Button variant="tertiary" rounded="sm">
              Tertiary
            </Button>
          </Flex>
          <Flex className="gap-3">
            <Button variant="primary" rounded="lg">
              Primary
            </Button>
            <Button variant="secondary" rounded="lg">
              Secondary
            </Button>
            <Button variant="tertiary" rounded="lg">
              Tertiary
            </Button>
          </Flex>
          <Flex className="gap-3">
            <Button variant="primary" rounded="full">
              Primary
            </Button>
            <Button variant="secondary" rounded="full">
              Secondary
            </Button>
            <Button variant="tertiary" rounded="full">
              Tertiary
            </Button>
          </Flex>
        </Stack>
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<Stack className="gap-5">
  <Flex className="gap-3">
    <Button variant="primary" rounded="square">Primary</Button>
    <Button variant="secondary" rounded="square">Secondary</Button>
    <Button variant="tertiary" rounded="square">Tertiary</Button>
  </Flex>
  <Flex className="gap-3">
    <Button variant="primary" rounded="sm">Primary</Button>
    <Button variant="secondary" rounded="sm">Secondary</Button>
    <Button variant="tertiary" rounded="sm">Tertiary</Button>
  </Flex>
  <Flex className="gap-3">
    <Button variant="primary" rounded="lg">Primary</Button>
    <Button variant="secondary" rounded="lg">Secondary</Button>
    <Button variant="tertiary" rounded="lg">Tertiary</Button>
  </Flex>
  <Flex className="gap-3">
    <Button variant="primary" rounded="full">Primary</Button>
    <Button variant="secondary" rounded="full">Secondary</Button>
    <Button variant="tertiary" rounded="full">Tertiary</Button>
  </Flex>
</Stack>`}
        />
      ),
    },
    {
      title: "Disabled",
      description: (
        <div>
          Set <InlineCode>disabled</InlineCode> to either{" "}
          <InlineCode>true</InlineCode> or <InlineCode>false</InlineCode>.
          Defaults to <InlineCode>false</InlineCode>.
        </div>
      ),
      demo: (
        <Flex className="gap-3">
          <Button disabled variant="primary">
            Primary
          </Button>
          <Button disabled variant="secondary">
            Secondary
          </Button>
          <Button disabled variant="tertiary">
            Tertiary
          </Button>
        </Flex>
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<Flex className="gap-3">
  <Button disabled variant="primary">Primary</Button>
  <Button disabled variant="secondary">Secondary</Button>
  <Button disabled variant="tertiary">Tertiary</Button>
</Flex>`}
        />
      ),
    },
    {
      title: "Loading",
      description: (
        <Stack className="gap-3">
          <p>
            Set <InlineCode>isLoading</InlineCode> to either{" "}
            <InlineCode>true</InlineCode> or <InlineCode>false</InlineCode>.
            Defaults to <InlineCode>false</InlineCode>.
          </p>
          <p>
            Set <InlineCode>loadingContent</InlineCode> to the content you want
            to display when <InlineCode>isLoading</InlineCode> is{" "}
            <InlineCode>true</InlineCode>.
          </p>
        </Stack>
      ),
      demo: (
        <Flex className="gap-3">
          <Button variant="primary" isLoading loadingContent="Loading...">
            Primary
          </Button>
          <Button variant="secondary" isLoading loadingContent="Loading...">
            Secondary
          </Button>
          <Button variant="tertiary" isLoading loadingContent="Loading...">
            Tertiary
          </Button>
        </Flex>
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<Flex className="gap-3">
  <Button variant="primary" isLoading loadingContent="Loading...">
    Primary
  </Button>
  <Button variant="secondary" isLoading loadingContent="Loading...">
    Secondary
  </Button>
  <Button variant="tertiary" isLoading loadingContent="Loading...">
    Tertiary
  </Button>
</Flex>`}
        />
      ),
    },
    {
      title: "With icon",
      description: (
        <div>
          Icons{" "}
          <Link href="https://ux.stackexchange.com/q/56023/39046">should</Link>{" "}
          typically appear to the left of the other content in the button.
        </div>
      ),
      demo: (
        <Button>
          <span>＋</span> Example
        </Button>
      ),
      code: (
        <CodeBlock
          className="mt-4"
          language="tsx"
          code={`<Button>
  <span>＋</span> Example
</Button>`}
        />
      ),
    },
  ];
  const propsTables = [
    {
      title: null,
      props: [
        {
          name: "variant",
          required: false,
          type: '"primary" | "secondary" | "tertiary" | "danger-primary" | "danger-secondary" | "danger-tertiary"',
          default: '"secondary"',
          notes: null,
        },
        {
          name: "size",
          required: false,
          type: '"sm" | "md" | "lg" | "block"',
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
          name: "isLoading",
          required: false,
          type: "boolean",
          default: "false",
          notes: "When true, the button will appear disabled.",
        },
        {
          name: "loadingContent",
          required: false,
          type: "string",
          default: null,
          notes: (
            <div>
              The text to change the button's content to when loading. Ie. when{" "}
              <InlineCode>isLoading</InlineCode> is{" "}
              <InlineCode>true</InlineCode>.
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
          type: 'Omit<ComponentProps<"button">, "icon" | "size">',
          default: null,
          notes: (
            <div>
              <div className="leading-relaxed">
                See the docs for{" "}
                <Link href="/rest-parameters">rest parameters</Link>. For{" "}
                <InlineCode>Button</InlineCode>, you could pass anything you
                normally would pass to <InlineCode>{"<button>"}</InlineCode>{" "}
                because the container{" "}
                <Link href="https://github.com/rfui-library/rfui-package/tree/master/src/form/button.tsx">
                  looks something like
                </Link>{" "}
                this:
              </div>
              <CodeBlock
                language="tsx"
                code={`<button className={className} {...restWithoutClass}>
  ...
</button>`}
              />
            </div>
          ),
        },
      ],
    },
  ];
  return (
    <ComponentDocsPage
      componentName="Button"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/form/button.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
