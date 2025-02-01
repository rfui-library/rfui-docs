import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { CodeBlock, InlineCode, Link, Progress, Stack } from "rfui-package";

export default () => {
  const overviewNotes = null;
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: <Progress value={40} />,
      code: `<Progress value={40} />`,
    },
    {
      title: "Size",
      description: (
        <div>
          You can also do something like{" "}
          <InlineCode>className="h-8!"</InlineCode> to set the height to a
          specific value.
        </div>
      ),
      demo: (
        <Stack className="gap-5">
          <Progress value={40} size="sm" />
          <Progress value={40} size="md" />
          <Progress value={40} size="lg" />
        </Stack>
      ),
      code: `<Stack className="gap-5">
  <Progress value={40} size="sm" />
  <Progress value={40} size="md" />
  <Progress value={40} size="lg" />
</Stack>`,
    },
    {
      title: "Variant",
      demo: (
        <Stack className="gap-5">
          <Progress value={40} variant="neutral" />
          <Progress value={40} variant="info" />
          <Progress value={40} variant="success" />
          <Progress value={40} variant="warning" />
          <Progress value={40} variant="danger" />
        </Stack>
      ),
      code: `<Stack className="gap-5">
  <Progress value={40} variant="neutral" />
  <Progress value={40} variant="info" />
  <Progress value={40} variant="success" />
  <Progress value={40} variant="warning" />
  <Progress value={40} variant="danger" />
</Stack>`,
    },
  ];
  const propsTables = [
    {
      title: null,
      props: [
        {
          name: "value",
          required: true,
          type: "number",
          default: null,
          notes: (
            <div>
              The value should be a number between 0 and 100 and represents what
              percentage of the bar is full.
            </div>
          ),
        },
        {
          name: "size",
          required: false,
          type: '"sm" | "md" | "lg"',
          default: '"md"',
          notes: null,
        },
        {
          name: "variant",
          required: false,
          type: '"success" | "info" | "warning" | "danger" | "neutral"',
          default: '"neutral"',
          notes: null,
        },
        {
          name: "...rest",
          required: false,
          type: 'ComponentProps<"div">',
          default: null,
          notes: (
            <div>
              <div className="leading-relaxed">
                See the docs for{" "}
                <Link href="/rest-parameters">rest parameters</Link>. For{" "}
                <InlineCode>Progress</InlineCode>, you could pass anything you
                normally would pass to <InlineCode>{"<div>"}</InlineCode>{" "}
                because the container{" "}
                <Link href="https://github.com/rfui-library/rfui-package/tree/master/src/feedback/progress.tsx">
                  looks something like
                </Link>{" "}
                this:
              </div>
              <CodeBlock
                language="tsx"
                code={`<div className={className} {...restWithoutClass}>
  {children}
</div>`}
              />
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <ComponentDocsPage
      componentName="Progress"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/feedback/progress.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
