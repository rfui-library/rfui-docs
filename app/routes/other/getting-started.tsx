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

      <H2 inPageLink="install-package">{"1) Install package"}</H2>
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

      <H2 inPageLink="include-rfui-stylesheet">
        {"2) Include RFUI stylesheet"}
      </H2>
      <Text>
        <p>Something like this:</p>
        <CodeBlock
          language="tsx"
          code={`<link rel="stylesheet" href="https://rfui.deno.dev/rfui.css" />`}
        />
        <p>
          See the <Link href="/stylesheet">Stylesheet</Link> page for more
          information.
        </p>
      </Text>

      <H2 inPageLink="import-rfui-component">
        {"3) Import and use RFUI component"}
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
        {"4) Decide on a personality (recommended)"}
      </H2>
      <Text>
        <p>
          It is usually a good idea to decide upfront on how serious or playful
          you want the tone of your website to be. See "
          <Link href="/choose-a-personality">Choose a personality</Link>".
        </p>
      </Text>

      <H2 inPageLink="use-heroicons">{"5) Use heroicons (recommended)"}</H2>
      <Text>
        <p>
          Various RFUI components use{" "}
          <Link href="https://heroicons.com/">heroicons</Link>. If you end up
          having a need for more icons, to maintain a consistent look and feel,
          you probably will want to use heroicons in your project as well.
        </p>
      </Text>

      <H2 inPageLink="customize-css-variables">
        {"6) Customize CSS variables (optional)"}
      </H2>
      <Text>
        <p>
          In your project's eg. <InlineCode>app.css</InlineCode> file do
          something like this to override the{" "}
          <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties">
            CSS variables
          </Link>{" "}
          that were defined in RFUI's stylesheet that you set up in{" "}
          <Link href="#include-rfui-stylesheet">step two</Link>.
        </p>
        <CodeBlock
          language="css"
          code={`:root {
  --default-roundedness: var(--rounded-lg);
}`}
        />
        <p>
          See the <Link href="/css-variables">"CSS variables" page</Link> for
          more information.
        </p>
      </Text>
    </div>
  );
};
