import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import {
  FormField,
  FormLayout,
  FormSection,
  InlineCode,
  Input,
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
            description="Please provide your personal details"
          >
            <FormField label="First name">
              <Input name="firstName" />
            </FormField>
            <FormField label="Last name">
              <Input name="lastName" />
            </FormField>
            <FormField label="Date of birth">
              <Input name="dateOfBirth" type="date" />
            </FormField>
            <FormField label="Phone number">
              <Input name="phone" type="tel" />
            </FormField>
          </FormSection>
          <FormSection
            title="Address"
            description="Where do you currently reside?"
          >
            <FormField label="Street address">
              <Input name="streetAddress" />
            </FormField>
            <FormField label="City">
              <Input name="city" />
            </FormField>
            <FormField label="State / Province">
              <Input name="state" />
            </FormField>
            <FormField label="ZIP / Postal code">
              <Input name="zipCode" />
            </FormField>
          </FormSection>
          <FormSection
            title="Contact information"
            description="How can we reach you?"
          >
            <FormField label="Email">
              <Input name="email" type="email" />
            </FormField>
            <FormField label="Alternative email">
              <Input name="alternativeEmail" type="email" />
            </FormField>
            <FormField label="Emergency contact name">
              <Input name="emergencyContactName" />
            </FormField>
            <FormField label="Emergency contact phone">
              <Input name="emergencyContactPhone" type="tel" />
            </FormField>
          </FormSection>
        </FormLayout>
      ),
      code: `<FormLayout>
  <FormSection
    title="Personal information"
    description="Please provide your personal details"
  >
    <FormField label="First name">
      <Input name="firstName" />
    </FormField>
    <FormField label="Last name">
      <Input name="lastName" />
    </FormField>
    <FormField label="Date of birth">
      <Input name="dateOfBirth" type="date" />
    </FormField>
    <FormField label="Phone number">
      <Input name="phone" type="tel" />
    </FormField>
  </FormSection>
  <FormSection
    title="Address"
    description="Where do you currently reside?"
  >
    <FormField label="Street address">
      <Input name="streetAddress" />
    </FormField>
    <FormField label="City">
      <Input name="city" />
    </FormField>
    <FormField label="State / Province">
      <Input name="state" />
    </FormField>
    <FormField label="ZIP / Postal code">
      <Input name="zipCode" />
    </FormField>
  </FormSection>
  <FormSection
    title="Contact information"
    description="How can we reach you?"
  >
    <FormField label="Email">
      <Input name="email" type="email" />
    </FormField>
    <FormField label="Alternative email">
      <Input name="alternativeEmail" type="email" />
    </FormField>
    <FormField label="Emergency contact name">
      <Input name="emergencyContactName" />
    </FormField>
    <FormField label="Emergency contact phone">
      <Input name="emergencyContactPhone" type="tel" />
    </FormField>
  </FormSection>
</FormLayout>`,
    },
    {
      title: "Vertical layout",
      description: (
        <div>
          The default layout is horizontal but if you pass{" "}
          <InlineCode>layout="vertical"</InlineCode>, the sections will be
          displayed vertically.
        </div>
      ),
      demo: (
        <FormLayout layout="vertical">
          <FormSection
            title="Personal information"
            description="Please provide your personal details"
          >
            <FormField label="First name">
              <Input name="firstName" />
            </FormField>
            <FormField label="Last name">
              <Input name="lastName" />
            </FormField>
            <FormField label="Date of birth">
              <Input name="dateOfBirth" type="date" />
            </FormField>
            <FormField label="Phone number">
              <Input name="phone" type="tel" />
            </FormField>
          </FormSection>
          <FormSection
            title="Address"
            description="Where do you currently reside?"
          >
            <FormField label="Street address">
              <Input name="streetAddress" />
            </FormField>
            <FormField label="City">
              <Input name="city" />
            </FormField>
            <FormField label="State / Province">
              <Input name="state" />
            </FormField>
            <FormField label="ZIP / Postal code">
              <Input name="zipCode" />
            </FormField>
          </FormSection>
          <FormSection
            title="Contact information"
            description="How can we reach you?"
          >
            <FormField label="Email">
              <Input name="email" type="email" />
            </FormField>
            <FormField label="Alternative email">
              <Input name="alternativeEmail" type="email" />
            </FormField>
            <FormField label="Emergency contact name">
              <Input name="emergencyContactName" />
            </FormField>
            <FormField label="Emergency contact phone">
              <Input name="emergencyContactPhone" type="tel" />
            </FormField>
          </FormSection>
        </FormLayout>
      ),
      code: `<FormLayout layout="vertical">
  <FormSection
    title="Personal information"
    description="Please provide your personal details"
  >
    <FormField label="First name">
      <Input name="firstName" />
    </FormField>
    <FormField label="Last name">
      <Input name="lastName" />
    </FormField>
    <FormField label="Date of birth">
      <Input name="dateOfBirth" type="date" />
    </FormField>
    <FormField label="Phone number">
      <Input name="phone" type="tel" />
    </FormField>
  </FormSection>
  <FormSection
    title="Address"
    description="Where do you currently reside?"
  >
    <FormField label="Street address">
      <Input name="streetAddress" />
    </FormField>
    <FormField label="City">
      <Input name="city" />
    </FormField>
    <FormField label="State / Province">
      <Input name="state" />
    </FormField>
    <FormField label="ZIP / Postal code">
      <Input name="zipCode" />
    </FormField>
  </FormSection>
  <FormSection
    title="Contact information"
    description="How can we reach you?"
  >
    <FormField label="Email">
      <Input name="email" type="email" />
    </FormField>
    <FormField label="Alternative email">
      <Input name="alternativeEmail" type="email" />
    </FormField>
    <FormField label="Emergency contact name">
      <Input name="emergencyContactName" />
    </FormField>
    <FormField label="Emergency contact phone">
      <Input name="emergencyContactPhone" type="tel" />
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
