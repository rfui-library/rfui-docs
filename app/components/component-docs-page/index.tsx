import { Header } from "./header";
import { ComponentsList } from "@/components/components-list";
import { Flex } from "rfui";
import type { ReactNode } from "react";
import { Examples } from "./examples";
import { getImportStatement } from "./get-import-statement";
import { OnThisPage } from "./on-this-page";
import { PropsTables, type PropsTableType } from "./props-tables";

export type ComponentDocsPageType = {
  componentName: string;
  sourceCodeUrl: string;
  overviewNotes: ReactNode | string | null;
  examples: ExampleType[];
  propsTables: PropsTableType[];
};

export type ExampleType = {
  title: string;
  description?: ReactNode | string;
  demo: ReactNode;
  code: ReactNode;
};

export const ComponentDocsPage = ({
  componentName,
  sourceCodeUrl,
  overviewNotes,
  examples,
  propsTables,
}: ComponentDocsPageType) => {
  const exampleTitles = examples.map((e) => e.title);
  const propsTableTitles = propsTables.map((p) => p.title ?? componentName);
  const importStatement = getImportStatement(componentName, propsTables);

  return (
    <Flex className="mt-9 gap-10">
      <section className="hidden xl:block">
        <ComponentsList />
      </section>
      <main className="flex-grow overflow-x-hidden" id="overview">
        <Header
          componentName={componentName}
          overviewNotes={overviewNotes}
          sourceCodeUrl={sourceCodeUrl}
          demo={examples[0].demo}
          importStatement={importStatement}
        />
        <Examples examples={examples} />
        <PropsTables propsTables={propsTables} />
      </main>
      <section className="hidden flex-shrink-0 lg:block">
        <OnThisPage
          exampleTitles={exampleTitles}
          propsTableTitles={propsTableTitles}
        />
      </section>
    </Flex>
  );
};
