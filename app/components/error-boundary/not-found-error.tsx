import { H1, Text } from "rfui-package";

export const NotFoundError = () => {
  return (
    <div className="max-w-prose text-lg">
      <H1>Page not found</H1>
      <Text>
        <p>The page you tried to access does not exist.</p>
      </Text>
    </div>
  );
};
