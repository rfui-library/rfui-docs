import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import {
  CodeBlock,
  FormField,
  FormLayout,
  FormSection,
  InlineCode,
  Input,
  Link,
} from "rfui-package";

export default () => {
  const overviewNotes = null;
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: (
        <FormLayout>
          <FormSection
            title="Personal information"
            description="This is the personal information section"
          >
            <FormField label="Name">
              <Input name="name" />
            </FormField>
          </FormSection>
          <FormSection
            title="Contact information"
            description="This is the contact information section"
          >
            <FormField label="Email">
              <Input name="email" />
            </FormField>
          </FormSection>
        </FormLayout>
      ),
      code: `<FormLayout>
  <FormSection
    title="Personal information"
    description="This is the personal information section"
  >
    <FormField label="Name">
      <Input name="name" />
    </FormField>
  </FormSection>
  <FormSection
    title="Contact information"
    description="This is the contact information section"
  >
    <FormField label="Email">
      <Input name="email" />
    </FormField>
  </FormSection>
</FormLayout>`,
    },
  ];
  const propsTables = [
    {
      title: null,
      props: [
        {
          name: "label",
          required: true,
          type: "string",
          default: null,
          notes: null,
        },
        {
          name: "required",
          required: false,
          type: "boolean",
          default: "false",
          notes: null,
        },
        {
          name: "requiredIndicator",
          required: false,
          type: '"text" | "asterisk" | "none"',
          default: '"none"',
          notes: (
            <div>
              See{" "}
              <Link href="https://ux.stackexchange.com/q/840/39046">
                https://ux.stackexchange.com/q/840/39046
              </Link>{" "}
              for a discussion.
            </div>
          ),
        },
        {
          name: "optionalIndicator",
          required: false,
          type: '"text" | "asterisk" | "none"',
          default: '"none"',
          notes: (
            <div>
              See{" "}
              <Link href="https://ux.stackexchange.com/q/840/39046">
                https://ux.stackexchange.com/q/840/39046
              </Link>{" "}
              for a discussion.
            </div>
          ),
        },
        {
          name: "helperText",
          required: false,
          type: "string",
          default: null,
          notes: null,
        },
        {
          name: "size",
          required: false,
          type: '"sm" | "md" | "lg"',
          default: '"md"',
          notes: null,
        },
        {
          name: "rounded",
          required: false,
          type: '"square" | "sm" | "lg" | "full"',
          default: null,
          notes: (
            <div>
              Defaults to the value of the CSS variable{" "}
              <InlineCode>--default-roundedness</InlineCode>. See{" "}
              <Link href="/default-roundedness">"Default roundedness"</Link>.
            </div>
          ),
        },
        {
          name: "errorText",
          required: false,
          type: "string",
          default: null,
          notes: null,
        },
        {
          name: "...rest",
          required: false,
          type: 'Omit<ComponentProps<"div">, "size">',
          default: null,
          notes: (
            <div>
              <div className="leading-relaxed">
                See the docs for{" "}
                <Link href="/rest-parameters">rest parameters</Link>. For{" "}
                <InlineCode>FormField</InlineCode>, you could pass anything you
                normally would pass to <InlineCode>{"<div>"}</InlineCode>{" "}
                because the return value{" "}
                <Link href="https://github.com/rfui-library/rfui-package/tree/master/src/form/form-field.tsx">
                  looks something like
                </Link>{" "}
                this:
              </div>
              <CodeBlock
                language="tsx"
                code={`<div {...rest}>
  ...
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
      componentName="FormLayout"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/form/form-layout.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
