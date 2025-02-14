import {
  ComponentDocsPage,
  type ExampleType,
} from "@/components/component-docs-page/index";
import {
  Button,
  CodeBlock,
  InlineCode,
  Link,
  Navbar,
  NavbarDropdown,
  NavbarDropdownItem,
  NavbarItem,
  NavbarLeft,
  NavbarMegamenu,
  NavbarRight,
  Stack,
} from "rfui-package";

export default () => {
  const overviewNotes = (
    <Stack className="gap-3">
      <p>
        Note: Based on{" "}
        <Link href="https://www.nngroup.com/articles/find-navigation-mobile-even-hamburger/">
          this advice
        </Link>{" "}
        from Nielsen Norman Group, on narrow viewports (eg. mobile devices) a
        hamburger menu will be used if there are more than four nav items and a
        stacked list (no hamburger menu) will be used if there are four or less
        nav items.
      </p>
      <p>
        Note: In the examples below the horizontal padding is a little off. This
        won't happen in practice though if you do something like this:
      </p>
      <CodeBlock
        language="tsx"
        code={`export default () => {
  return (
    <>
      <Navbar />
      <Container size="xl">
        {children}
      </Container>
      <Footer />
    </>
  );
}
`}
      />
    </Stack>
  );
  const examples: ExampleType[] = [
    {
      title: "Basic",
      demo: (
        <Navbar size="xl">
          <NavbarLeft>
            <NavbarItem href="https://one.com">One</NavbarItem>
            <NavbarItem href="https://two.com">Two</NavbarItem>
          </NavbarLeft>
        </Navbar>
      ),
      code: `<Navbar size="xl">
  <NavbarLeft>
    <NavbarItem href="https://one.com">One</NavbarItem>
    <NavbarItem href="https://two.com">Two</NavbarItem>
  </NavbarLeft>
</Navbar>`,
    },
    {
      title: "NavbarLeft and NavbarRight",
      demo: (
        <Navbar size="xl">
          <NavbarLeft>
            <NavbarItem href="https://one.com">One</NavbarItem>
            <NavbarItem href="https://two.com">Two</NavbarItem>
          </NavbarLeft>
          <NavbarRight>
            <NavbarItem href="https://three.com">Three</NavbarItem>
            <NavbarItem href="https://four.com">Four</NavbarItem>
          </NavbarRight>
        </Navbar>
      ),
      code: `<Navbar size="xl">
  <NavbarLeft>
    <NavbarItem href="https://one.com">One</NavbarItem>
    <NavbarItem href="https://two.com">Two</NavbarItem>
  </NavbarLeft>
  <NavbarRight>
    <NavbarItem href="https://three.com">Three</NavbarItem>
    <NavbarItem href="https://four.com">Four</NavbarItem>
  </NavbarRight>
</Navbar>`,
    },
    {
      title: "Background",
      description: (
        <div>
          Set <InlineCode>background</InlineCode> to{" "}
          <InlineCode>"neutral"</InlineCode> or <InlineCode>"none"</InlineCode>.
          Defaults to <InlineCode>"neutral"</InlineCode>.
        </div>
      ),
      demo: (
        <Stack className="w-full gap-5">
          <Navbar size="xl" background="neutral">
            <NavbarLeft>
              <NavbarItem href="https://one.com">One</NavbarItem>
              <NavbarItem href="https://two.com">Two</NavbarItem>
            </NavbarLeft>
            <NavbarRight>
              <NavbarItem href="https://three.com">Three</NavbarItem>
              <NavbarItem href="https://four.com">Four</NavbarItem>
            </NavbarRight>
          </Navbar>
          <Navbar size="xl" background="none">
            <NavbarLeft>
              <NavbarItem href="https://one.com">One</NavbarItem>
              <NavbarItem href="https://two.com">Two</NavbarItem>
            </NavbarLeft>
            <NavbarRight>
              <NavbarItem href="https://three.com">Three</NavbarItem>
              <NavbarItem href="https://four.com">Four</NavbarItem>
            </NavbarRight>
          </Navbar>
        </Stack>
      ),
      code: `<Stack className="w-full gap-5">
  <Navbar size="xl" background="neutral">
    <NavbarLeft>
      <NavbarItem href="https://one.com">One</NavbarItem>
      <NavbarItem href="https://two.com">Two</NavbarItem>
    </NavbarLeft>
    <NavbarRight>
      <NavbarItem href="https://three.com">Three</NavbarItem>
      <NavbarItem href="https://four.com">Four</NavbarItem>
    </NavbarRight>
  </Navbar>
  <Navbar size="xl" background="none">
    <NavbarLeft>
      <NavbarItem href="https://one.com">One</NavbarItem>
      <NavbarItem href="https://two.com">Two</NavbarItem>
    </NavbarLeft>
    <NavbarRight>
      <NavbarItem href="https://three.com">Three</NavbarItem>
      <NavbarItem href="https://four.com">Four</NavbarItem>
    </NavbarRight>
  </Navbar>
</Stack>`,
    },
    {
      title: "Clickable non-link",
      description: (
        <div>
          If you pass <InlineCode>onClick</InlineCode> without passing{" "}
          <InlineCode>href</InlineCode> the navbar item will be displayed like a
          link, won't be rendered as an <InlineCode>{"<a>"}</InlineCode> tag,
          and will call <InlineCode>onClick</InlineCode> when clicked.
        </div>
      ),
      demo: (
        <Navbar size="xl">
          <NavbarLeft>
            <NavbarItem href="https://one.com">One</NavbarItem>
            <NavbarItem href="https://two.com">Two</NavbarItem>
            <NavbarItem
              onClick={() => {
                alert("Clicked");
              }}
            >
              Click me
            </NavbarItem>
          </NavbarLeft>
        </Navbar>
      ),
      code: `<Navbar size="xl">
  <NavbarLeft>
    <NavbarItem href="https://one.com">One</NavbarItem>
    <NavbarItem href="https://two.com">Two</NavbarItem>
    <NavbarItem
      onClick={() => {
        alert("Clicked");
      }}
    >
      Click me
    </NavbarItem>
  </NavbarLeft>
</Navbar>`,
    },
    {
      title: "Form button",
      description: (
        <Stack className="gap-3">
          <p>
            If you pass <InlineCode>formProps</InlineCode> without passing{" "}
            <InlineCode>href</InlineCode> the navbar item will be displayed like
            a link and will be rendered as something like:
          </p>
          <CodeBlock
            language="tsx"
            code={`<form {...formProps}>
  <button>{children}</button>
</form>`}
          />
          <p>
            rather than an <InlineCode>{"<a>"}</InlineCode> tag. This is useful
            for things like log out functionality, where it is{" "}
            <Link href="https://stackoverflow.com/a/14587231/1927876">
              generally desirable
            </Link>{" "}
            to use POST instead of GET.
          </p>
        </Stack>
      ),
      demo: (
        <Navbar size="xl">
          <NavbarLeft>
            <NavbarItem href="https://one.com">One</NavbarItem>
            <NavbarItem href="https://two.com">Two</NavbarItem>
            <NavbarItem formProps={{ method: "post" }}>Log out</NavbarItem>
          </NavbarLeft>
        </Navbar>
      ),
      code: `<Navbar size="xl">
  <NavbarLeft>
    <NavbarItem href="https://one.com">One</NavbarItem>
    <NavbarItem href="https://two.com">Two</NavbarItem>
    <NavbarItem formProps={{ method: "post" }}>Log out</NavbarItem>
  </NavbarLeft>
</Navbar>`,
    },
    {
      title: "Custom content",
      description: (
        <div>
          If you omit <InlineCode>href</InlineCode>,{" "}
          <InlineCode>onClick</InlineCode>, and{" "}
          <InlineCode>formProps</InlineCode>, what you pass to{" "}
          <InlineCode>children</InlineCode> will be rendered.
        </div>
      ),
      demo: (
        <Navbar size="xl">
          <NavbarLeft>
            <NavbarItem href="https://one.com">One</NavbarItem>
            <NavbarItem href="https://two.com">Two</NavbarItem>
            <NavbarItem>
              <div>Text</div>
            </NavbarItem>
            <NavbarItem>
              <Button>Button</Button>
            </NavbarItem>
          </NavbarLeft>
        </Navbar>
      ),
      code: `<Navbar size="xl">
  <NavbarLeft>
    <NavbarItem href="https://one.com">One</NavbarItem>
    <NavbarItem href="https://two.com">Two</NavbarItem>
    <NavbarItem>
      <div>Text</div>
    </NavbarItem>
    <NavbarItem>
      <Button>Button</Button>
    </NavbarItem>
  </NavbarLeft>
</Navbar>`,
    },
    {
      title: "Dropdown",
      description: (
        <div>
          Dropdowns work well when there are few menu items. Prefer using a{" "}
          <Link href="https://www.nngroup.com/articles/mega-menus-work-well/">
            megamenu
          </Link>{" "}
          when there are many menu items.
        </div>
      ),
      demo: (
        <Navbar size="xl">
          <NavbarLeft>
            <NavbarItem href="https://one.com">One</NavbarItem>
            <NavbarItem href="https://two.com">Two</NavbarItem>
            <NavbarDropdown title="Dropdown">
              <NavbarDropdownItem href="https://three.com">
                Three
              </NavbarDropdownItem>
              <NavbarDropdownItem href="https://four.com">
                Four
              </NavbarDropdownItem>
            </NavbarDropdown>
          </NavbarLeft>
        </Navbar>
      ),
      code: `<Navbar size="xl">
  <NavbarLeft>
    <NavbarItem href="https://one.com">One</NavbarItem>
    <NavbarItem href="https://two.com">Two</NavbarItem>
    <NavbarDropdown title="Dropdown">
      <NavbarDropdownItem href="https://three.com">
        Three
      </NavbarDropdownItem>
      <NavbarDropdownItem href="https://four.com">
        Four
      </NavbarDropdownItem>
    </NavbarDropdown>
  </NavbarLeft>
</Navbar>`,
    },
    {
      title: "Megamenu",
      description: (
        <Stack className="gap-3">
          <div>
            While{" "}
            <Link href="/components/navigation/navbar#example-dropdown">
              dropdowns
            </Link>{" "}
            work well when there are few menu items, megamenus{" "}
            <Link href="https://www.nngroup.com/articles/mega-menus-work-well/">
              work well
            </Link>{" "}
            when there are many menu items.
          </div>
          <div>
            To control the submenu on desktop views,{" "}
            <InlineCode>desktopRest</InlineCode> will be passed in a manner
            similar to other{" "}
            <Link href="/rest-parameters">rest parameters</Link>. For the mobile
            submenu, use <InlineCode>mobileRest</InlineCode> instead of{" "}
            <InlineCode>desktopRest</InlineCode>.
          </div>
          <div>
            Note: this demo is sorta broken. You need to scroll to the top of
            the page to see the desktop submenu. In practice, if your navbar is
            at the top of the page, you won't have this problem. If you need to
            position the submenu you can set the <InlineCode>left</InlineCode>{" "}
            and <InlineCode>top</InlineCode> css properties.
          </div>
        </Stack>
      ),
      demo: (
        <Navbar size="xl">
          <NavbarLeft>
            <NavbarItem href="https://one.com">One</NavbarItem>
            <NavbarItem href="https://two.com">Two</NavbarItem>
            <NavbarMegamenu
              title="Megamenu"
              desktopSubmenu={{
                className: "left-0 w-full p-6 bg-neutral-900 text-neutral-100",
              }}
              mobileSubmenu={{
                className: "bg-neutral-900 text-neutral-100 p-6",
              }}
            >
              <div>Example</div>
            </NavbarMegamenu>
          </NavbarLeft>
        </Navbar>
      ),
      code: `<Navbar size="xl">
  <NavbarLeft>
    <NavbarItem href="https://one.com">One</NavbarItem>
    <NavbarItem href="https://two.com">Two</NavbarItem>
    <NavbarMegamenu
      title="Megamenu"
      desktopSubmenu={{
        class: "left-0 w-full p-6 bg-neutral-900 text-neutral-100",
      }}
      mobileSubmenu={{
        class: "bg-neutral-900 text-neutral-100 p-6",
      }}
    >
      <div>Example</div>
    </NavbarMegamenu>
  </NavbarLeft>
</Navbar>`,
    },
  ];
  const propsTables = [
    {
      title: null,
      props: [
        {
          name: "size",
          required: false,
          type: '"sm" | "md" | "lg" | "xl"',
          default: '"md"',
          notes: (
            <div>
              Set this to the same value as the{" "}
              <Link href="/helpers/container">
                <InlineCode>Container</InlineCode>
              </Link>
              .
            </div>
          ),
        },
        {
          name: "background",
          required: false,
          type: '"neutral" | "none"',
          default: '"neutral"',
          notes: null,
        },
        {
          name: "sticky",
          required: false,
          type: "boolean",
          default: "false",
          notes:
            "Doesn't apply to the stacked UI that appears on small viewports.",
        },
        {
          name: "children",
          required: true,
          type: "ComponentChild",
          default: null,
          notes: null,
        },
        {
          name: "...rest",
          required: false,
          type: 'Omit<ComponentProps<"nav">, "size">',
          default: null,
          notes: (
            <div>
              <div className="leading-relaxed">
                See the docs for{" "}
                <Link href="/rest-parameters">rest parameters</Link>. For{" "}
                <InlineCode>Navbar</InlineCode>, you could pass anything you
                normally would pass to <InlineCode>{"<nav>"}</InlineCode>{" "}
                because the return value{" "}
                <Link href="https://github.com/rfui-library/rfui-package/tree/master/src/navigation/navbar.tsx">
                  looks something like
                </Link>{" "}
                this:
              </div>
              <CodeBlock
                language="tsx"
                code={`<nav className={containerClass} {...restWithoutClass}>
  ...
</nav>`}
              />
            </div>
          ),
        },
      ],
    },
    {
      title: "NavbarLeft",
      props: [
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
      title: "NavbarRight",
      props: [
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
      title: "NavbarItem",
      props: [
        {
          name: "href",
          required: false,
          type: "string",
          default: null,
          notes: null,
        },
        {
          name: "isActive",
          required: false,
          type: "boolean",
          default: "false",
          notes: null,
        },
        {
          name: "onClick",
          required: false,
          type: "() => void",
          default: null,
          notes: null,
        },
        {
          name: "formProps",
          required: false,
          type: 'ComponentProps<"form">',
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
        {
          name: "...rest",
          required: false,
          type: 'ComponentProps<"li">',
          default: null,
          notes: null,
        },
      ],
    },
    {
      title: "NavbarDropdown",
      props: [
        {
          name: "title",
          required: true,
          type: "string",
          default: null,
          notes: null,
        },
        {
          name: "children",
          required: true,
          type: "ComponentChild",
          default: null,
          notes: (
            <div>
              The <InlineCode>children</InlineCode> should consist of{" "}
              <InlineCode>NavbarDropdownItem</InlineCode> elements.
            </div>
          ),
        },
        {
          name: "...rest",
          required: false,
          type: 'ComponentProps<"li">',
          default: null,
          notes: null,
        },
      ],
    },
    {
      title: "NavbarDropdownItem",
      props: [
        {
          name: "href",
          required: true,
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
      title: "NavbarMegamenu",
      props: [
        {
          name: "title",
          required: true,
          type: "string",
          default: null,
          notes: null,
        },
        {
          name: "children",
          required: true,
          type: "ComponentChild",
          default: null,
          notes: (
            <div>
              The <InlineCode>children</InlineCode> should consist of{" "}
              <InlineCode>NavbarDropdownItem</InlineCode> elements.
            </div>
          ),
        },
        {
          name: "desktopSubmenu",
          required: false,
          type: 'ComponentProps<"div">',
          default: null,
          notes: (
            <div>
              This will be passed to the desktop submenu in a manner similar to
              other <Link href="/rest-parameters">rest parameters</Link>.
            </div>
          ),
        },
        {
          name: "mobileSubmenu",
          required: false,
          type: 'ComponentProps<"div">',
          default: null,
          notes: (
            <div>
              This will be passed to the mobile submenu in a manner similar to
              other <Link href="/rest-parameters">rest parameters</Link>.
            </div>
          ),
        },
        {
          name: "...rest",
          required: false,
          type: 'ComponentProps<"li">',
          default: null,
          notes: null,
        },
      ],
    },
  ];

  return (
    <ComponentDocsPage
      componentName="Navbar"
      sourceCodeUrl="https://github.com/rfui-library/rfui-package/tree/master/src/navigation/navbar.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
