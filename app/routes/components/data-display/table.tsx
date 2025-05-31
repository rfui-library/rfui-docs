import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import {
  CodeBlock,
  InlineCode,
  Link,
  Stack,
  Table,
  ThWithHelpTooltip,
} from "rfui-package";

export default () => {
  const overviewNotes = null;
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: (
        <Table>
          <thead>
            <tr>
              <th>name</th>
              <th>age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alice</td>
              <td>19</td>
            </tr>
            <tr>
              <td>Bob</td>
              <td>25</td>
            </tr>
          </tbody>
        </Table>
      ),
      code: `<Table>
  <thead>
    <tr>
      <th>name</th>
      <th>age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>19</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>25</td>
    </tr>
  </tbody>
</Table>`,
    },
    {
      title: "No border",
      description: (
        <div>
          Set <InlineCode>bordered</InlineCode> to{" "}
          <InlineCode>false</InlineCode>.
        </div>
      ),
      demo: (
        <Table bordered={false}>
          <thead>
            <tr>
              <th>name</th>
              <th>age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alice</td>
              <td>19</td>
            </tr>
            <tr>
              <td>Bob</td>
              <td>25</td>
            </tr>
          </tbody>
        </Table>
      ),
      code: `<Table bordered={false}>
  <thead>
    <tr>
      <th>name</th>
      <th>age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>19</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>25</td>
    </tr>
  </tbody>
</Table>`,
    },
    {
      title: "No hover",
      description: (
        <div>
          It is generally a{" "}
          <Link href="https://ux.stackexchange.com/q/109934/39046">
            good practice
          </Link>{" "}
          to highlight rows when users hover over them. If you don't want to do
          this, set <InlineCode>hover</InlineCode> to{" "}
          <InlineCode>false</InlineCode>.
        </div>
      ),
      demo: (
        <Table hover={false}>
          <thead>
            <tr>
              <th>name</th>
              <th>age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alice</td>
              <td>19</td>
            </tr>
            <tr>
              <td>Bob</td>
              <td>25</td>
            </tr>
          </tbody>
        </Table>
      ),
      code: `<Table hover={false}>
  <thead>
    <tr>
      <th>name</th>
      <th>age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>19</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>25</td>
    </tr>
  </tbody>
</Table>`,
    },
    {
      title: "Striped",
      description: (
        <Stack className="gap-3">
          <div>
            Set <InlineCode>striped</InlineCode> to{" "}
            <InlineCode>true</InlineCode> and <InlineCode>bordered</InlineCode>{" "}
            to <InlineCode>false</InlineCode>.
          </div>
          <div>
            Discussions of utilizing zebra stripes:
            <Link href="https://ux.stackexchange.com/q/3562/39046">
              https://ux.stackexchange.com/q/3562/39046
            </Link>
            ,{" "}
            <Link href="https://ux.stackexchange.com/q/60715/39046">
              https://ux.stackexchange.com/q/60715/39046
            </Link>
            .
          </div>
        </Stack>
      ),
      demo: (
        <Table striped bordered={false}>
          <thead>
            <tr>
              <th>name</th>
              <th>age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alice</td>
              <td>19</td>
            </tr>
            <tr>
              <td>Bob</td>
              <td>25</td>
            </tr>
            <tr>
              <td>Carol</td>
              <td>22</td>
            </tr>
            <tr>
              <td>Dave</td>
              <td>34</td>
            </tr>
          </tbody>
        </Table>
      ),
      code: `<Table striped bordered={false}>
  <thead>
    <tr>
      <th>name</th>
      <th>age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>19</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Carol</td>
      <td>22</td>
    </tr>
    <tr>
      <td>Dave</td>
      <td>34</td>
    </tr>
  </tbody>
</Table>`,
    },
    {
      title: "Striped with border",
      description: (
        <div>
          Set <InlineCode>striped</InlineCode> to <InlineCode>true</InlineCode>.
        </div>
      ),
      demo: (
        <Table striped>
          <thead>
            <tr>
              <th>name</th>
              <th>age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alice</td>
              <td>19</td>
            </tr>
            <tr>
              <td>Bob</td>
              <td>25</td>
            </tr>
            <tr>
              <td>Carol</td>
              <td>22</td>
            </tr>
            <tr>
              <td>Dave</td>
              <td>34</td>
            </tr>
          </tbody>
        </Table>
      ),
      code: `<Table striped>
  <thead>
    <tr>
      <th>name</th>
      <th>age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>19</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Carol</td>
      <td>22</td>
    </tr>
    <tr>
      <td>Dave</td>
      <td>34</td>
    </tr>
  </tbody>
</Table>`,
    },
    {
      title: "Sticky header",
      description: (
        <Stack className="gap-3">
          <div>
            Set <InlineCode>stickyHeader</InlineCode> to{" "}
            <InlineCode>true</InlineCode>.
          </div>
          <div>
            Making the header sticky is helpful when the user needs to
            cross-reference and avoid losing context.
          </div>
          <div>
            Note: The example below won't actually be sticky but it will work
            elsewhere.
          </div>
        </Stack>
      ),
      demo: (
        <Table stickyHeader>
          <thead>
            <tr>
              <th>name</th>
              <th>age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alice</td>
              <td>19</td>
            </tr>
            <tr>
              <td>Bob</td>
              <td>25</td>
            </tr>
          </tbody>
        </Table>
      ),
      code: `<Table stickyHeader>
  <thead>
    <tr>
      <th>name</th>
      <th>age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>19</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>25</td>
    </tr>
  </tbody>
</Table>`,
    },
    {
      title: "Sticky first column",
      description: (
        <Stack className="gap-3">
          <div>
            Set <InlineCode>stickyFirstColumn</InlineCode> to{" "}
            <InlineCode>true</InlineCode>.
          </div>
          <div>
            Making the first column sticky is helpful when the user needs to
            cross-reference and avoid losing context.
          </div>
        </Stack>
      ),
      demo: (
        <Table stickyFirstColumn>
          <thead>
            <tr>
              <th>name</th>
              <th>age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alice</td>
              <td>19</td>
            </tr>
            <tr>
              <td>Bob</td>
              <td>25</td>
            </tr>
          </tbody>
        </Table>
      ),
      code: `<Table stickyFirstColumn>
  <thead>
    <tr>
      <th>name</th>
      <th>age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>19</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>25</td>
    </tr>
  </tbody>
</Table>`,
    },
    {
      title: "Sticky header and first column",
      description: (
        <div>
          Set <InlineCode>stickyHeader</InlineCode> and{" "}
          <InlineCode>stickyFirstColumn</InlineCode> to{" "}
          <InlineCode>true</InlineCode>.
        </div>
      ),
      demo: (
        <Table stickyHeader stickyFirstColumn>
          <thead>
            <tr>
              <th>name</th>
              <th>age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alice</td>
              <td>19</td>
            </tr>
            <tr>
              <td>Bob</td>
              <td>25</td>
            </tr>
          </tbody>
        </Table>
      ),
      code: `<Table stickyHeader stickyFirstColumn>
  <thead>
    <tr>
      <th>name</th>
      <th>age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>19</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>25</td>
    </tr>
  </tbody>
</Table>`,
    },
    {
      title: "Condensed",
      description: (
        <div>
          Set <InlineCode>condensed</InlineCode> to{" "}
          <InlineCode>true</InlineCode>.
        </div>
      ),
      demo: (
        <Table condensed>
          <thead>
            <tr>
              <th>name</th>
              <th>age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alice</td>
              <td>19</td>
            </tr>
            <tr>
              <td>Bob</td>
              <td>25</td>
            </tr>
          </tbody>
        </Table>
      ),
      code: `<Table condensed>
  <thead>
    <tr>
      <th>name</th>
      <th>age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>19</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>25</td>
    </tr>
  </tbody>
</Table>`,
    },
    {
      title: "With help icon",
      demo: (
        <Table>
          <thead>
            <tr>
              <ThWithHelpTooltip
                cellContent="name"
                tooltipContent="Some help text to explain something"
              />
              <th>age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alice</td>
              <td>19</td>
            </tr>
            <tr>
              <td>Bob</td>
              <td>25</td>
            </tr>
          </tbody>
        </Table>
      ),
      code: `<Table>
  <thead>
    <tr>
      <th>name</th>
      <th>age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>19</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>25</td>
    </tr>
  </tbody>
</Table>`,
    },
  ];
  const propsTables = [
    {
      title: null,
      props: [
        {
          name: "bordered",
          required: false,
          type: "boolean",
          default: "true",
          notes: null,
        },
        {
          name: "hover",
          required: false,
          type: "boolean",
          default: "true",
          notes: null,
        },
        {
          name: "striped",
          required: false,
          type: "boolean",
          default: "false",
          notes: (
            <div>
              Discussions of utilizing zebra stripes:{" "}
              <Link href="https://ux.stackexchange.com/q/3562/39046">
                https://ux.stackexchange.com/q/3562/39046
              </Link>
              ,{" "}
              <Link href="https://ux.stackexchange.com/q/60715/39046">
                https://ux.stackexchange.com/q/60715/39046
              </Link>
              .
            </div>
          ),
        },
        {
          name: "condensed",
          required: false,
          type: "boolean",
          default: "false",
          notes: null,
        },
        {
          name: "stickyHeader",
          required: false,
          type: "boolean",
          default: "false",
          notes:
            "Making the header sticky is helpful when the user needs to cross-reference and avoid losing context.",
        },
        {
          name: "stickyFirstColumn",
          required: false,
          type: "boolean",
          default: "false",
          notes:
            "Making the first column sticky is helpful when the user needs to cross-reference and avoid losing context.",
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
          type: 'ComponentProps<"table">',
          default: null,
          notes: (
            <div>
              <div className="leading-relaxed">
                See the docs for{" "}
                <Link href="/rest-parameters">rest parameters</Link>. For{" "}
                <InlineCode>Table</InlineCode>, you could pass anything you
                normally would pass to <InlineCode>{"<table>"}</InlineCode>{" "}
                because the return value{" "}
                <Link href="https://github.com/rfui-library/rfui-package/tree/master/src/data-display/table.tsx">
                  looks something like
                </Link>{" "}
                this:
              </div>
              <CodeBlock
                language="tsx"
                code={`<table
  className={className}
  {...restWithoutClass}
>
  {children}
</table>`}
              />
            </div>
          ),
        },
      ],
    },
    {
      title: "ThWithHelpTooltip",
      props: [
        {
          name: "cellContent",
          required: true,
          type: "ReactNode",
          default: null,
          notes: null,
        },
        {
          name: "tooltipContent",
          required: true,
          type: "string",
          default: null,
          notes: null,
        },
      ],
    },
  ];

  return (
    <ComponentDocsPage
      componentName="Table"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/data-display/table.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
