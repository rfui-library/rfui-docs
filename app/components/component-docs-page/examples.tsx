import { titleToHref } from "@/utilities/title-to-href";
import { Card, H2, Text } from "rfui";
import type { ExampleType } from "./index";

type ExamplesType = {
  examples: ExampleType[];
};

export const Examples = ({ examples }: ExamplesType) => {
  return (
    <section>
      {examples.map((example) => (
        <section key={example.title}>
          <H2 inPageLink={`example-${titleToHref(example.title)}`}>
            {example.title}
          </H2>
          {example.description && (
            <Text size="sm" className="mb-6">
              {example.description}
            </Text>
          )}
          <Card width="full" className="mb-4">
            {example.demo}
          </Card>
          {example.code}
        </section>
      ))}
    </section>
  );
};
