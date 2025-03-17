import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { useState } from "react";
import { CodeBlock, InlineCode, Link, Select, Stack } from "rfui-package";

export default () => {
  const overviewNotes = (
    <Stack className="gap-3">
      <p>
        Select dropdowns are{" "}
        <Link href="https://ux.stackexchange.com/q/456/39046">appropriate</Link>{" "}
        when you are allowing the user to choose between many options. If there
        are only a few options to choose from, prefer the{" "}
        <Link href="/components/form/radio-button">
          <InlineCode>RadioButton</InlineCode>
        </Link>{" "}
        component.
      </p>
      <p>
        Note: This component uses{" "}
        <Link href="https://www.npmjs.com/package/@headlessui/react">
          <InlineCode>@headlessui/react</InlineCode>
        </Link>
        's{" "}
        <Link href="https://headlessui.com/react/listbox">
          <InlineCode>Listbox</InlineCode>
        </Link>{" "}
        component.
      </p>
    </Stack>
  );
  const uncontrolledOptions = [
    {
      label: "Foo",
      value: "foo",
    },
    {
      label: "Bar",
      value: "bar",
    },
    {
      label: "Baz",
      value: "baz",
    },
  ];
  const [controlledValue, setControlledValue] = useState(
    uncontrolledOptions[1]
  );
  const [controlledMultiselectValues, setControlledMultiselectValues] =
    useState([uncontrolledOptions[1]]);

  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: (
        <Select
          options={[
            {
              label: "Foo",
              value: "foo",
            },
            {
              label: "Bar",
              value: "bar",
            },
            {
              label: "Baz",
              value: "baz",
            },
          ]}
        />
      ),
      code: `<Select
  options={[
    {
      label: "Foo",
      value: "foo",
    },
    {
      label: "Bar",
      value: "bar",
    },
    {
      label: "Baz",
      value: "baz",
    },
  ]}
/>`,
    },
    {
      title: "Using with HTML forms",
      description: (
        <div>
          If you add the <InlineCode>name</InlineCode> prop, a hidden input
          element will be rendered and kept in sync with the
          <InlineCode>Select</InlineCode> state. See Headless UI's docs{" "}
          <Link href="https://headlessui.com/react/listbox#using-with-html-forms">
            here
          </Link>
          .
        </div>
      ),
      demo: (
        <Select
          name="name-example"
          options={[
            {
              label: "Foo",
              value: "foo",
            },
            {
              label: "Bar",
              value: "bar",
            },
            {
              label: "Baz",
              value: "baz",
            },
          ]}
        />
      ),
      code: `<Select
  name="name-example"
  options={[
    {
      label: "Foo",
      value: "foo",
    },
    {
      label: "Bar",
      value: "bar",
    },
    {
      label: "Baz",
      value: "baz",
    },
  ]}
/>`,
    },
    {
      title: "Empty initial value",
      description: (
        <div>
          <p>
            If you want an empty initial value use something like this as the
            first option in the <InlineCode>options</InlineCode> array:
          </p>
          <CodeBlock
            className="mt-2"
            language="ts"
            code={`{
  label: "",
  value: "",
}`}
          />
        </div>
      ),
      demo: (
        <Select
          options={[
            {
              label: "",
              value: "",
            },
            {
              label: "Foo",
              value: "foo",
            },
            {
              label: "Bar",
              value: "bar",
            },
            {
              label: "Baz",
              value: "baz",
            },
          ]}
        />
      ),
      code: `<Select
  options={[
    {
      label: "",
      value: "",
    },
    {
      label: "Foo",
      value: "foo",
    },
    {
      label: "Bar",
      value: "bar",
    },
    {
      label: "Baz",
      value: "baz",
    },
  ]}
/>`,
    },
    {
      title: "Uncontrolled",
      description: (
        <div>
          If you don't pass <InlineCode>onChange</InlineCode> this component
          will be uncontrolled. If you're taking the uncontrolled approach you
          can use the <InlineCode>defaultValue</InlineCode> prop to set the
          initial value.
        </div>
      ),
      demo: (
        <Select
          defaultValue={uncontrolledOptions[1]}
          options={uncontrolledOptions}
        />
      ),
      code: `<Select
  defaultValue={uncontrolledOptions[1].value}
  options={uncontrolledOptions}
/>`,
    },
    {
      title: "Controlled",
      description: (
        <div>
          Pass <InlineCode>value</InlineCode> and{" "}
          <InlineCode>onChange</InlineCode> to make this a controlled component.
        </div>
      ),
      demo: (
        <Select
          value={controlledValue}
          onChange={(newValue) => {
            setControlledValue(newValue as { label: string; value: string });
          }}
          options={uncontrolledOptions}
        />
      ),
      code: `<Select
  value={controlledValue}
  onChange={(newValue) => {
    setControlledValue(newValue as { label: string; value: string });
  }}
  options={controlledOptions}
/>`,
    },
    {
      title: "Size",
      description: (
        <div>
          Set <InlineCode>size</InlineCode> to either{" "}
          <InlineCode>"sm"</InlineCode>, <InlineCode>"md"</InlineCode> or{" "}
          <InlineCode>"lg"</InlineCode>. Defaults to{" "}
          <InlineCode>"md"</InlineCode>.
        </div>
      ),
      demo: (
        <Stack className="w-fit gap-5">
          <Select
            size="sm"
            options={[
              {
                label: "Foo",
                value: "foo",
              },
              {
                label: "Bar",
                value: "bar",
              },
              {
                label: "Baz",
                value: "baz",
              },
            ]}
          />
          <Select
            size="md"
            options={[
              {
                label: "Foo",
                value: "foo",
              },
              {
                label: "Bar",
                value: "bar",
              },
              {
                label: "Baz",
                value: "baz",
              },
            ]}
          />
          <Select
            size="lg"
            options={[
              {
                label: "Foo",
                value: "foo",
              },
              {
                label: "Bar",
                value: "bar",
              },
              {
                label: "Baz",
                value: "baz",
              },
            ]}
          />
        </Stack>
      ),
      code: `<Stack className="w-fit gap-5">
  <Select
    size="sm"
    options={[
      {
        label: "Foo",
        value: "foo",
      },
      {
        label: "Bar",
        value: "bar",
      },
      {
        label: "Baz",
        value: "baz",
      },
    ]}
  />
  <Select
    size="md"
    options={[
      {
        label: "Foo",
        value: "foo",
      },
      {
        label: "Bar",
        value: "bar",
      },
      {
        label: "Baz",
        value: "baz",
      },
    ]}
  />
  <Select
    size="lg"
    options={[
      {
        label: "Foo",
        value: "foo",
      },
      {
        label: "Bar",
        value: "bar",
      },
      {
        label: "Baz",
        value: "baz",
      },
    ]}
  />
</Stack>`,
    },
    {
      title: "Width",
      description: (
        <div>
          To set the width use <InlineCode>buttonClassName</InlineCode> and{" "}
          <InlineCode>optionsClassName</InlineCode>.
        </div>
      ),
      demo: (
        <Select
          buttonClassName="w-[500px]"
          optionsClassName="w-[500px]"
          options={[
            {
              label: "Foo",
              value: "foo",
            },
            {
              label: "Bar",
              value: "bar",
            },
            {
              label: "Baz",
              value: "baz",
            },
          ]}
        />
      ),
      code: `<Select
  buttonClassName="w-[500px]"
  optionsClassName="w-[500px]"
  options={[
    {
      label: "Foo",
      value: "foo",
    },
    {
      label: "Bar",
      value: "bar",
    },
    {
      label: "Baz",
      value: "baz",
    },
  ]}
/>`,
    },
    {
      title: "Rounded",
      description: (
        <div>
          Set <InlineCode>rounded</InlineCode> to either{" "}
          <InlineCode>"square"</InlineCode>, <InlineCode>"sm"</InlineCode>,{" "}
          <InlineCode>"lg"</InlineCode>, or <InlineCode>"full"</InlineCode>.
          Defaults to the value of the CSS variable{" "}
          <InlineCode>--default-roundedness</InlineCode>. See{" "}
          <Link href="/default-roundedness">"Default roundedness"</Link>.
        </div>
      ),
      demo: (
        <Stack className="w-fit gap-5">
          <Select
            rounded="square"
            options={[
              {
                label: "Foo",
                value: "foo",
              },
              {
                label: "Bar",
                value: "bar",
              },
              {
                label: "Baz",
                value: "baz",
              },
            ]}
          />
          <Select
            rounded="sm"
            options={[
              {
                label: "Foo",
                value: "foo",
              },
              {
                label: "Bar",
                value: "bar",
              },
              {
                label: "Baz",
                value: "baz",
              },
            ]}
          />
          <Select
            rounded="lg"
            options={[
              {
                label: "Foo",
                value: "foo",
              },
              {
                label: "Bar",
                value: "bar",
              },
              {
                label: "Baz",
                value: "baz",
              },
            ]}
          />
          <Select
            rounded="full"
            options={[
              {
                label: "Foo",
                value: "foo",
              },
              {
                label: "Bar",
                value: "bar",
              },
              {
                label: "Baz",
                value: "baz",
              },
            ]}
          />
        </Stack>
      ),
      code: `<Stack className="w-fit gap-5">
  <Select
    rounded="square"
    options={[
      {
        label: "Foo",
        value: "foo",
      },
      {
        label: "Bar",
        value: "bar",
      },
      {
        label: "Baz",
        value: "baz",
      },
    ]}
  />
  <Select
    rounded="sm"
    options={[
      {
        label: "Foo",
        value: "foo",
      },
      {
        label: "Bar",
        value: "bar",
      },
      {
        label: "Baz",
        value: "baz",
      },
    ]}
  />
  <Select
    rounded="lg"
    options={[
      {
        label: "Foo",
        value: "foo",
      },
      {
        label: "Bar",
        value: "bar",
      },
      {
        label: "Baz",
        value: "baz",
      },
    ]}
  />
  <Select
    rounded="full"
    options={[
      {
        label: "Foo",
        value: "foo",
      },
      {
        label: "Bar",
        value: "bar",
      },
      {
        label: "Baz",
        value: "baz",
      },
    ]}
  />
</Stack>`,
    },
    {
      title: "Disabled",
      description: (
        <div>
          Set <InlineCode>disabled</InlineCode> to <InlineCode>true</InlineCode>
          .
        </div>
      ),
      demo: (
        <Select
          disabled
          options={[
            {
              label: "Foo",
              value: "foo",
            },
            {
              label: "Bar",
              value: "bar",
            },
            {
              label: "Baz",
              value: "baz",
            },
          ]}
        />
      ),
      code: `<Select
  disabled
  options={[
    {
      label: "Foo",
      value: "foo",
    },
    {
      label: "Bar",
      value: "bar",
    },
    {
      label: "Baz",
      value: "baz",
    },
  ]}
/>`,
    },
    {
      title: "Disabled option",
      description: (
        <div>
          Set <InlineCode>disabled</InlineCode> to <InlineCode>true</InlineCode>{" "}
          for a given option .
        </div>
      ),
      demo: (
        <Select
          options={[
            {
              label: "Foo",
              value: "foo",
              disabled: false,
            },
            {
              label: "Bar",
              value: "bar",
              disabled: true,
            },
            {
              label: "Baz",
              value: "baz",
              disabled: false,
            },
          ]}
        />
      ),
      code: `<Select
  options={[
    {
      label: "Foo",
      value: "foo",
      disabled: false,
    },
    {
      label: "Bar",
      value: "bar",
      disabled: true,
    },
    {
      label: "Baz",
      value: "baz",
      disabled: false,
    },
  ]}
/>`,
    },
    {
      title: "Invalid",
      description: (
        <div>
          Set <InlineCode>invalid</InlineCode> to
          <InlineCode>true</InlineCode>.
        </div>
      ),
      demo: (
        <Select
          invalid
          options={[
            {
              label: "Foo",
              value: "foo",
            },
            {
              label: "Bar",
              value: "bar",
            },
            {
              label: "Baz",
              value: "baz",
            },
          ]}
        />
      ),
      code: `<Select
  invalid
  options={[
    {
      label: "Foo",
      value: "foo",
    },
    {
      label: "Bar",
      value: "bar",
    },
    {
      label: "Baz",
      value: "baz",
    },
  ]}
/>`,
    },
    {
      title: "Uncontrolled multiselect",
      description: (
        <div>
          Set <InlineCode>multiple</InlineCode> to
          <InlineCode>true</InlineCode>. If using{" "}
          <InlineCode>defaultValue</InlineCode> pass an array of options.
        </div>
      ),
      demo: (
        <Select
          multiple
          options={[
            {
              label: "Foo",
              value: "foo",
            },
            {
              label: "Bar",
              value: "bar",
            },
            {
              label: "Baz",
              value: "baz",
            },
            {
              label:
                "Some long text here causing the display to show 'n item(s) selected'",
              value: "long",
            },
          ]}
        />
      ),
      code: `<Select
  multiple
  options={[
    {
      label: "Foo",
      value: "foo",
    },
    {
      label: "Bar",
      value: "bar",
    },
    {
      label: "Baz",
      value: "baz",
    },
    {
      label:
        "Some long text here causing the display to show 'n item(s) selected'",
      value: "long",
    },
  ]}
/>`,
    },
    {
      title: "Controlled multiselect",
      description: (
        <div>
          Set <InlineCode>multiple</InlineCode> to
          <InlineCode>true</InlineCode> and pass an array to{" "}
          <InlineCode>value</InlineCode>.
        </div>
      ),
      demo: (
        <Select
          multiple
          value={controlledMultiselectValues}
          onChange={(newValues) => {
            setControlledMultiselectValues(
              newValues as { label: string; value: string }[]
            );
          }}
          options={[
            {
              label: "Foo",
              value: "foo",
            },
            {
              label: "Bar",
              value: "bar",
            },
            {
              label: "Baz",
              value: "baz",
            },
            {
              label:
                "Some long text here causing the display to show 'n item(s) selected'",
              value: "long",
            },
          ]}
        />
      ),
      code: `<Select
  multiple
  value={controlledMultiselectValue}
  onChange={(newValues) => {
    setControlledMultiselectValue(
      newValues as { label: string; value: string }[]
    );
  }}
  options={[
    {
      label: "Foo",
      value: "foo",
    },
    {
      label: "Bar",
      value: "bar",
    },
    {
      label: "Baz",
      value: "baz",
    },
    {
      label:
        "Some long text here causing the display to show 'n item(s) selected'",
      value: "long",
    },
  ]}
/>`,
    },
  ];
  const propsTables = [
    {
      title: null,
      props: [
        {
          name: "options",
          required: true,
          type: "Option[]",
          default: null,
          notes: null,
        },
        {
          name: "name",
          required: false,
          type: "string",
          default: null,
          notes: (
            <div>
              Use if you want to submit as an HTML form. See{" "}
              <Link href="https://headlessui.com/react/listbox#using-with-html-forms">
                Headless UI's docs
              </Link>
              .
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
          name: "disabled",
          required: false,
          type: "boolean",
          default: "false",
          notes: null,
        },
        {
          name: "invalid",
          required: false,
          type: "boolean",
          default: "false",
          notes: null,
        },
        {
          name: "defaultValue",
          required: false,
          type: "Option | Option[]",
          default: null,
          notes: null,
        },
        {
          name: "value",
          required: false,
          type: "Option | Option[]",
          default: null,
          notes: null,
        },
        {
          name: "onChange",
          required: false,
          type: "(newValue: Option | Option[]) => void",
          default: null,
          notes: null,
        },
        {
          name: "multiple",
          required: false,
          type: "boolean",
          default: "false",
          notes: null,
        },
        {
          name: "buttonClassName",
          required: false,
          type: "string",
          default: null,
          notes: (
            <div>
              This will be passed to Headless UI's{" "}
              <Link href="https://headlessui.com/react/listbox#listbox-button">
                <InlineCode>ListboxButton</InlineCode>
              </Link>{" "}
              component.
            </div>
          ),
        },
        {
          name: "optionsClassName",
          required: false,
          type: "string",
          default: null,
          notes: (
            <div>
              This will be passed to Headless UI's{" "}
              <Link href="https://headlessui.com/react/listbox#listbox-options">
                <InlineCode>ListboxOptions</InlineCode>
              </Link>{" "}
              component.
            </div>
          ),
        },
        {
          name: "optionClassName",
          required: false,
          type: "string",
          default: null,
          notes: (
            <div>
              This will be passed to Headless UI's{" "}
              <Link href="https://headlessui.com/react/listbox#listbox-option">
                <InlineCode>ListboxOption</InlineCode>
              </Link>{" "}
              component.
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <ComponentDocsPage
      componentName="Select"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/form/select.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
