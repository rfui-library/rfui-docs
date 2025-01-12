import { titleToHref } from "@/utilities/title-to-href";
import type { ReactNode } from "react";
import { Table, Stack, Link, CodeBlock, H1, H2, InlineCode } from "rfui";

type PropsTablesType = {
  propsTables: PropsTableType[];
};

export type PropsTableType = {
  title: string | null;
  props: PropsType;
};

type PropsType = {
  name: string;
  required: boolean;
  default: string | null;
  type: string;
  notes: ReactNode | string | null;
}[];

export const PropsTables = ({ propsTables }: PropsTablesType) => {
  return (
    <section>
      {propsTables.map((propsTable) => (
        <PropsTable {...propsTable} />
      ))}
    </section>
  );
};

const PropsTable = ({ props, title }: PropsTableType) => {
  return (
    <section className="mt-10 overflow-x-auto">
      {title ? (
        <H2 className="mb-8" id={`props-${titleToHref(title)}`}>
          <InlineCode>{title}</InlineCode>
        </H2>
      ) : (
        <H1 id="props">
          <Link inPageLink href="#props" underline="hover">
            Props
          </Link>
        </H1>
      )}
      <Table hover={false} className="min-w-[600px]">
        <thead>
          <tr>
            <th className="min-w-[100px]">Prop</th>
            <th className="min-w-[100px]">Required</th>
            <th className="min-w-[100px]">Default</th>
            <th>Type and notes</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr>
              <td className="whitespace-nowrap">
                <InlineCode>{prop.name}</InlineCode>
              </td>
              <td>{prop.required ? "✔" : "-"}</td>
              <td className="whitespace-nowrap">
                {prop.default !== null ? (
                  <InlineCode>{prop.default}</InlineCode>
                ) : (
                  "-"
                )}
              </td>
              <td style={{ wordBreak: "break-word" }}>
                <Stack className="gap-4">
                  <CodeBlock lang="ts" code={prop.type} />
                  {prop.notes}
                </Stack>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
};
