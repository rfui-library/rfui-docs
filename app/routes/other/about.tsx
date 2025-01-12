import { Alert, Button, Card, CodeBlock, H1, Link, Text } from "rfui";

export default () => {
  return (
    <div className="max-w-prose text-lg">
      <H1>About</H1>
      <Text>
        <p>
          RFUI is a component library for Preact (not React) apps. It lets you
          do stuff like this:
        </p>
        <CodeBlock
          language="tsx"
          code={`import { Button } from "rfui";

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
          It is available as a{" "}
          <Link href="https://deno.land/x">Deno Third Party Module</Link>. Check
          out the <Link href="/getting-started">Getting Started</Link> if you'd
          like to give it a try.
        </p>
        <Alert className="mt-4">
          <Text>
            <p>
              Note: Anyone is welcome to use RFUI. However, consider that I am
              my own target audience for this project and I am not looking to
              support others.
            </p>
            <p>
              It probably will always remain this way, but it's possible that I
              look to target a wider, public audience in the future.
            </p>
          </Text>
        </Alert>
      </Text>
    </div>
  );
};
