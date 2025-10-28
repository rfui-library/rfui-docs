import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { FormField, FormLayout, FormSection, Input } from "rfui-package";

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
          name: "layout",
          required: false,
          type: "'horizontal' | 'vertical'",
          default: "'horizontal'",
          notes: null,
        },
      ],
    },
    {
      title: "FormSection",
      props: [
        {
          name: "title",
          required: true,
          type: "string",
          default: null,
          notes: null,
        },
        {
          name: "description",
          required: false,
          type: "string",
          default: null,
          notes: null,
        },
        {
          name: "children",
          required: true,
          type: "ComponentChild",
          default: null,
          notes: null,
        },
        {
          name: "...rest",
          required: false,
          type: "FlexType",
          default: null,
          notes: null,
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
