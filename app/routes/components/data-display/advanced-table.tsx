import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { useState } from "react";
import { AdvancedTable, InlineCode, type SortDirection } from "rfui-package";

export default () => {
  const overviewNotes = null;
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);
  const initialRows = [
    { name: "Alice", age: 19 },
    { name: "Bob", age: 25 },
  ];
  const [rows, setRows] = useState(initialRows);
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
          buildRow={(row) => (
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
  buildRow={(row) => (
    <>
      <td>{row.name}</td>
      <td>{row.age}</td>
    </>
  )}
/>`,
    },
    {
      title: "Passing props to <th>",
      description: (
        <div>
          Use the optional <InlineCode>thProps</InlineCode> property of columns.
        </div>
      ),
      demo: (
        <AdvancedTable
          columns={[
            {
              label: "Name",
            },
            {
              label: "Age",
              thProps: {
                className: "text-right!",
              },
            },
          ]}
          rows={[
            { name: "Alice", age: 19 },
            { name: "Bob", age: 25 },
          ]}
          buildRow={(row) => (
            <>
              <td>{row.name}</td>
              <td className="text-right!">{row.age}</td>
            </>
          )}
        />
      ),
      code: `<AdvancedTable
  columns={[
    {
      label: "Name",
    },
    {
      label: "Age",
      thProps: {
        className: "text-right",
      },
    },
  ]}
  rows={[
    { name: "Alice", age: 19 },
    { name: "Bob", age: 25 },
  ]}
  buildRow={(row) => (
    <>
      <td>{row.name}</td>
      <td className="text-right">{row.age}</td>
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
          buildRow={(row) => (
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
  buildRow={(row) => (
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
      title: "Automatic sorting excluding last row",
      description: (
        <div>
          Often times a table will have some sort of "total" row at the bottom
          that you don't want to include in the sorting. Set{" "}
          <InlineCode>shouldSortLastRow</InlineCode> to{" "}
          <InlineCode>false</InlineCode> to exclude this row.
        </div>
      ),
      demo: (
        <AdvancedTable
          sortType="automatic"
          columns={[
            { label: "Name", sortKey: "name" },
            { label: "Cost", sortKey: "cost" },
          ]}
          rows={[
            { name: "Milk", cost: 5 },
            { name: "Eggs", cost: 4 },
            { name: "Bread", cost: 2 },
            { name: "Total", cost: 11 },
          ]}
          buildRow={(row, index) => (
            <>
              <td className={index === 3 ? "font-bold" : ""}>{row.name}</td>
              <td className={index === 3 ? "font-bold" : ""}>{row.cost}</td>
            </>
          )}
          shouldSortLastRow={false}
        />
      ),
      code: `<AdvancedTable
  sortType="automatic"
  columns={[
    { label: "Name", sortKey: "name" },
    { label: "Cost", sortKey: "cost" },
  ]}
  rows={[
    { name: "Milk", cost: 5 },
    { name: "Eggs", cost: 4 },
    { name: "Bread", cost: 2 },
    { name: "Total", cost: 11 },
  ]}
  buildRow={(row, index) => (
    <>
      <td className={index === 3 ? "font-bold" : ""}>{row.name}</td>
      <td className={index === 3 ? "font-bold" : ""}>{row.cost}</td>
    </>
  )}
  shouldSortLastRow={false}
/>`,
    },
    {
      title: "URL-based sorting",
      description: (
        <div>
          Set <InlineCode>sortType</InlineCode> to{" "}
          <InlineCode>"url"</InlineCode> to enable URL-based sorting. This will
          add an <InlineCode>{`<a>`}</InlineCode> to the header of each column
          with an <InlineCode>href</InlineCode> based on the current URL and
          with <InlineCode>sort</InlineCode> and{" "}
          <InlineCode>direction</InlineCode> added as query params.
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
          buildRow={(row) => (
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
  buildRow={(row) => (
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
      title: "URL-based sorting with custom href",
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
          buildRow={(row) => (
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
  buildRow={(row) => (
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
          buildRow={(row) => (
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
                    const aValue = (a[key as keyof typeof a] as string) ?? "";
                    const bValue = (b[key as keyof typeof b] as string) ?? "";

                    return direction === "asc"
                      ? aValue.localeCompare(bValue)
                      : bValue.localeCompare(aValue);
                  }),
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
  buildRow={(row) => (
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
            const aValue = (a[key as keyof typeof a] as string) ?? "";
            const bValue = (b[key as keyof typeof b] as string) ?? "";

            return direction === "asc"
              ? aValue.localeCompare(bValue)
              : bValue.localeCompare(aValue);
          })
    );
  }}
/>`,
    },
    {
      title: "Exclude column from sorting",
      description: (
        <div>
          To exclude a column from sorting, just omit{" "}
          <InlineCode>sortKey</InlineCode>. This applies to all sorting types.
          This example excludes the "Age" column.
        </div>
      ),
      demo: (
        <AdvancedTable
          sortType="automatic"
          columns={[{ label: "Name", sortKey: "name" }, { label: "Age" }]}
          rows={[
            { name: "Alice", age: 19 },
            { name: "Bob", age: 25 },
          ]}
          buildRow={(row) => (
            <>
              <td>{row.name}</td>
              <td>{row.age}</td>
            </>
          )}
        />
      ),
      code: `<AdvancedTable
  sortType="automatic"
  columns={[{ label: "Name", sortKey: "name" }, { label: "Age" }]}
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
      title: "With help icon",
      demo: (
        <AdvancedTable
          columns={[
            {
              label: "Name",
              helpTooltipContent: "Some help text to explain something",
            },
            {
              label: "Age",
            },
          ]}
          rows={[
            { name: "Alice", age: 19 },
            { name: "Bob", age: 25 },
          ]}
          buildRow={(row) => (
            <>
              <td>{row.name}</td>
              <td>{row.age}</td>
            </>
          )}
        />
      ),
      code: `<AdvancedTable
  columns={[
    {
      label: "Name",
      helpTooltipContent: "Some help text to explain something",
    },
    {
      label: "Age",
    },
  ]}
  rows={[
    { name: "Alice", age: 19 },
    { name: "Bob", age: 25 },
  ]}
  buildRow={(row) => (
    <>
      <td>{row.name}</td>
      <td>{row.age}</td>
    </>
  )}
/>`,
    },
    {
      title: "With help icon and sorting",
      demo: (
        <AdvancedTable
          sortType="automatic"
          columns={[
            {
              label: "Name",
              sortKey: "name",
              helpTooltipContent: "Some help text to explain something",
            },
            {
              label: "Age",
              sortKey: "age",
            },
          ]}
          rows={[
            { name: "Alice", age: 19 },
            { name: "Bob", age: 25 },
          ]}
          buildRow={(row) => (
            <>
              <td>{row.name}</td>
              <td>{row.age}</td>
            </>
          )}
        />
      ),
      code: `<AdvancedTable
  sortType="automatic"
  columns={[
    {
      label: "Name",
      sortKey: "name",
      helpTooltipContent: "Some help text to explain something",
    },
    {
      label: "Age",
      sortKey: "age",
    },
  ]}
  rows={[
    { name: "Alice", age: 19 },
    { name: "Bob", age: 25 },
  ]}
  buildRow={(row) => (
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
          type: "(row: T, index: number) => ReactNode",
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
