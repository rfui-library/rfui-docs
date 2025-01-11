import { NavigationLinks, type LinkItemType } from "rfui";
import { getComponents } from "@/utilities/get-components";

type ComponentsList = {
  isSticky?: boolean;
};

export const ComponentsList = ({ isSticky = false }: ComponentsList) => {
  const components = getComponents();
  const containerClass = isSticky
    ? "sticky top-6 max-h-[90vh] max-w-[200px] overflow-y-auto text-neutral-900"
    : undefined;
  const linkItems: LinkItemType[] = [
    { name: "Typography", isHeader: true },
    ...components.typography.map((component) => ({
      name: component.name,
      href: component.href,
    })),
    { name: "Form", isHeader: true },
    ...components.form.map((component) => ({
      name: component.name,
      href: component.href,
    })),
    { name: "Data Display", isHeader: true },
    ...components.dataDisplay.map((component) => ({
      name: component.name,
      href: component.href,
    })),
    { name: "Navigation", isHeader: true },
    ...components.navigation.map((component) => ({
      name: component.name,
      href: component.href,
    })),
    { name: "Feedback", isHeader: true },
    ...components.feedback.map((component) => ({
      name: component.name,
      href: component.href,
    })),
    { name: "Overlays", isHeader: true },
    ...components.overlays.map((component) => ({
      name: component.name,
      href: component.href,
    })),
    { name: "Layout", isHeader: true },
    ...components.layout.map((component) => ({
      name: component.name,
      href: component.href,
    })),
  ];

  return <NavigationLinks linkItems={linkItems} className={containerClass} />;
};
