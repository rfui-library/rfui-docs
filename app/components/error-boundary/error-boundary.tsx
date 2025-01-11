import { isRouteErrorResponse, useRouteError } from "react-router";
import type { Route } from "../../+types/root";
import { NotFoundError } from "./not-found-error";
import InternalServerError from "./internal-server-error";

export const ErrorBoundary = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 404) {
    return <NotFoundError />;
  }

  return <InternalServerError />;
};
