import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import {
  Checkbox,
  CodeBlock,
  FormField,
  InlineCode,
  Input,
  Link,
  Stack,
} from "rfui-package";

export default () => {
  const overviewNotes = (
    <div>
      <InlineCode>FormField</InlineCode> is a wrapper for input fields like{" "}
      <Link href="/components/form/input">
        <InlineCode>Input</InlineCode>
      </Link>{" "}
      and{" "}
      <Link href="/components/form/select">
        <InlineCode>Select</InlineCode>
      </Link>
      . It lets you provide things like labels and helper text.
    </div>
  );
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: (
        <FormField label="Name">
          <Input name="name" />
        </FormField>
      ),
      code: `<FormField label="Name">
  <Input name="name" />
</FormField>`,
    },
    {
      title: "Helper text",
      demo: (
        <FormField label="Name" helperText="Your first and last name">
          <Input name="name" />
        </FormField>
      ),
      code: `<FormField label="Name" helperText="Your first and last name">
  <Input name="name" />
</FormField>`,
    },
    {
      title: "Info popover",
      description: (
        <div>
          It is{" "}
          <Link href="https://www.nngroup.com/articles/tooltip-guidelines/">
            discouraged
          </Link>{" "}
          to hide information that is needed to complete the form behind a
          popover. Consider this pattern for supplementary information that is
          too long for helper text.
        </div>
      ),
      demo: (
        <FormField
          label="Name"
          infoPopoverContent="Some long content providing more information about this form field."
        >
          <Input name="name" />
        </FormField>
      ),
      code: `<FormField
  label="Name"
  infoPopoverContent="Some long content providing more information about this form field."
>
  <Input name="name" />
</FormField>`,
    },
    {
      title: "Error text",
      demo: (
        <FormField label="Name" errorText="Invalid name">
          <Input invalid name="name" />
        </FormField>
      ),
      code: `<FormField label="Name" errorText="Invalid name">
  <Input invalid name="name" />
</FormField>`,
    },
    {
      title: "Helper and error text",
      description: "You can include both helper and error text.",
      demo: (
        <FormField
          label="Name"
          helperText="Your first and last name"
          errorText="Invalid name"
        >
          <Input invalid name="name" />
        </FormField>
      ),
      code: `<FormField
  label="Name"
  helperText="Your first and last name"
  errorText="Invalid name"
>
  <Input invalid name="name" />
</FormField>`,
    },
    {
      title: "Required",
      description: (
        <Stack className="gap-3">
          <div>
            Set <InlineCode>required</InlineCode> to{" "}
            <InlineCode>true</InlineCode> and{" "}
            <InlineCode>requiredIndicator</InlineCode> to either{" "}
            <InlineCode>"text"</InlineCode>, <InlineCode>"asterisk"</InlineCode>
            , or <InlineCode>"none"</InlineCode>.
          </div>
          <div>
            See{" "}
            <Link href="https://ux.stackexchange.com/q/840/39046">
              https://ux.stackexchange.com/q/840/39046
            </Link>{" "}
            for a discussion.
          </div>
        </Stack>
      ),
      demo: (
        <Stack className="gap-5">
          <FormField required requiredIndicator="text" label="Name">
            <Input name="name" />
          </FormField>
          <FormField required requiredIndicator="asterisk" label="Name">
            <Input name="name" />
          </FormField>
        </Stack>
      ),
      code: `<Stack className="gap-5">
  <FormField required requiredIndicator="text" label="Name">
    <Input name="name" />
  </FormField>
  <FormField required requiredIndicator="asterisk" label="Name">
    <Input name="name" />
  </FormField>
</Stack>`,
    },
    {
      title: "Optional",
      description: (
        <Stack className="gap-3">
          <div>
            Set <InlineCode>required</InlineCode> to{" "}
            <InlineCode>false</InlineCode> and{" "}
            <InlineCode>optionalIndicator</InlineCode> to either{" "}
            <InlineCode>"text"</InlineCode>, <InlineCode>"asterisk"</InlineCode>
            , or <InlineCode>"none"</InlineCode>.
          </div>
          <div>
            See{" "}
            <Link href="https://ux.stackexchange.com/q/840/39046">
              https://ux.stackexchange.com/q/840/39046
            </Link>{" "}
            for a discussion.
          </div>
        </Stack>
      ),
      demo: (
        <Stack className="gap-5">
          <FormField optionalIndicator="text" label="Name">
            <Input name="name" />
          </FormField>
          <FormField optionalIndicator="asterisk" label="Name">
            <Input name="name" />
          </FormField>
        </Stack>
      ),
      code: `<Stack className="gap-5">
  <FormField optionalIndicator="text" label="Name">
    <Input name="name" />
  </FormField>
  <FormField optionalIndicator="asterisk" label="Name">
    <Input name="name" />
  </FormField>
</Stack>`,
    },
    {
      title: "Size",
      description: (
        <div>
          Set <InlineCode>size</InlineCode> to <InlineCode>"sm"</InlineCode>,{" "}
          <InlineCode>"md"</InlineCode>, or <InlineCode>"lg"</InlineCode>.
          Defaults to <InlineCode>"md"</InlineCode>.
        </div>
      ),
      demo: (
        <Stack className="gap-5">
          <FormField
            required
            label="Name"
            requiredIndicator="text"
            helperText="First and last name"
            size="sm"
          >
            <Input name="name" size="sm" />
          </FormField>
          <FormField
            required
            label="Name"
            requiredIndicator="text"
            helperText="First and last name"
            size="md"
          >
            <Input name="name" size="md" />
          </FormField>
          <FormField
            required
            label="Name"
            requiredIndicator="text"
            helperText="First and last name"
            size="lg"
          >
            <Input name="name" size="lg" />
          </FormField>
        </Stack>
      ),
      code: `<Stack className="gap-5">
  <FormField
    required
    label="Name"
    requiredIndicator="text"
    helperText="First and last name"
    size="sm"
  >
    <Input name="name" size="sm" />
  </FormField>
  <FormField
    required
    label="Name"
    requiredIndicator="text"
    helperText="First and last name"
    size="md"
  >
    <Input name="name" size="md" />
  </FormField>
  <FormField
    required
    label="Name"
    requiredIndicator="text"
    helperText="First and last name"
    size="lg"
  >
    <Input name="name" size="lg" />
  </FormField>
</Stack>`,
    },
    {
      title: "Width",
      description: (
        <div>
          These examples use{" "}
          <InlineCode>className="w-14 max-w-full"</InlineCode> and{" "}
          <InlineCode>className="w-10"</InlineCode> to set the width of the form
          field.
        </div>
      ),
      demo: (
        <Stack className="gap-5">
          <FormField label="Name on card" className="w-14 max-w-full">
            <Input name="name-on-card" />
          </FormField>
          <FormField label="Card number" className="w-14 max-w-full">
            <Input name="card-number" />
          </FormField>
          <FormField label="Expiry date" className="w-10">
            <Input name="expiry-date" />
          </FormField>
          <FormField label="CVC" className="w-10">
            <Input name="cvc" />
          </FormField>
        </Stack>
      ),
      code: `<Stack className="gap-5">
  <FormField label="Name on card" className="w-14 max-w-full">
    <Input name="name-on-card" />
  </FormField>
  <FormField label="Card number" className="w-14 max-w-full">
    <Input name="card-number" />
  </FormField>
  <FormField label="Expiry date" className="w-10">
    <Input name="expiry-date" />
  </FormField>
  <FormField label="CVC" className="w-10">
    <Input name="cvc" />
  </FormField>
</Stack>`,
    },
    {
      title: "Input type",
      description: (
        <div>
          <InlineCode>FormField</InlineCode> is just a wrapper. So far in the
          above examples we've been passing <InlineCode>Input</InlineCode> to it
          but you can pass other input components like{" "}
          <Link href="/components/form/checkbox">
            <InlineCode>Checkbox</InlineCode>
          </Link>
          .
        </div>
      ),
      demo: (
        <FormField label="Remember me">
          <Checkbox name="remember-me" />
        </FormField>
      ),
      code: `<FormField label="Remember me">
  <Checkbox name="remember-me" />
</FormField>`,
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
          type: "string | ReactNode",
          default: null,
          notes: null,
        },
        {
          name: "infoPopoverContent",
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
          type: "string | ReactNode",
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
      componentName="FormField"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/form/form-field.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
