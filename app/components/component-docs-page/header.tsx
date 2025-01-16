import type { ReactNode } from "react";
import { Card, CardBody, CodeBlock, H1, Link, Stack, Text } from "rfui-package";

type HeaderType = {
  componentName: string;
  overviewNotes: string | ReactNode | null;
  sourceCodeUrl: string;
  demo: ReactNode;
  importStatement: string;
};

export const Header = ({
  componentName,
  overviewNotes,
  sourceCodeUrl,
  demo,
  importStatement,
}: HeaderType) => {
  return (
    <header className="mb-10">
      <H1 className="!mt-0 break-words">{componentName}</H1>
      <Stack className="gap-5">
        <Text>
          {overviewNotes && (
            <div className="text-base leading-relaxed text-neutral-700">
              {overviewNotes}
            </div>
          )}
          <Link
            _includeNewTabIcon
            _newTab
            href={sourceCodeUrl}
            className="inline w-fit !text-neutral-900"
          >
            Source code
          </Link>
        </Text>
        <Card width="full" padding="lg">
          <CardBody>{demo}</CardBody>
        </Card>
        <CodeBlock language="ts" code={importStatement} />
      </Stack>
    </header>
  );
};
