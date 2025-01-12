import { isRouteErrorResponse, useRouteError } from "react-router";
import InternalServerError from "./internal-server-error";
import { NotFoundError } from "./not-found-error";

export const ErrorBoundary = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 404) {
    return <NotFoundError />;
  }

  return <InternalServerError />;
};
