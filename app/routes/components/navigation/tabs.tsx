import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import { InlineCode, Tabs, TabSection } from "rfui-package";

export default () => {
  const overviewNotes = null;
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: (
        <Tabs>
          <TabSection tabName="First">Content for first tab</TabSection>
          <TabSection tabName="Second">Content for second tab</TabSection>
          <TabSection tabName="Third">Content for third tab</TabSection>
        </Tabs>
      ),
      code: `<Tabs>
  <TabSection tabName="First">Content for first tab</TabSection>
  <TabSection tabName="Second">Content for second tab</TabSection>
  <TabSection tabName="Third">Content for third tab</TabSection>
</Tabs>`,
    },
    {
      title: "Full width",
      description: (
        <div>
          Set <InlineCode>fullWidth</InlineCode> to{" "}
          <InlineCode>true</InlineCode>. Defaults to{" "}
          <InlineCode>false</InlineCode>.
        </div>
      ),
      demo: (
        <Tabs fullWidth>
          <TabSection tabName="First">Content for first tab</TabSection>
          <TabSection tabName="Second">Content for second tab</TabSection>
          <TabSection tabName="Third">Content for third tab</TabSection>
        </Tabs>
      ),
      code: `<Tabs fullWidth>
  <TabSection tabName="First">Content for first tab</TabSection>
  <TabSection tabName="Second">Content for second tab</TabSection>
  <TabSection tabName="Third">Content for third tab</TabSection>
</Tabs>`,
    },
    {
      title: "Initial active tab",
      description: (
        <div>
          Set <InlineCode>initialActiveTabName</InlineCode> to the{" "}
          <InlineCode>tabName</InlineCode> of the{" "}
          <InlineCode>TabSection</InlineCode> that you want to display when the
          component loads.
        </div>
      ),
      demo: (
        <Tabs initialActiveTabName="Second">
          <TabSection tabName="First">Content for first tab</TabSection>
          <TabSection tabName="Second">Content for second tab</TabSection>
          <TabSection tabName="Third">Content for third tab</TabSection>
        </Tabs>
      ),
      code: `<Tabs initialActiveTabName="Second">
  <TabSection tabName="First">Content for first tab</TabSection>
  <TabSection tabName="Second">Content for second tab</TabSection>
  <TabSection tabName="Third">Content for third tab</TabSection>
</Tabs>`,
    },
    {
      title: "As links",
      demo: (
        <Tabs>
          <TabSection tabName="First" href="/first">
            Content for first tab
          </TabSection>
          <TabSection tabName="Second" href="/second">
            Content for second tab
          </TabSection>
          <TabSection tabName="Third" href="/third">
            Content for third tab
          </TabSection>
        </Tabs>
      ),
      code: `<Tabs>
  <TabSection tabName="First" href="/first">
    Content for first tab
  </TabSection>
  <TabSection tabName="Second" href="/second">
    Content for second tab
  </TabSection>
  <TabSection tabName="Third" href="/third">
    Content for third tab
  </TabSection>
</Tabs>`,
    },
  ];
  const propsTables = [
    {
      title: null,
      props: [
        {
          name: "fullWidth",
          required: false,
          type: "boolean",
          default: "false",
          notes: null,
        },
        {
          name: "initialActiveTabName",
          required: false,
          type: "string",
          default: null,
          notes: null,
        },
        {
          name: "children",
          required: true,
          type: "ComponentChild",
          default: null,
          notes: null,
        },
      ],
    },
    {
      title: "TabSection",
      props: [
        {
          name: "tabName",
          required: true,
          type: "string",
          default: null,
          notes: null,
        },
        {
          name: "href",
          required: false,
          type: "string",
          default: null,
          notes: null,
        },
        {
          name: "children",
          required: true,
          type: "ComponentChild",
          default: null,
          notes: null,
        },
      ],
    },
  ];

  return (
    <ComponentDocsPage
      componentName="Tabs"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/navigation/tabs.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
