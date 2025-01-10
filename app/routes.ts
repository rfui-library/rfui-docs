import {
  index,
  prefix,
  route,
  type RouteConfig,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
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
      route("button", "./routes/components/form/button"),
      route(
        "checkbox-card-group",
        "./routes/components/form/checkbox-card-group",
      ),
      route("checkbox", "./routes/components/form/checkbox"),
      route("form-field", "./routes/components/form/form-field"),
      route("input", "./routes/components/form/input"),
      route("password-input", "./routes/components/form/password-input"),
      route(
        "radio-button-card-group",
        "./routes/components/form/radio-button-card-group",
      ),
      route(
        "radio-button-group",
        "./routes/components/form/radio-button-group",
      ),
      route("radio-button", "./routes/components/form/radio-button"),
      route("select", "./routes/components/form/select"),
      route("stepper", "./routes/components/form/stepper"),
      route("switch", "./routes/components/form/switch"),
      route("textarea", "./routes/components/form/textarea"),
    ]),
    ...prefix("layout", [
      route("container", "./routes/components/layout/container"),
      route("flex", "./routes/components/layout/flex"),
      route("stack", "./routes/components/layout/stack"),
    ]),
    ...prefix("navigation", [
      route("breadcrumbs", "./routes/components/navigation/breadcrumbs"),
      route("footer", "./routes/components/navigation/footer"),
      route("link", "./routes/components/navigation/link"),
      route("navbar", "./routes/components/navigation/navbar"),
      route(
        "navigation-links",
        "./routes/components/navigation/navigation-links",
      ),
      route("tabs", "./routes/components/navigation/tabs"),
      route(
        "vertical-navbar",
        "./routes/components/navigation/vertical-navbar",
      ),
    ]),
    ...prefix("overlays", [
      route("help-tooltip", "./routes/components/overlays/help-tooltip"),
      route("info-tooltip", "./routes/components/overlays/info-tooltip"),
      route("modal", "./routes/components/overlays/modal"),
      route("popover", "./routes/components/overlays/popover"),
      route("tooltip", "./routes/components/overlays/tooltip"),
    ]),
    ...prefix("typography", [
      route("blockquote", "./routes/components/typography/blockquote"),
      route("code-block", "./routes/components/typography/code-block"),
      route("h1", "./routes/components/typography/h1"),
      route("h2", "./routes/components/typography/h2"),
      route("highlight", "./routes/components/typography/highlight"),
      route("inline-code", "./routes/components/typography/inline-code"),
      route("ol", "./routes/components/typography/ol"),
      route("text", "./routes/components/typography/text"),
      route("ul", "./routes/components/typography/ul"),
    ]),
  ]),
] satisfies RouteConfig;
