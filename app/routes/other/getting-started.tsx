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

      <H2 inPageLink="install-package">
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
          </Link>{" "}
          so you will need to install that as well.
        </p>
        <CodeBlock code={`npm install @headlessui/react`} />
      </Text>

      <H2 inPageLink="set-up-styles">{"3) Set up styles"}</H2>
      <Text>
        <p>
          RFUI gives you components that use classes like{" "}
          <InlineCode>w-full</InlineCode>. But in order for things to look as
          they're expected to look, you'll need to make sure that you have the
          corresponding CSS:
        </p>
        <CodeBlock language="css" code={`.w-full { width: 100% }`} />
        <p>
          Right now RFUI is intended to be used by apps that use{" "}
          <Link href="https://tailwindcss.com/">Tailwind CSS</Link>. Make sure
          that you have a CSS file like{" "}
          <Link href="https://github.com/rfui-library/rfui-docs/blob/master/app/app.css">
            this one
          </Link>{" "}
          and that you have:
        </p>
        <CodeBlock code='"./node_modules/rfui-package/dist/**/*.{js,jsx,ts,tsx}"' />
        <p>
          In your <InlineCode>tailwind.config.ts</InlineCode>'s{" "}
          <InlineCode>content</InlineCode> array so that Tailwind doesn't purge
          the classes that RFUI needs.
        </p>
      </Text>

      <H2 inPageLink="import-rfui-component">
        {"4) Import and use RFUI component"}
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
        {"5) Decide on a personality (recommended)"}
      </H2>
      <Text>
        <p>
          It is usually a good idea to decide upfront on how serious or playful
          you want the tone of your website to be. See "
          <Link href="/choose-a-personality">Choose a personality</Link>".
        </p>
      </Text>

      <H2 inPageLink="use-heroicons">{"6) Use heroicons (recommended)"}</H2>
      <Text>
        <p>
          Various RFUI components use{" "}
          <Link href="https://heroicons.com/">heroicons</Link>. If you end up
          having a need for more icons, to maintain a consistent look and feel,
          you probably will want to use heroicons in your project as well.
        </p>
      </Text>
    </div>
  );
};
