import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { CodeBlock, InlineCode, Link, Pagination, Stack } from "rfui-package";

export default () => {
  const overviewNotes = null;
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: (
        <Pagination
          currPage={5}
          itemsPerPage={10}
          totalItems={100}
          buildHref={(page) => `/items?page=${page}`}
        />
      ),
      code: `<Pagination
  currPage={5}
  itemsPerPage={10}
  totalItems={100}
  buildHref={(page) => \`/items?page=\${page}\`}
/>`,
    },
    {
      title: "Controlled",
      description: (
        <div>
          Pass <InlineCode>onChange</InlineCode> instead of{" "}
          <InlineCode>buildHref</InlineCode> to make this a controlled
          component.
        </div>
      ),
      demo: (
        <Pagination
          currPage={5}
          itemsPerPage={10}
          totalItems={100}
          onChange={(newPage) => {
            console.log(newPage);
          }}
        />
      ),
      code: `<Pagination
  currPage={5}
  itemsPerPage={10}
  totalItems={100}
  onChange={(newPage) => {
    console.log(newPage);
  }}
/>`,
    },
    {
      title: "Size",
      demo: (
        <Stack className="gap-6">
          <Pagination
            size="sm"
            currPage={5}
            itemsPerPage={10}
            totalItems={100}
            buildHref={(page) => `/items?page=${page}`}
          />
          <Pagination
            size="md"
            currPage={5}
            itemsPerPage={10}
            totalItems={100}
            buildHref={(page) => `/items?page=${page}`}
          />
          <Pagination
            size="lg"
            currPage={5}
            itemsPerPage={10}
            totalItems={100}
            buildHref={(page) => `/items?page=${page}`}
          />
        </Stack>
      ),
      code: `<Stack className="gap-6">
  <Pagination
    size="sm"
    currPage={5}
    itemsPerPage={10}
    totalItems={100}
    buildHref={(page) => \`/items\?page=\${page}\`}
  />
  <Pagination
    size="md"
    currPage={5}
    itemsPerPage={10}
    totalItems={100}
    buildHref={(page) => \`/items?page=\${page}\`}
  />
  <Pagination
    size="lg"
    currPage={5}
    itemsPerPage={10}
    totalItems={100}
    buildHref={(page) => \`/items?page=\${page}\`}
  />
</Stack>`,
    },
  ];
  const propsTables = [
    {
      title: null,
      props: [
        {
          name: "currPage",
          required: true,
          type: "number",
          default: null,
          notes: null,
        },
        {
          name: "itemsPerPage",
          required: true,
          type: "number",
          default: null,
          notes: null,
        },
        {
          name: "totalItems",
          required: true,
          type: "number",
          default: null,
          notes: null,
        },
        {
          name: "buildHref",
          required: false,
          type: "(page: number) => string",
          default: null,
          notes: null,
        },
        {
          name: "onChange",
          required: false,
          type: "(newPage: number) => void",
          default: null,
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
          name: "...rest",
          required: false,
          type: `ComponentProps<"nav">`,
          default: null,
          notes: (
            <div>
              <div className="leading-relaxed">
                See the docs for{" "}
                <Link href="/rest-parameters">rest parameters</Link>. For{" "}
                <InlineCode>Pagination</InlineCode>, you could pass anything you
                normally would pass to <InlineCode>{"<nav>"}</InlineCode>{" "}
                because the container{" "}
                <Link href="https://github.com/rfui-library/rfui-package/tree/master/src/navigation/pagination.tsx">
                  looks something like
                </Link>{" "}
                this:
              </div>
              <CodeBlock
                language="tsx"
                code={`<nav className={className} {...restWithoutClass}>
  {children}
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
      componentName="Pagination"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/navigation/pagination.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
