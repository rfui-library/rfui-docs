import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { CodeBlock, Combobox, InlineCode, Link, Stack } from "rfui-package";

export default () => {
  const overviewNotes = null;
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: (
        <Combobox
          options={[
            {
              id: "foo",
              value: "foo",
              display: "foo",
            },
            {
              id: "bar",
              value: "bar",
              display: "bar",
            },
            {
              id: "baz",
              value: "baz",
              display: "baz",
            },
          ]}
        />
      ),
      code: `<Combobox
  options={[
    {
      id: "foo",
      value: "foo",
      display: "foo",
    },
    {
      id: "bar",
      value: "bar",
      display: "bar",
    },
    {
      id: "baz",
      value: "baz",
      display: "baz",
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
              id: "foo",
              value: "foo",
              display: "foo",
            },
            {
              id: "bar",
              value: "bar",
              display: "bar",
            },
            {
              id: "baz",
              value: "baz",
              display: "baz",
            },
          ]}
        />
      ),
      code: `<Combobox
  name="name-example"
  options={[
    {
      id: "foo",
      value: "foo",
      display: "foo",
    },
    {
      id: "bar",
      value: "bar",
      display: "bar",
    },
    {
      id: "baz",
      value: "baz",
      display: "baz",
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
      id: "",
      value: "",
      display: "",
    }`}
          />
        </div>
      ),
      demo: (
        <Combobox
          options={[
            {
              id: "",
              value: "",
              display: "",
            },
            {
              id: "foo",
              value: "foo",
              display: "foo",
            },
            {
              id: "bar",
              value: "bar",
              display: "bar",
            },
            {
              id: "baz",
              value: "baz",
              display: "baz",
            },
          ]}
        />
      ),
      code: `<Combobox
  options={[
    {
      id: "",
      value: "",
      display: "",
    },
    {
      id: "foo",
      value: "foo",
      display: "foo",
    },
    {
      id: "bar",
      value: "bar",
      display: "bar",
    },
    {
      id: "baz",
      value: "baz",
      display: "baz",
    },
  ]}
/>`,
    },
    {
      title: "Handle change",
      description: (
        <div>
          Use the <InlineCode>onChange</InlineCode> prop.
        </div>
      ),
      demo: (
        <Combobox
          onChange={(newVal) => {
            console.log(newVal);
          }}
          options={[
            {
              id: "foo",
              value: "foo",
              display: "foo",
            },
            {
              id: "bar",
              value: "bar",
              display: "bar",
            },
            {
              id: "baz",
              value: "baz",
              display: "baz",
            },
          ]}
        />
      ),
      code: `<Combobox
  onChange={(newVal) => {
    console.log(newVal);
  }}
  options={[
    {
      id: "foo",
      value: "foo",
      display: "foo",
    },
    {
      id: "bar",
      value: "bar",
      display: "bar",
    },
    {
      id: "baz",
      value: "baz",
      display: "baz",
    },
  ]}
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
                id: "foo",
                value: "foo",
                display: "foo",
              },
              {
                id: "bar",
                value: "bar",
                display: "bar",
              },
              {
                id: "baz",
                value: "baz",
                display: "baz",
              },
            ]}
          />
          <Combobox
            size="md"
            options={[
              {
                id: "foo",
                value: "foo",
                display: "foo",
              },
              {
                id: "bar",
                value: "bar",
                display: "bar",
              },
              {
                id: "baz",
                value: "baz",
                display: "baz",
              },
            ]}
          />
          <Combobox
            size="lg"
            options={[
              {
                id: "foo",
                value: "foo",
                display: "foo",
              },
              {
                id: "bar",
                value: "bar",
                display: "bar",
              },
              {
                id: "baz",
                value: "baz",
                display: "baz",
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
        id: "foo",
        value: "foo",
        display: "foo",
      },
      {
        id: "bar",
        value: "bar",
        display: "bar",
      },
      {
        id: "baz",
        value: "baz",
        display: "baz",
      },
    ]}
  />
  <Combobox
    size="md"
    options={[
      {
        id: "foo",
        value: "foo",
        display: "foo",
      },
      {
        id: "bar",
        value: "bar",
        display: "bar",
      },
      {
        id: "baz",
        value: "baz",
        display: "baz",
      },
    ]}
  />
  <Combobox
    size="lg"
    options={[
      {
        id: "foo",
        value: "foo",
        display: "foo",
      },
      {
        id: "bar",
        value: "bar",
        display: "bar",
      },
      {
        id: "baz",
        value: "baz",
        display: "baz",
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
                id: "foo",
                value: "foo",
                display: "foo",
              },
              {
                id: "bar",
                value: "bar",
                display: "bar",
              },
              {
                id: "baz",
                value: "baz",
                display: "baz",
              },
            ]}
          />
          <Combobox
            rounded="sm"
            options={[
              {
                id: "foo",
                value: "foo",
                display: "foo",
              },
              {
                id: "bar",
                value: "bar",
                display: "bar",
              },
              {
                id: "baz",
                value: "baz",
                display: "baz",
              },
            ]}
          />
          <Combobox
            rounded="lg"
            options={[
              {
                id: "foo",
                value: "foo",
                display: "foo",
              },
              {
                id: "bar",
                value: "bar",
                display: "bar",
              },
              {
                id: "baz",
                value: "baz",
                display: "baz",
              },
            ]}
          />
          <Combobox
            rounded="full"
            options={[
              {
                id: "foo",
                value: "foo",
                display: "foo",
              },
              {
                id: "bar",
                value: "bar",
                display: "bar",
              },
              {
                id: "baz",
                value: "baz",
                display: "baz",
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
        id: "foo",
        value: "foo",
        display: "foo",
      },
      {
        id: "bar",
        value: "bar",
        display: "bar",
      },
      {
        id: "baz",
        value: "baz",
        display: "baz",
      },
    ]}
  />
  <Combobox
    rounded="sm"
    options={[
      {
        id: "foo",
        value: "foo",
        display: "foo",
      },
      {
        id: "bar",
        value: "bar",
        display: "bar",
      },
      {
        id: "baz",
        value: "baz",
        display: "baz",
      },
    ]}
  />
  <Combobox
    rounded="lg"
    options={[
      {
        id: "foo",
        value: "foo",
        display: "foo",
      },
      {
        id: "bar",
        value: "bar",
        display: "bar",
      },
      {
        id: "baz",
        value: "baz",
        display: "baz",
      },
    ]}
  />
  <Combobox
    rounded="full"
    options={[
      {
        id: "foo",
        value: "foo",
        display: "foo",
      },
      {
        id: "bar",
        value: "bar",
        display: "bar",
      },
      {
        id: "baz",
        value: "baz",
        display: "baz",
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
              id: "foo",
              value: "foo",
              display: "foo",
            },
            {
              id: "bar",
              value: "bar",
              display: "bar",
            },
            {
              id: "baz",
              value: "baz",
              display: "baz",
            },
          ]}
        />
      ),
      code: `<Combobox
  disabled
  options={[
    {
      id: "foo",
      value: "foo",
      display: "foo",
    },
    {
      id: "bar",
      value: "bar",
      display: "bar",
    },
    {
      id: "baz",
      value: "baz",
      display: "baz",
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
              id: "foo",
              value: "foo",
              display: "foo",
              disabled: false,
            },
            {
              id: "bar",
              value: "bar",
              display: "bar",
              disabled: true,
            },
            {
              id: "baz",
              value: "baz",
              display: "baz",
              disabled: false,
            },
          ]}
        />
      ),
      code: `<Combobox
  options={[
    {
      id: "foo",
      value: "foo",
      display: "foo",
      disabled: false,
    },
    {
      id: "bar",
      value: "bar",
      display: "bar",
      disabled: true,
    },
    {
      id: "baz",
      value: "baz",
      display: "baz",
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
              id: "foo",
              value: "foo",
              display: "foo",
            },
            {
              id: "bar",
              value: "bar",
              display: "bar",
            },
            {
              id: "baz",
              value: "baz",
              display: "baz",
            },
          ]}
        />
      ),
      code: `<Combobox
  invalid
  options={[
    {
      id: "foo",
      value: "foo",
      display: "foo",
    },
    {
      id: "bar",
      value: "bar",
      display: "bar",
    },
    {
      id: "baz",
      value: "baz",
      display: "baz",
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
          type: '{ id: string; display: string; value: ComponentProps<"option">["value"]; disabled?: boolean; }[]',
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
          name: "onChange",
          required: false,
          type: "(newValue: Option) => void",
          default: null,
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
