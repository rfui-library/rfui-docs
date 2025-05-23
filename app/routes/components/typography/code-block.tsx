import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { CodeBlock, InlineCode, Link } from "rfui-package";

export default () => {
  const overviewNotes = null;
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: <CodeBlock code={`console.log("Hello world");`} />,
      code: `<CodeBlock code={\`console.log("Hello world");\`} />`,
    },
    {
      title: "Whitespace",
      description: (
        <div>
          Preserving whitespace and line breaks is a little tricky. In short,
          just try to follow the example below and make sure you use a{" "}
          <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals">
            template string
          </Link>{" "}
          instead of a normal string.
        </div>
      ),
      demo: (
        <CodeBlock
          language="ts"
          code={`function sayHello() {
  console.log("Hello world");
}`}
        />
      ),
      code: `<CodeBlock
  language="ts"
  code={\`function sayHello() {
  console.log("Hello world");
}\`}
/>`,
    },
    {
      title: "Language",
      description: (
        <div>
          For possible values see{" "}
          <Link href="https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_LANGUAGES_PRISM.MD">
            this list
          </Link>
          .
        </div>
      ),
      demo: (
        <CodeBlock
          language="ts"
          code={`const firstName = 'John';
const lastName = 'Doe';
const fullName = firstName + " " + lastName;`}
        />
      ),
      code: `<CodeBlock
 language="ts"
 code={\`const firstName = 'John';
const lastName = 'Doe';
const fullName = firstName + " " + lastName;\`}
/>`,
    },
  ];
  const propsTables = [
    {
      title: null,
      props: [
        {
          name: "code",
          required: true,
          type: "string",
          default: null,
          notes: (
            <div>
              Preserving whitespace and line breaks is a little tricky. In
              short, just try to follow the example{" "}
              <Link href="#whitespace">here</Link> and make sure you use a{" "}
              <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals">
                template string
              </Link>{" "}
              instead of a normal string.
            </div>
          ),
        },
        {
          name: "language",
          required: false,
          type: "string",
          default: null,
          notes: (
            <div>
              For possible values see{" "}
              <Link href="https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_LANGUAGES_PRISM.MD">
                this list
              </Link>
              .
            </div>
          ),
        },
        {
          name: "...rest",
          required: false,
          type: 'ComponentProps<"pre">',
          default: null,
          notes: (
            <div>
              <div className="leading-relaxed">
                See the docs for{" "}
                <Link href="/rest-parameters">rest parameters</Link>. For{" "}
                <InlineCode>CodeBlock</InlineCode>, you could pass anything you
                normally would pass to <InlineCode>{"<pre>"}</InlineCode>{" "}
                because the return value{" "}
                <Link href="https://github.com/rfui-library/rfui-package/tree/master/src/typography/code-block.tsx">
                  looks something like
                </Link>{" "}
                this:
              </div>
              <CodeBlock
                language="tsx"
                code={`<pre className={className} {...restWithoutClass}><code>{code}</code></pre>`}
              />
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <ComponentDocsPage
      componentName="CodeBlock"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/typography/code-block.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
