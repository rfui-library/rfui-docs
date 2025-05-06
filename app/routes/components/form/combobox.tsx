import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { useState } from "react";
import { CodeBlock, Combobox, InlineCode, Link, Stack } from "rfui-package";

export default () => {
  const overviewNotes = null;
  const options = [
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
  const [controlledValue, setControlledValue] = useState(options[1]);
  const [controlledMultiselectValues, setControlledMultiselectValues] =
    useState([options[1]]);

  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: (
        <Combobox
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
      code: `<Combobox
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
          <InlineCode>Combobox</InlineCode> state. See Headless UI's docs{" "}
          <Link href="https://headlessui.com/react/combobox#using-with-html-forms">
            here
          </Link>
          .
        </div>
      ),
      demo: (
        <Combobox
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
      code: `<Combobox
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
        <Combobox
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
      code: `<Combobox
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
      demo: <Combobox defaultValue={options[1]} options={options} />,
      code: `<Combobox defaultValue={options[1]} options={options} />`,
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
        <Combobox
          value={controlledValue}
          onChange={(newValue) => {
            setControlledValue(newValue);
          }}
          options={options}
        />
      ),
      code: `<Combobox
  value={controlledValue}
  onChange={(newValue) => {
    setControlledValue(newValue);
  }}
  options={options}
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
          <Combobox
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
          <Combobox
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
          <Combobox
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
  <Combobox
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
  <Combobox
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
  <Combobox
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
          <Combobox
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
          <Combobox
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
          <Combobox
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
          <Combobox
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
  <Combobox
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
  <Combobox
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
  <Combobox
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
  <Combobox
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
        <Combobox
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
      code: `<Combobox
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
        <Combobox
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
      code: `<Combobox
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
        <Combobox
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
      code: `<Combobox
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
          Set <InlineCode>multiple</InlineCode> to <InlineCode>true</InlineCode>
          . If using <InlineCode>defaultValue</InlineCode> pass an array of
          options.
        </div>
      ),
      demo: (
        <Combobox
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
      code: `<Combobox
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
          Set <InlineCode>multiple</InlineCode> to <InlineCode>true</InlineCode>{" "}
          and pass an array to <InlineCode>value</InlineCode>.
        </div>
      ),
      demo: (
        <Combobox
          multiple
          value={controlledMultiselectValues}
          onChange={(newValues) => {
            setControlledMultiselectValues(newValues);
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
      code: `<Combobox
  multiple
  value={controlledMultiselectValues}
  onChange={(newValues) => {
    setControlledMultiselectValues(newValues );
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
              <Link href="https://headlessui.com/react/combobox#using-with-html-forms">
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
          name: "inputClassName",
          required: false,
          type: "string",
          default: null,
          notes: (
            <div>
              This will be passed to Headless UI's{" "}
              <Link href="https://headlessui.com/react/combobox#combobox-input">
                <InlineCode>ComboboxInput</InlineCode>
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
              <Link href="https://headlessui.com/react/combobox#combobox-options">
                <InlineCode>ComboboxOptions</InlineCode>
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
              <Link href="https://headlessui.com/react/combobox#combobox-option">
                <InlineCode>ComboboxOption</InlineCode>
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
      componentName="Combobox"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/form/combobox.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
