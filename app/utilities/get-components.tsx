import {
  Alert,
  Badge,
  Blockquote,
  Button,
  Card,
  Checkbox,
  CodeBlock,
  Flex,
  FormField,
  H1,
  H2,
  HelpTooltip,
  Highlight,
  InfoTooltip,
  InlineCode,
  Input,
  OL,
  PasswordInput,
  Progress,
  RadioButton,
  Select,
  Stack,
  Stepper,
  Switch,
  Table,
  Tabs,
  TabSection,
  Text,
  Textarea,
  UL,
} from "rfui";

export const getComponents = () => ({
  typography: [
    {
      name: "Blockquote",
      href: "/components/typography/blockquote",
      demo: <Blockquote>All models are wrong. Some are useful.</Blockquote>,
    },
    {
      name: "CodeBlock",
      href: "/components/typography/code-block",
      demo: <CodeBlock code={`const n = 1;`} />,
    },
    {
      name: "H1",
      href: "/components/typography/h1",
      demo: <H1>Main heading</H1>,
    },
    {
      name: "H2",
      href: "/components/typography/h2",
      demo: <H2>Subheading</H2>,
    },
    {
      name: "Highlight",
      href: "/components/typography/highlight",
      demo: (
        <div>
          The <Highlight className="!bg-neutral-100">map</Highlight> is not the
          territory.
        </div>
      ),
    },
    {
      name: "InlineCode",
      href: "/components/typography/inline-code",
      demo: (
        <div>
          Prefer using <InlineCode>const</InlineCode> over{" "}
          <InlineCode>let</InlineCode>.
        </div>
      ),
    },
    {
      name: "OL",
      href: "/components/typography/ol",
      demo: (
        <OL>
          <li>Gold</li>
          <li>Silver</li>
          <li>Bronze</li>
        </OL>
      ),
    },
    {
      name: "Text",
      href: "/components/typography/text",
      demo: (
        <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Text>
      ),
    },
    {
      name: "UL",
      href: "/components/typography/ul",
      demo: (
        <UL>
          <li>Milk</li>
          <li>Bread</li>
          <li>Eggs</li>
        </UL>
      ),
    },
  ],
  form: [
    {
      name: "Button",
      href: "/components/form/button",
      demo: (
        <Button className="!border-neutral-900 !text-neutral-900">
          Submit
        </Button>
      ),
    },
    {
      name: "Checkbox",
      href: "/components/form/checkbox",
      demo: <Checkbox />,
    },
    // {
    //   name: "CheckboxCardGroup",
    //   href: "/components/form/checkbox-card-group",
    //   demo: (
    //     <CheckboxCardGroup padding="sm">
    //       <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
    //       <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
    //     </CheckboxCardGroup>
    //   ),
    // },
    {
      name: "FormField",
      href: "/components/form/form-field",
      demo: (
        <FormField
          label="Email"
          inputRest={{ className: "bg-neutral-50/20" }}
        />
      ),
    },
    {
      name: "Input",
      href: "/components/form/input",
      demo: <Input className="bg-neutral-50/20" />,
    },
    {
      name: "PasswordInput",
      href: "/components/form/password-input",
      demo: <PasswordInput className="bg-neutral-50/20" />,
    },
    {
      name: "RadioButton",
      href: "/components/form/radio-button",
      demo: <RadioButton />,
    },
    // {
    //   name: "RadioButtonCardGroup",
    //   href: "/components/form/radio-button-card-group",
    //   demo: (
    //     <RadioButtonCardGroup padding="sm">
    //       <RadioButtonCardGroupItem name="one" selectedItemName={signal}>
    //         One
    //       </RadioButtonCardGroupItem>
    //       <RadioButtonCardGroupItem name="two" selectedItemName={signal}>
    //         Two
    //       </RadioButtonCardGroupItem>
    //     </RadioButtonCardGroup>
    //   ),
    // },
    // {
    //   name: "RadioButtonGroup",
    //   href: "/components/form/radio-button-group",
    //   demo: (
    //     <RadioButtonGroup name="example">
    //       <RadioButtonGroupItem value="one">One</RadioButtonGroupItem>
    //       <RadioButtonGroupItem value="two">Two</RadioButtonGroupItem>
    //     </RadioButtonGroup>
    //   ),
    // },
    {
      name: "Select",
      href: "/components/form/select",
      demo: (
        <Select className="bg-neutral-50/20">
          <option value="united-states">United States</option>
        </Select>
      ),
    },
    {
      name: "Stepper",
      href: "/components/form/stepper",
      demo: <Stepper size="sm" />,
    },
    { name: "Switch", href: "/components/form/switch", demo: <Switch /> },
    {
      name: "Textarea",
      href: "/components/form/textarea",
      demo: <Textarea className="w-5/6 bg-neutral-50/20"></Textarea>,
    },
  ],
  dataDisplay: [
    {
      name: "Badge",
      href: "/components/data-display/badge",
      demo: <Badge size="lg">new</Badge>,
    },
    {
      name: "Card",
      href: "/components/data-display/card",
      demo: <Card>Example</Card>,
    },
    {
      name: "Table",
      href: "/components/data-display/table",
      demo: (
        <Table>
          <thead>
            <tr>
              <th>name</th>
              <th>age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alice</td>
              <td>19</td>
            </tr>
          </tbody>
        </Table>
      ),
    },
  ],
  navigation: [
    {
      name: "Breadcrumbs",
      href: "/components/navigation/breadcrumbs",
      demo: <InlineCode>{"<Breadcrumbs>"}</InlineCode>,
    },
    {
      name: "Footer",
      href: "/components/navigation/footer",
      demo: <InlineCode>{"<Footer>"}</InlineCode>,
    },
    {
      name: "Link",
      href: "/components/navigation/link",
      demo: (
        <div className="cursor-pointer text-lg text-neutral-700 underline underline-offset-2">
          GitHub
        </div>
      ),
    },
    {
      name: "Navbar",
      href: "/components/navigation/navbar",
      demo: <InlineCode>{"<Navbar>"}</InlineCode>,
    },
    {
      name: "NavigationLinks",
      href: "/components/navigation/navigation-links",
      demo: <InlineCode>{"<NavigationLinks>"}</InlineCode>,
    },
    {
      name: "Tabs",
      href: "/components/navigation/tabs",
      demo: (
        <Tabs>
          <TabSection tabName="First">Content</TabSection>
          <TabSection tabName="Second">Content</TabSection>
        </Tabs>
      ),
    },
    {
      name: "VerticalNavbar",
      href: "/components/navigation/vertical-navbar",
      demo: <InlineCode>{"<VerticalNavbar>"}</InlineCode>,
    },
  ],
  feedback: [
    {
      name: "Alert",
      href: "/components/feedback/alert",
      demo: <Alert isDismissable={false}>Done</Alert>,
    },
    {
      name: "Progress",
      href: "/components/feedback/progress",
      demo: <Progress value={40} className="w-full" />,
    },
  ],
  overlays: [
    {
      name: "HelpTooltip",
      href: "/components/overlays/help-tooltip",
      demo: <HelpTooltip content="Example" size="lg" />,
    },
    {
      name: "InfoTooltip",
      href: "/components/overlays/info-tooltip",
      demo: <InfoTooltip content="Example" size="lg" />,
    },
    {
      name: "Modal",
      href: "/components/overlays/modal",
      demo: <InlineCode>{"<Modal>"}</InlineCode>,
    },
    {
      name: "Popover",
      href: "/components/overlays/popover",
      demo: <InlineCode>{"<Popover>"}</InlineCode>,
    },
    {
      name: "Tooltip",
      href: "/components/overlays/tooltip",
      demo: <div className="underline decoration-dashed">Hover me</div>,
    },
  ],
  layout: [
    {
      name: "Container",
      href: "/components/layout/container",
      demo: <div className="h-2/3 w-full rounded bg-neutral-100/50"></div>,
    },
    {
      name: "Flex",
      href: "/components/layout/flex",
      demo: (
        <Flex className="h-2/3 w-full items-stretch justify-between gap-3">
          <div className="w-10 rounded bg-neutral-100/50 p-2"></div>
          <div className="w-10 rounded bg-neutral-100/50 p-2"></div>
          <div className="w-10 rounded bg-neutral-100/50 p-2"></div>
        </Flex>
      ),
    },
    {
      name: "Stack",
      href: "/components/layout/stack",
      demo: (
        <Stack className="w-full items-stretch gap-3">
          <div className="h-6 rounded bg-neutral-100/50 p-2"></div>
          <div className="h-6 rounded bg-neutral-100/50 p-2"></div>
          <div className="h-6 rounded bg-neutral-100/50 p-2"></div>
        </Stack>
      ),
    },
  ],
});
