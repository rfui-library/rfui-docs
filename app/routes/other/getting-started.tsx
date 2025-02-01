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
          from RFUI.
        </p>
        <p>
          If you're using Tailwind, below the{" "}
          <InlineCode>@import "tailwindcss";</InlineCode> directive include the
          following:
        </p>
        <CodeBlock
          code={`@import "rfui-package/dist/rfui-tailwind.css";
@source '../node_modules/rfui-package/dist/**/*.{js,ts}';
`}
        />
        <p>
          The first line will include some RFUI styles and theme information.
          The second will make sure that Tailwind doesn't purge styles that RFUI
          uses.
        </p>
        <p>
          If you're not using Tailwind add the following to your CSS file to
          import the RFUI styles:
        </p>
        <CodeBlock code='@import "rfui-package/dist/rfui.css";' />
        <p>
          You can also see that <InlineCode>rfui.css</InlineCode> file on GitHub{" "}
          <Link href="https://github.com/rfui-library/rfui-package/blob/master/src/rfui.css">
            here
          </Link>
          .
        </p>
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
