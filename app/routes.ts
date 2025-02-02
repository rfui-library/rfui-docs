import {
  index,
  prefix,
  route,
  type RouteConfig,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "./routes/other/about.tsx"),
  route("choose-a-personality", "./routes/other/choose-a-personality.tsx"),
  route("default-roundedness", "./routes/other/default-roundedness.tsx"),
  route("getting-started", "./routes/other/getting-started.tsx"),
  route("rest-parameters", "./routes/other/rest-parameters.tsx"),
  ...prefix("components", [
    ...prefix("data-display", [
      route("badge", "./routes/components/data-display/badge.tsx"),
      route("card", "./routes/components/data-display/card.tsx"),
      route("table", "./routes/components/data-display/table.tsx"),
    ]),
    ...prefix("feedback", [
      route("alert", "./routes/components/feedback/alert.tsx"),
      route("progress", "./routes/components/feedback/progress.tsx"),
    ]),
    ...prefix("form", [
      route("button", "./routes/components/form/button.tsx"),
      route(
        "checkbox-card-group",
        "./routes/components/form/checkbox-card-group.tsx"
      ),
      route("checkbox", "./routes/components/form/checkbox.tsx"),
      route("combobox", "./routes/components/form/combobox.tsx"),
      route("form-field", "./routes/components/form/form-field.tsx"),
      route("input", "./routes/components/form/input.tsx"),
      route("password-input", "./routes/components/form/password-input.tsx"),
      route(
        "radio-button-card-group",
        "./routes/components/form/radio-button-card-group.tsx"
      ),
      route(
        "radio-button-group",
        "./routes/components/form/radio-button-group.tsx"
      ),
      route("radio-button", "./routes/components/form/radio-button.tsx"),
      route("select", "./routes/components/form/select.tsx"),
      route("stepper", "./routes/components/form/stepper.tsx"),
      route("switch", "./routes/components/form/switch.tsx"),
      route("textarea", "./routes/components/form/textarea.tsx"),
    ]),
    ...prefix("layout", [
      route("container", "./routes/components/layout/container.tsx"),
      route("flex", "./routes/components/layout/flex.tsx"),
      route("stack", "./routes/components/layout/stack.tsx"),
    ]),
    ...prefix("navigation", [
      route("breadcrumbs", "./routes/components/navigation/breadcrumbs.tsx"),
      route("footer", "./routes/components/navigation/footer.tsx"),
      route("link", "./routes/components/navigation/link.tsx"),
      route("navbar", "./routes/components/navigation/navbar.tsx"),
      route(
        "navigation-links",
        "./routes/components/navigation/navigation-links.tsx"
      ),
      route("tabs", "./routes/components/navigation/tabs.tsx"),
      route(
        "vertical-navbar",
        "./routes/components/navigation/vertical-navbar.tsx"
      ),
    ]),
    ...prefix("overlays", [
      route("help-tooltip", "./routes/components/overlays/help-tooltip.tsx"),
      route("info-tooltip", "./routes/components/overlays/info-tooltip.tsx"),
      route("modal", "./routes/components/overlays/modal.tsx"),
      route("popover", "./routes/components/overlays/popover.tsx"),
      route("tooltip", "./routes/components/overlays/tooltip.tsx"),
    ]),
    ...prefix("typography", [
      route("blockquote", "./routes/components/typography/blockquote.tsx"),
      route("code-block", "./routes/components/typography/code-block.tsx"),
      route("h1", "./routes/components/typography/h1.tsx"),
      route("h2", "./routes/components/typography/h2.tsx"),
      route("highlight", "./routes/components/typography/highlight.tsx"),
      route("inline-code", "./routes/components/typography/inline-code.tsx"),
      route("ol", "./routes/components/typography/ol.tsx"),
      route("text", "./routes/components/typography/text.tsx"),
      route("ul", "./routes/components/typography/ul.tsx"),
    ]),
    ...prefix("other", [
      route("dropdown-menu", "./routes/components/other/dropdown-menu.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
