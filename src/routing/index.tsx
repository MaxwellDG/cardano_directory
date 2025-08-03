import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { ROUTE_SEGMENTS, ROUTES } from "./routes";
import { AppRoot } from "./AppRoot";
import * as Sentry from "@sentry/react";
import Contracts from "../screens/contracts";
import Root from "../screens";

const sentryCreateBrowserRouter =
  Sentry.wrapCreateMemoryRouterV6(createBrowserRouter);

export const Router = sentryCreateBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE_SEGMENTS.ROOT} element={<AppRoot />}>
      <Route path={ROUTE_SEGMENTS.ROOT} element={<Root />} />
      <Route path={`${ROUTES.CONTRACTS}`} element={<Contracts />}></Route>
    </Route>
  )
);
