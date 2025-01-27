import {
  Alert,
  AlertBody,
  CodeBlock,
  H1,
  H2,
  InlineCode,
  Link,
  Text,
} from "rfui-package";

export default () => {
  return (
    <div className="max-w-prose text-lg">
      <H1>Getting started</H1>
      <Text>
        <p>Here's what you need to get going.</p>
        <Alert isDismissable={false}>
          <AlertBody>
            <Text>
              <p>
                This is a{" "}
                <Link href="https://documentation.divio.com/how-to-guides.html">
                  how-to guide
                </Link>
                , not a{" "}
                <Link href="https://documentation.divio.com/tutorials.html">
                  tutorial
                </Link>
                .
              </p>
            </Text>
          </AlertBody>
        </Alert>
      </Text>

      <H2 inPageLink="install-package">
        {"1)"} Install <InlineCode>rfui-package</InlineCode>
      </H2>
      <Text>
        <p>
          The RFUI library is hosted as an{" "}
          <Link href="https://www.npmjs.com/package/rfui-package">
            NPM package
          </Link>
          .
        </p>
        <CodeBlock code={`npm install rfui-package`} />
      </Text>

      <H2 inPageLink="install-headless-ui">
        {"2)"} Install <InlineCode>@headlessui/react</InlineCode>
      </H2>
      <Text>
        <p>
          The RFUI library has a{" "}
          <Link href="https://docs.npmjs.com/cli/v11/configuring-npm/package-json#peerdependencies">
            peer dependency
          </Link>{" "}
          on{" "}
          <Link href="https://www.npmjs.com/package/@headlessui/react">
            <InlineCode>@headlessui/react</InlineCode>
          </Link>
          .
        </p>
        <CodeBlock code={`npm install @headlessui/react`} />
      </Text>

      <H2 inPageLink="install-heroicons">
        {"3)"} Install <InlineCode>@heroicons/react</InlineCode>
      </H2>
      <Text>
        <p>
          The RFUI library has a{" "}
          <Link href="https://docs.npmjs.com/cli/v11/configuring-npm/package-json#peerdependencies">
            peer dependency
          </Link>{" "}
          on{" "}
          <Link href="https://www.npmjs.com/package/@heroicons/react">
            <InlineCode>@heroicons/react</InlineCode>
          </Link>
          .
        </p>
        <CodeBlock code={`npm install @heroicons/react`} />
        <p>
          Various RFUI components use heroicons so if you end up having a need
          for more icons, to maintain a consistent look and feel, you probably
          will want to use heroicons in your project as well.
        </p>
      </Text>

      <H2 inPageLink="set-up-styles">{"4) Set up styles"}</H2>
      <Text>
        <p>
          RFUI gives you components that use classes like{" "}
          <InlineCode>flex-col</InlineCode>. For example, the{" "}
          <Link href="/components/layout/stack">
            <InlineCode>Stack</InlineCode>
          </Link>{" "}
          component outputs the following HTML:
        </p>
        <CodeBlock language="html" code={`<div class="flex flex-col"></div>`} />
        <p>
          In order for things to look as they're expected to look, you'll need
          to make sure that you have the corresponding CSS:
        </p>
        <CodeBlock
          language="css"
          code={`.flex { display: flex; }
.flex-col { flex-direction: column; }`}
        />
        <p>
          Most of the styles you'll need come from{" "}
          <Link href="https://tailwindcss.com/">Tailwind CSS</Link>. Others come
          from RFUI. The bottom of{" "}
          <Link href="https://github.com/rfui-library/rfui-docs/blob/master/app/app.css">
            this file
          </Link>{" "}
          has the styles that come from RFUI .
        </p>
        <p>
          If you are using Tailwind in your app, make sure that you have a CSS
          file like{" "}
          <Link href="https://github.com/rfui-library/rfui-docs/blob/master/app/app.css">
            this one
          </Link>
          . Note the <InlineCode>@tailwind</InlineCode> directives at the top,
          the <InlineCode>@layer</InlineCode> directive in the middle, and the
          RFUI styles at the bottom. They are all needed. You will also need to
          have:
        </p>
        <CodeBlock code='"./node_modules/rfui-package/dist/**/*.{js,ts}"' />
        <p>
          in your <InlineCode>tailwind.config.ts</InlineCode>'s{" "}
          <InlineCode>content</InlineCode> array so that Tailwind doesn't purge
          the classes that RFUI needs.
        </p>
        <p>
          If you aren't using Tailwind you can use this{" "}
          <Link href="https://github.com/rfui-library/rfui-package/blob/master/rfui.css">
            <InlineCode>rfui.css</InlineCode>
          </Link>{" "}
          file:
        </p>
        <CodeBlock
          language="html"
          code='<link rel="stylesheet" href="https://github.com/rfui-library/rfui-package/blob/master/rfui.css" />'
        />
      </Text>

      <H2 inPageLink="import-rfui-component">
        {"5) Import and use RFUI component"}
      </H2>
      <Text>
        <p>Something like this:</p>
        <CodeBlock
          language="tsx"
          code={`import { Button } from "rfui-package";

<Button>Example</Button>`}
        />
      </Text>

      <H2 inPageLink="decide-on-a-personality">
        {"6) Decide on a personality (recommended)"}
      </H2>
      <Text>
        <p>
          It is usually a good idea to decide upfront on how serious or playful
          you want the tone of your website to be. See "
          <Link href="/choose-a-personality">Choose a personality</Link>".
        </p>
      </Text>
    </div>
  );
};
