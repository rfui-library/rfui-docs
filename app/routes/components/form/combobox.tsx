import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { InlineCode, Link, Select } from "rfui-package";

export default () => {
  const overviewNotes = null;
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: (
        <Select
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
      code: `<Select
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
    //     {
    //       title: "Using with HTML forms",
    //       description: (
    //         <div>
    //           If you add the <InlineCode>name</InlineCode> prop, a hidden input
    //           element will be rendered and kept in sync with the
    //           <InlineCode>Select</InlineCode> state. See Headless UI's docs{" "}
    //           <Link href="https://headlessui.com/react/listbox#using-with-html-forms">
    //             here
    //           </Link>
    //           .
    //         </div>
    //       ),
    //       demo: (
    //         <Select
    //           name="name-example"
    //           options={[
    //             {
    //               id: "foo",
    //               value: "foo",
    //               display: "foo",
    //             },
    //             {
    //               id: "bar",
    //               value: "bar",
    //               display: "bar",
    //             },
    //             {
    //               id: "baz",
    //               value: "baz",
    //               display: "baz",
    //             },
    //           ]}
    //         />
    //       ),
    //       code: `<Select
    //   name="name-example"
    //   options={[
    //     {
    //       id: "foo",
    //       value: "foo",
    //       display: "foo",
    //     },
    //     {
    //       id: "bar",
    //       value: "bar",
    //       display: "bar",
    //     },
    //     {
    //       id: "baz",
    //       value: "baz",
    //       display: "baz",
    //     },
    //   ]}
    // />`,
    //     },
    //     {
    //       title: "Empty initial value",
    //       description: (
    //         <div>
    //           <p>
    //             If you want an empty initial value use something like this as the
    //             first option in the <InlineCode>options</InlineCode> array:
    //           </p>
    //           <CodeBlock
    //             className="mt-2"
    //             language="ts"
    //             code={`{
    //   id: "",
    //   value: "",
    //   display: "",
    // }`}
    //           />
    //         </div>
    //       ),
    //       demo: (
    //         <Select
    //           options={[
    //             {
    //               id: "",
    //               value: "",
    //               display: "",
    //             },
    //             {
    //               id: "foo",
    //               value: "foo",
    //               display: "foo",
    //             },
    //             {
    //               id: "bar",
    //               value: "bar",
    //               display: "bar",
    //             },
    //             {
    //               id: "baz",
    //               value: "baz",
    //               display: "baz",
    //             },
    //           ]}
    //         />
    //       ),
    //       code: `<Select
    //   options={[
    //     {
    //       id: "",
    //       value: "",
    //       display: "",
    //     },
    //     {
    //       id: "foo",
    //       value: "foo",
    //       display: "foo",
    //     },
    //     {
    //       id: "bar",
    //       value: "bar",
    //       display: "bar",
    //     },
    //     {
    //       id: "baz",
    //       value: "baz",
    //       display: "baz",
    //     },
    //   ]}
    // />`,
    //     },
    //     {
    //       title: "Handle change",
    //       description: (
    //         <div>
    //           Use the <InlineCode>onChange</InlineCode> prop.
    //         </div>
    //       ),
    //       demo: (
    //         <Select
    //           onChange={(newVal) => {
    //             console.log(newVal);
    //           }}
    //           options={[
    //             {
    //               id: "foo",
    //               value: "foo",
    //               display: "foo",
    //             },
    //             {
    //               id: "bar",
    //               value: "bar",
    //               display: "bar",
    //             },
    //             {
    //               id: "baz",
    //               value: "baz",
    //               display: "baz",
    //             },
    //           ]}
    //         />
    //       ),
    //       code: `<Select
    //   onChange={(newVal) => {
    //     console.log(newVal);
    //   }}
    //   options={[
    //     {
    //       id: "foo",
    //       value: "foo",
    //       display: "foo",
    //     },
    //     {
    //       id: "bar",
    //       value: "bar",
    //       display: "bar",
    //     },
    //     {
    //       id: "baz",
    //       value: "baz",
    //       display: "baz",
    //     },
    //   ]}
    // />`,
    //     },
    //     {
    //       title: "Size",
    //       description: (
    //         <div>
    //           Set <InlineCode>size</InlineCode> to either{" "}
    //           <InlineCode>"sm"</InlineCode>, <InlineCode>"md"</InlineCode> or{" "}
    //           <InlineCode>"lg"</InlineCode>. Defaults to{" "}
    //           <InlineCode>"md"</InlineCode>.
    //         </div>
    //       ),
    //       demo: (
    //         <Stack className="w-fit gap-5">
    //           <Select
    //             size="sm"
    //             options={[
    //               {
    //                 id: "foo",
    //                 value: "foo",
    //                 display: "foo",
    //               },
    //               {
    //                 id: "bar",
    //                 value: "bar",
    //                 display: "bar",
    //               },
    //               {
    //                 id: "baz",
    //                 value: "baz",
    //                 display: "baz",
    //               },
    //             ]}
    //           />
    //           <Select
    //             size="md"
    //             options={[
    //               {
    //                 id: "foo",
    //                 value: "foo",
    //                 display: "foo",
    //               },
    //               {
    //                 id: "bar",
    //                 value: "bar",
    //                 display: "bar",
    //               },
    //               {
    //                 id: "baz",
    //                 value: "baz",
    //                 display: "baz",
    //               },
    //             ]}
    //           />
    //           <Select
    //             size="lg"
    //             options={[
    //               {
    //                 id: "foo",
    //                 value: "foo",
    //                 display: "foo",
    //               },
    //               {
    //                 id: "bar",
    //                 value: "bar",
    //                 display: "bar",
    //               },
    //               {
    //                 id: "baz",
    //                 value: "baz",
    //                 display: "baz",
    //               },
    //             ]}
    //           />
    //         </Stack>
    //       ),
    //       code: `<Stack className="w-fit gap-5">
    //   <Select
    //     size="sm"
    //     options={[
    //       {
    //         id: "foo",
    //         value: "foo",
    //         display: "foo",
    //       },
    //       {
    //         id: "bar",
    //         value: "bar",
    //         display: "bar",
    //       },
    //       {
    //         id: "baz",
    //         value: "baz",
    //         display: "baz",
    //       },
    //     ]}
    //   />
    //   <Select
    //     size="md"
    //     options={[
    //       {
    //         id: "foo",
    //         value: "foo",
    //         display: "foo",
    //       },
    //       {
    //         id: "bar",
    //         value: "bar",
    //         display: "bar",
    //       },
    //       {
    //         id: "baz",
    //         value: "baz",
    //         display: "baz",
    //       },
    //     ]}
    //   />
    //   <Select
    //     size="lg"
    //     options={[
    //       {
    //         id: "foo",
    //         value: "foo",
    //         display: "foo",
    //       },
    //       {
    //         id: "bar",
    //         value: "bar",
    //         display: "bar",
    //       },
    //       {
    //         id: "baz",
    //         value: "baz",
    //         display: "baz",
    //       },
    //     ]}
    //   />
    // </Stack>`,
    //     },
    //     {
    //       title: "Width",
    //       description: (
    //         <div>
    //           To set the width use <InlineCode>buttonClassName</InlineCode> and{" "}
    //           <InlineCode>optionsClassName</InlineCode>.
    //         </div>
    //       ),
    //       demo: (
    //         <Select
    //           buttonClassName="w-[500px]"
    //           optionsClassName="w-[500px]"
    //           options={[
    //             {
    //               id: "foo",
    //               value: "foo",
    //               display: "foo",
    //             },
    //             {
    //               id: "bar",
    //               value: "bar",
    //               display: "bar",
    //             },
    //             {
    //               id: "baz",
    //               value: "baz",
    //               display: "baz",
    //             },
    //           ]}
    //         />
    //       ),
    //       code: `<Select
    //   buttonClassName="w-[500px]"
    //   optionsClassName="w-[500px]"
    //   options={[
    //     {
    //       id: "foo",
    //       value: "foo",
    //       display: "foo",
    //     },
    //     {
    //       id: "bar",
    //       value: "bar",
    //       display: "bar",
    //     },
    //     {
    //       id: "baz",
    //       value: "baz",
    //       display: "baz",
    //     },
    //   ]}
    // />`,
    //     },
    //     {
    //       title: "Rounded",
    //       description: (
    //         <div>
    //           Set <InlineCode>rounded</InlineCode> to either{" "}
    //           <InlineCode>"square"</InlineCode>, <InlineCode>"sm"</InlineCode>,{" "}
    //           <InlineCode>"lg"</InlineCode>, or <InlineCode>"full"</InlineCode>.
    //           Defaults to the value of the CSS variable{" "}
    //           <InlineCode>--default-roundedness</InlineCode>. See{" "}
    //           <Link href="/default-roundedness">"Default roundedness"</Link>.
    //         </div>
    //       ),
    //       demo: (
    //         <Stack className="w-fit gap-5">
    //           <Select
    //             rounded="square"
    //             options={[
    //               {
    //                 id: "foo",
    //                 value: "foo",
    //                 display: "foo",
    //               },
    //               {
    //                 id: "bar",
    //                 value: "bar",
    //                 display: "bar",
    //               },
    //               {
    //                 id: "baz",
    //                 value: "baz",
    //                 display: "baz",
    //               },
    //             ]}
    //           />
    //           <Select
    //             rounded="sm"
    //             options={[
    //               {
    //                 id: "foo",
    //                 value: "foo",
    //                 display: "foo",
    //               },
    //               {
    //                 id: "bar",
    //                 value: "bar",
    //                 display: "bar",
    //               },
    //               {
    //                 id: "baz",
    //                 value: "baz",
    //                 display: "baz",
    //               },
    //             ]}
    //           />
    //           <Select
    //             rounded="lg"
    //             options={[
    //               {
    //                 id: "foo",
    //                 value: "foo",
    //                 display: "foo",
    //               },
    //               {
    //                 id: "bar",
    //                 value: "bar",
    //                 display: "bar",
    //               },
    //               {
    //                 id: "baz",
    //                 value: "baz",
    //                 display: "baz",
    //               },
    //             ]}
    //           />
    //           <Select
    //             rounded="full"
    //             options={[
    //               {
    //                 id: "foo",
    //                 value: "foo",
    //                 display: "foo",
    //               },
    //               {
    //                 id: "bar",
    //                 value: "bar",
    //                 display: "bar",
    //               },
    //               {
    //                 id: "baz",
    //                 value: "baz",
    //                 display: "baz",
    //               },
    //             ]}
    //           />
    //         </Stack>
    //       ),
    //       code: `<Stack className="w-fit gap-5">
    //   <Select
    //     rounded="square"
    //     options={[
    //       {
    //         id: "foo",
    //         value: "foo",
    //         display: "foo",
    //       },
    //       {
    //         id: "bar",
    //         value: "bar",
    //         display: "bar",
    //       },
    //       {
    //         id: "baz",
    //         value: "baz",
    //         display: "baz",
    //       },
    //     ]}
    //   />
    //   <Select
    //     rounded="sm"
    //     options={[
    //       {
    //         id: "foo",
    //         value: "foo",
    //         display: "foo",
    //       },
    //       {
    //         id: "bar",
    //         value: "bar",
    //         display: "bar",
    //       },
    //       {
    //         id: "baz",
    //         value: "baz",
    //         display: "baz",
    //       },
    //     ]}
    //   />
    //   <Select
    //     rounded="lg"
    //     options={[
    //       {
    //         id: "foo",
    //         value: "foo",
    //         display: "foo",
    //       },
    //       {
    //         id: "bar",
    //         value: "bar",
    //         display: "bar",
    //       },
    //       {
    //         id: "baz",
    //         value: "baz",
    //         display: "baz",
    //       },
    //     ]}
    //   />
    //   <Select
    //     rounded="full"
    //     options={[
    //       {
    //         id: "foo",
    //         value: "foo",
    //         display: "foo",
    //       },
    //       {
    //         id: "bar",
    //         value: "bar",
    //         display: "bar",
    //       },
    //       {
    //         id: "baz",
    //         value: "baz",
    //         display: "baz",
    //       },
    //     ]}
    //   />
    // </Stack>`,
    //     },
    //     {
    //       title: "Disabled",
    //       description: (
    //         <div>
    //           Set <InlineCode>disabled</InlineCode> to <InlineCode>true</InlineCode>
    //           .
    //         </div>
    //       ),
    //       demo: (
    //         <Select
    //           disabled
    //           options={[
    //             {
    //               id: "foo",
    //               value: "foo",
    //               display: "foo",
    //             },
    //             {
    //               id: "bar",
    //               value: "bar",
    //               display: "bar",
    //             },
    //             {
    //               id: "baz",
    //               value: "baz",
    //               display: "baz",
    //             },
    //           ]}
    //         />
    //       ),
    //       code: `<Select
    //   disabled
    //   options={[
    //     {
    //       id: "foo",
    //       value: "foo",
    //       display: "foo",
    //     },
    //     {
    //       id: "bar",
    //       value: "bar",
    //       display: "bar",
    //     },
    //     {
    //       id: "baz",
    //       value: "baz",
    //       display: "baz",
    //     },
    //   ]}
    // />`,
    //     },
    //     {
    //       title: "Disabled option",
    //       description: (
    //         <div>
    //           Set <InlineCode>disabled</InlineCode> to <InlineCode>true</InlineCode>{" "}
    //           for a given option .
    //         </div>
    //       ),
    //       demo: (
    //         <Select
    //           options={[
    //             {
    //               id: "foo",
    //               value: "foo",
    //               display: "foo",
    //               disabled: false,
    //             },
    //             {
    //               id: "bar",
    //               value: "bar",
    //               display: "bar",
    //               disabled: true,
    //             },
    //             {
    //               id: "baz",
    //               value: "baz",
    //               display: "baz",
    //               disabled: false,
    //             },
    //           ]}
    //         />
    //       ),
    //       code: `<Select
    //   options={[
    //     {
    //       id: "foo",
    //       value: "foo",
    //       display: "foo",
    //       disabled: false,
    //     },
    //     {
    //       id: "bar",
    //       value: "bar",
    //       display: "bar",
    //       disabled: true,
    //     },
    //     {
    //       id: "baz",
    //       value: "baz",
    //       display: "baz",
    //       disabled: false,
    //     },
    //   ]}
    // />`,
    //     },
    //     {
    //       title: "Invalid",
    //       description: (
    //         <div>
    //           Set <InlineCode>invalid</InlineCode> to
    //           <InlineCode>true</InlineCode>.
    //         </div>
    //       ),
    //       demo: (
    //         <Select
    //           invalid
    //           options={[
    //             {
    //               id: "foo",
    //               value: "foo",
    //               display: "foo",
    //             },
    //             {
    //               id: "bar",
    //               value: "bar",
    //               display: "bar",
    //             },
    //             {
    //               id: "baz",
    //               value: "baz",
    //               display: "baz",
    //             },
    //           ]}
    //         />
    //       ),
    //       code: `<Select
    //   invalid
    //   options={[
    //     {
    //       id: "foo",
    //       value: "foo",
    //       display: "foo",
    //     },
    //     {
    //       id: "bar",
    //       value: "bar",
    //       display: "bar",
    //     },
    //     {
    //       id: "baz",
    //       value: "baz",
    //       display: "baz",
    //     },
    //   ]}
    // />`,
    //     },
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
          name: "onChange",
          required: false,
          type: "(newValue: Option) => void",
          default: null,
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
      componentName="Combobox"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/form/combobox.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
