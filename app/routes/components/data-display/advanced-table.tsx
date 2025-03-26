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
          headerColumns={["Name", "Age"].map((c) => ({ label: c }))}
          bodyRowsData={[
            { name: "Alice", age: 19 },
            { name: "Bob", age: 25 },
          ]}
          buildBodyRow={(row: RowData) => (
            <>
              <td>{row.name}</td>
              <td>{row.age}</td>
            </>
          )}
        />
      ),
      code: `<AdvancedTable
  headerColumns={["Name", "Age"].map((c) => ({ label: c }))}
  bodyRowsData={[
    { name: "Alice", age: 19 },
    { name: "Bob", age: 25 },
  ]}
  buildBodyRow={(row: RowData) => (
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
          headerColumns={[
            { label: "Name", sortKey: "name" },
            { label: "Age", sortKey: "age" },
          ]}
          bodyRowsData={[
            { name: "Alice", age: 19 },
            { name: "Bob", age: 25 },
          ]}
          buildBodyRow={(row: RowData) => (
            <>
              <td>{row.name}</td>
              <td>{row.age}</td>
            </>
          )}
        />
      ),
      code: `<AdvancedTable
  sortType="automatic"
  headerColumns={[
    { label: "Name", sortKey: "name" },
    { label: "Age", sortKey: "age" },
  ]}
  bodyRowsData={[
    { name: "Alice", age: 19 },
    { name: "Bob", age: 25 },
  ]}
  buildBodyRow={(row: RowData) => (
    <>
      <td>{row.name}</td>
      <td>{row.age}</td>
    </>
  )}
/>`,
    },
  ];
  const propsTables = [
    {
      title: null,
      props: [
        {
          name: "headerColumns",
          required: true,
          type: "string[]",
          default: null,
          notes: null,
        },
        {
          name: "bodyRowsData",
          required: true,
          type: "T[]",
          default: null,
          notes: null,
        },
        {
          name: "buildBodyRow",
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
