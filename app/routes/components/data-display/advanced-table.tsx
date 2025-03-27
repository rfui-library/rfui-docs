import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { AdvancedTable } from "rfui-package";

type RowData = {
  name: string;
  age: number;
};

export default () => {
  const overviewNotes = null;
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: (
        <AdvancedTable
          columns={["Name", "Age"].map((c) => ({ label: c }))}
          rows={[
            { name: "Alice", age: 19 },
            { name: "Bob", age: 25 },
          ]}
          buildRow={(row: RowData) => (
            <>
              <td>{row.name}</td>
              <td>{row.age}</td>
            </>
          )}
        />
      ),
      code: `<AdvancedTable
  columns={["Name", "Age"].map((c) => ({ label: c }))}
  rows={[
    { name: "Alice", age: 19 },
    { name: "Bob", age: 25 },
  ]}
  buildRow={(row: RowData) => (
    <>
      <td>{row.name}</td>
      <td>{row.age}</td>
    </>
  )}
/>`,
    },
    {
      title: "Automatic sorting",
      demo: (
        <AdvancedTable
          sortType="automatic"
          columns={[
            { label: "Name", sortKey: "name" },
            { label: "Age", sortKey: "age" },
          ]}
          rows={[
            { name: "Alice", age: 19 },
            { name: "Bob", age: 25 },
          ]}
          buildRow={(row: RowData) => (
            <>
              <td>{row.name}</td>
              <td>{row.age}</td>
            </>
          )}
          onSort={(sortKey, sortType) => {
            console.log(sortKey, sortType);
          }}
        />
      ),
      code: `<AdvancedTable
  sortType="automatic"
  columns={[
    { label: "Name", sortKey: "name" },
    { label: "Age", sortKey: "age" },
  ]}
  rows={[
    { name: "Alice", age: 19 },
    { name: "Bob", age: 25 },
  ]}
  buildRow={(row: RowData) => (
    <>
      <td>{row.name}</td>
      <td>{row.age}</td>
    </>
  )}
  onSort={(sortKey, sortType) => {
    console.log(sortKey, sortType);
  }}
/>`,
    },
    {
      title: "URL-based sorting",
      demo: (
        <AdvancedTable
          sortType="url"
          columns={[
            { label: "Name", sortKey: "name" },
            { label: "Age", sortKey: "age" },
          ]}
          rows={[
            { name: "Alice", age: 19 },
            { name: "Bob", age: 25 },
          ]}
          buildHref={(key, direction) =>
            `/users?sort=${key}&direction=${direction}`
          }
          buildRow={(row: RowData) => (
            <>
              <td>{row.name}</td>
              <td>{row.age}</td>
            </>
          )}
          sortKey={null}
          sortDirection={null}
        />
      ),
      code: `<AdvancedTable
  sortType="url"
  columns={[
    { label: "Name", sortKey: "name" },
    { label: "Age", sortKey: "age" },
  ]}
  rows={[
    { name: "Alice", age: 19 },
    { name: "Bob", age: 25 },
  ]}
  buildHref={(key, direction) =>
    \`/users?sort=\${key}&direction=$\{direction}\`
  }
  buildRow={(row: RowData) => (
    <>
      <td>{row.name}</td>
      <td>{row.age}</td>
    </>
  )}
  sortKey={null}
  sortDirection={null}
/>`,
    },
  ];
  const propsTables = [
    {
      title: null,
      props: [
        {
          name: "columns",
          required: true,
          type: "string[]",
          default: null,
          notes: null,
        },
        {
          name: "rows",
          required: true,
          type: "T[]",
          default: null,
          notes: null,
        },
        {
          name: "buildRow",
          required: true,
          type: "(row: T) => JSX.Element",
          default: null,
          notes: null,
        },
      ],
    },
  ];

  return (
    <ComponentDocsPage
      componentName="AdvancedTable"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/data-display/advanced-table.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
