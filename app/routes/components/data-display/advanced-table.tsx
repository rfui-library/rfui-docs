import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { useState } from "react";
import { AdvancedTable, InlineCode, type SortDirection } from "rfui-package";

type RowData = {
  name: string;
  age: number;
};

export default () => {
  const overviewNotes = null;
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);
  const initialRows = [
    { name: "Alice", age: 19 },
    { name: "Bob", age: 25 },
  ];
  const [rows, setRows] = useState<RowData[]>(initialRows);
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
      description: (
        <div>
          Set <InlineCode>sortType</InlineCode> to{" "}
          <InlineCode>"automatic"</InlineCode> to enable automatic sorting. This
          is useful if you don't have paginated data.
        </div>
      ),
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
      title: "Automatic sorting with nesting",
      description: (
        <div>
          When <InlineCode>sortKey</InlineCode> is a nested property like{" "}
          <InlineCode>"firm.name"</InlineCode> it will sort by eg.{" "}
          <InlineCode>user.firm.name</InlineCode> instead of{" "}
          <InlineCode>user["firm.name"]</InlineCode>.
        </div>
      ),
      demo: (
        <AdvancedTable
          sortType="automatic"
          columns={[
            { label: "Name", sortKey: "name" },
            { label: "Firm", sortKey: "firm.name" },
          ]}
          rows={[
            { name: "Alice", firm: { name: "Acme" } },
            { name: "Bob", firm: { name: "Beta" } },
          ]}
          buildRow={(row) => (
            <>
              <td>{row.name}</td>
              <td>{row.firm.name}</td>
            </>
          )}
        />
      ),
      code: `<AdvancedTable
  sortType="automatic"
  columns={[
    { label: "Name", sortKey: "name" },
    { label: "Firm", sortKey: "firm.name" },
  ]}
  rows={[
    { name: "Alice", firm: { name: "Acme" } },
    { name: "Bob", firm: { name: "Beta" } },
  ]}
  buildRow={(row) => (
    <>
      <td>{row.name}</td>
      <td>{row.firm.name}</td>
    </>
  )}
/>`,
    },
    {
      title: "URL-based sorting",
      description: (
        <div>
          Set <InlineCode>sortType</InlineCode> to{" "}
          <InlineCode>"url"</InlineCode> to enable URL-based sorting. This will
          add an <InlineCode>{`<a>`}</InlineCode> to the header of each column
          with an <InlineCode>href</InlineCode> based on{" "}
          <InlineCode>buildHref</InlineCode>.
        </div>
      ),
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
    {
      title: "Controlled sorting",
      description: (
        <div>
          Set <InlineCode>sortType</InlineCode> to{" "}
          <InlineCode>"controlled"</InlineCode> to enable controlled sorting.
          This will allow you to manually sort the table via the{" "}
          <InlineCode>onSort</InlineCode> prop.
        </div>
      ),
      demo: (
        <AdvancedTable
          sortType="controlled"
          columns={[
            { label: "Name", sortKey: "name" },
            { label: "Age", sortKey: "age" },
          ]}
          rows={rows}
          buildRow={(row: RowData) => (
            <>
              <td>{row.name}</td>
              <td>{row.age}</td>
            </>
          )}
          sortKey={sortKey}
          sortDirection={sortDirection}
          onSort={(key, direction) => {
            setSortKey(key);
            setSortDirection(direction);
            setRows(
              key === null
                ? initialRows
                : [...rows].sort((a, b) => {
                    const aValue = (a[key as keyof RowData] as string) ?? "";
                    const bValue = (b[key as keyof RowData] as string) ?? "";

                    return direction === "asc"
                      ? aValue.localeCompare(bValue)
                      : bValue.localeCompare(aValue);
                  })
            );
          }}
        />
      ),
      code: `<AdvancedTable
  sortType="controlled"
  columns={[
    { label: "Name", sortKey: "name" },
    { label: "Age", sortKey: "age" },
  ]}
  rows={rows}
  buildRow={(row: RowData) => (
    <>
      <td>{row.name}</td>
      <td>{row.age}</td>
    </>
  )}
  sortKey={sortKey}
  sortDirection={sortDirection}
  onSort={(key, direction) => {
    setSortKey(key);
    setSortDirection(direction);
    setRows(
      key === null
        ? initialRows
        : [...rows].sort((a, b) => {
            const aValue = (a[key as keyof RowData] as string) ?? "";
            const bValue = (b[key as keyof RowData] as string) ?? "";

            return direction === "asc"
              ? aValue.localeCompare(bValue)
              : bValue.localeCompare(aValue);
          })
    );
  }}
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
          type: "BaseColumn[] || SortableColumn[]",
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
          type: "(row: T) => ReactNode",
          default: null,
          notes: null,
        },
        {
          name: "getRowKey",
          required: false,
          type: "(row: T) => string | number",
          default: null,
          notes: (
            <div>
              The purpose of this is to set <InlineCode>key</InlineCode> on the{" "}
              <InlineCode>tr</InlineCode> element. If{" "}
              <InlineCode>getRowKey</InlineCode> isn't provided it will fall
              back to using <InlineCode>row.id</InlineCode> if it is available
              and if not, to <InlineCode>index</InlineCode>.
            </div>
          ),
        },
        {
          name: "tableProps",
          required: false,
          type: 'Omit<TableType, "children">',
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
