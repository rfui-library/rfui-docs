import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import {
  CodeBlock,
  InlineCode,
  Link,
  OL,
  PasswordInput,
  Stack,
  UL,
} from "rfui-package";

export default () => {
  const overviewNotes = (
    <Stack className="gap-3">
      <div>
        The <InlineCode>PasswordInput</InlineCode> component provides a button
        that toggles whether the password is visible. The ability to see your
        password in plain text as you're typing{" "}
        <Link href="https://www.nngroup.com/articles/stop-password-masking">
          often
        </Link>{" "}
        <Link href="https://www.lukew.com/ff/entry.asp?1653">improves</Link>{" "}
        <Link href="https://ux.stackexchange.com/q/144503/39046">
          usability
        </Link>
        .
      </div>
      <div>
        Consider using RFUI's{" "}
        <Link href="/components/form/form-field#example-passwordinput">
          <InlineCode>FormField</InlineCode>
        </Link>{" "}
        to wrap it. If not, you'll probably want to use{" "}
        <InlineCode>{`<label>`}</InlineCode> along with{" "}
        <InlineCode>{`PasswordInput`}</InlineCode>.
      </div>
    </Stack>
  );
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: <PasswordInput />,
      code: `<PasswordInput />`,
    },
    {
      title: "Controlled",
      description: (
        <div>
          See{" "}
          <Link href="https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components">
            Controlled & Uncontrolled Components
          </Link>
          . Passing <InlineCode>value</InlineCode> and{" "}
          <InlineCode>onChange</InlineCode> work because of{" "}
          <Link href="/rest-parameters">
            <InlineCode>...rest</InlineCode>
          </Link>
          .
        </div>
      ),
      demo: <PasswordInput />,
      code: `<PasswordInput value={value} onChange={onChange} />`,
    },
    {
      title: "Default visible",
      description: (
        <div>
          <div className="mb-3">
            Set <InlineCode>defaultVisibility</InlineCode> to{" "}
            <InlineCode>"shown"</InlineCode>. Defaults to{" "}
            <InlineCode>"hidden"</InlineCode>.
          </div>
          <div className="mb-2">
            Consider the factors at play here, including:
          </div>
          <OL>
            <li>
              Usability: Seeing * as you type instead of characters like "a" and
              "b" can hurt usability.
            </li>
            <li>
              Actual security: In public places, ***** can prevent malicious
              onlookers from stealing your password.
            </li>
            <li>
              Perceived security: Some users expect to see * as they type their
              password and might question how secure your website is if they see
              their password in plaintext by default instead.
            </li>
          </OL>
          <div className="mb-2 mt-4">Related reading:</div>
          <UL>
            <li>
              <Link href="https://www.nngroup.com/articles/stop-password-masking">
                Stop Password Masking
              </Link>
            </li>
            <li>
              <Link href="https://www.lukew.com/ff/entry.asp?1653">
                Mobile Design Details: Hide/Show Passwords
              </Link>
            </li>
            <li>
              <Link href="https://ux.stackexchange.com/q/144503/39046">
                Is password-unmasking worth the potential security downside?
              </Link>
            </li>
          </UL>
        </div>
      ),
      demo: <PasswordInput defaultVisibility="shown" />,
      code: `<PasswordInput defaultVisibility="shown" />`,
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
          <PasswordInput size="sm" />
          <PasswordInput size="md" />
          <PasswordInput size="lg" />
        </Stack>
      ),
      code: `<Stack className="gap-5">
  <PasswordInput size="sm" />
  <PasswordInput size="md" />
  <PasswordInput size="lg" />
</Stack>`,
    },
    {
      title: "Rounded",
      description: (
        <div>
          Set <InlineCode>rounded</InlineCode> to{" "}
          <InlineCode>"square"</InlineCode>, <InlineCode>"sm"</InlineCode>,{" "}
          <InlineCode>"lg"</InlineCode>, or <InlineCode>"full"</InlineCode>.
          Defaults to the value of the CSS variable{" "}
          <InlineCode>--default-roundedness</InlineCode>. See{" "}
          <Link href="/default-roundedness">"Default roundedness"</Link>.
        </div>
      ),
      demo: (
        <Stack className="gap-5">
          <PasswordInput rounded="square" />
          <PasswordInput rounded="sm" />
          <PasswordInput rounded="lg" />
          <PasswordInput rounded="full" />
        </Stack>
      ),
      code: `<Stack className="gap-5">
  <PasswordInput rounded="square" />
  <PasswordInput rounded="sm" />
  <PasswordInput rounded="lg" />
  <PasswordInput rounded="full" />
</Stack>`,
    },
    {
      title: "Invalid",
      description: (
        <div>
          Set <InlineCode>invalid</InlineCode> to <InlineCode>true</InlineCode>{" "}
          or <InlineCode>false</InlineCode>. Defaults to{" "}
          <InlineCode>false</InlineCode>.
        </div>
      ),
      demo: <PasswordInput invalid />,
      code: `<PasswordInput invalid />`,
    },
  ];
  const propsTables = [
    {
      title: null,
      props: [
        {
          name: "defaultVisibility",
          required: false,
          type: '"hidden" | "shown"',
          default: '"hidden"',
          notes: (
            <div>
              <div className="mb-3">
                Whether the password is displayed with asterisks (like this:
                ******) or in plain text (like this: foobar).
              </div>
              <div className="mb-2">
                Consider the factors at play here, including:
              </div>
              <OL>
                <li>
                  Usability: Seeing * as you type instead of characters like "a"
                  and "b" can hurt usability.
                </li>
                <li>
                  Actual security: In public places, ***** can prevent malicious
                  onlookers from stealing your password.
                </li>
                <li>
                  Perceived security: Some users expect to see * as they type
                  their password and might question how secure your website is
                  if they see their password in plaintext by default instead.
                </li>
              </OL>
              <div className="mb-2 mt-4">Related reading:</div>
              <UL>
                <li>
                  <Link href="https://www.nngroup.com/articles/stop-password-masking">
                    Stop Password Masking
                  </Link>
                </li>
                <li>
                  <Link href="https://www.lukew.com/ff/entry.asp?1653">
                    Mobile Design Details: Hide/Show Passwords
                  </Link>
                </li>
                <li>
                  <Link href="https://ux.stackexchange.com/q/144503/39046">
                    Is password-unmasking worth the potential security downside?
                  </Link>
                </li>
              </UL>
            </div>
          ),
        },
        {
          name: "containerProps",
          required: false,
          type: 'Omit<ComponentProps<"div">, "size">',
          default: null,
          notes: (
            <div>
              <div>
                The structure of <InlineCode>PasswordInput</InlineCode> is
                something like this:
              </div>
              <CodeBlock
                language="tsx"
                code={`<Flex>
  <Input />
  <button></button>
</Flex>`}
              />
              <div className="mb-3 mt-4">
                <InlineCode>containerProps</InlineCode> will get passed to{" "}
                <InlineCode>Flex</InlineCode> like this:
              </div>
              <CodeBlock language="tsx" code={`<Flex {...containerProps}>`} />
            </div>
          ),
        },
        {
          name: "...rest",
          required: false,
          type: `{
  size?: "sm" | "md" | "lg";
  rounded?: "square" | "sm" | "lg" | "full";
  invalid?: boolean;
} & Omit<ComponentProps<"input">, "size">`,
          default: null,
          notes: (
            <div>
              <div>
                The structure of <InlineCode>PasswordInput</InlineCode> is
                something like this:
              </div>
              <CodeBlock
                language="tsx"
                code={`<Flex>
  <Input />
  <button></button>
</Flex>`}
              />
              <div className="mb-3 mt-4">
                <InlineCode>...rest</InlineCode> will get passed to{" "}
                <InlineCode>{"<Input />"}</InlineCode> like this:
              </div>
              <CodeBlock language="tsx" code={`<Input {...rest} />`} />
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <ComponentDocsPage
      componentName="PasswordInput"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/form/password-input.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
