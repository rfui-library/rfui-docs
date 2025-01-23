import { Alert, Button, Card, CodeBlock, H1, Link, Text } from "rfui-package";

export default () => {
  return (
    <div className="max-w-prose text-lg">
      <H1>About</H1>
      <Text>
        <p>
          RFUI is a component library for React apps. It lets you do stuff like
          this:
        </p>
        <CodeBlock
          language="tsx"
          code={`import { Button } from "rfui-package";

const SubmitButton = () => {
  return (
    <Button variant="secondary" type="submit">
      Submit
    </Button>
  );
};
`}
        />
        <p>And get a nice looking button like this:</p>
        <Card>
          <Button variant="secondary">Submit</Button>
        </Card>
        <p>
          It is available as an{" "}
          <Link href="https://www.npmjs.com/package/rfui-package">
            NPM package
          </Link>
          . Check out the <Link href="/getting-started">Getting Started</Link>{" "}
          page if you'd like to give it a try.
        </p>
        <Alert className="mt-4">
          <Text>
            <p>
              Note: Anyone is welcome to use RFUI. However, consider that it
              isn't battle tested yet (hence being on version 0.x.x instead of
              1.x.x).
            </p>
          </Text>
        </Alert>
      </Text>
    </div>
  );
};
