import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { ROUTE_SEGMENTS, ROUTES } from "./routes";
import { AppRoot } from "./AppRoot";
import * as Sentry from "@sentry/react";
import ContractsRoot from "../screens/contracts";
import Wallet from "../screens/contracts/wallet";
import Law from "../screens/contracts/law";
import Transactions from "../screens/contracts/transactions";
import Root from "../screens";

const sentryCreateBrowserRouter =
  Sentry.wrapCreateMemoryRouterV6(createBrowserRouter);

export const Router = sentryCreateBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE_SEGMENTS.ROOT} element={<AppRoot />}>
      <Route path={ROUTE_SEGMENTS.ROOT} element={<Root />} />
      <Route path={ROUTES.CONTRACTS} element={<ContractsRoot />}>
        <Route path={ROUTES.WALLET} element={<Wallet />} />
        <Route path={ROUTES.LAW} element={<Law />} />
        <Route path={ROUTES.TRANSACTIONS} element={<Transactions />} />
      </Route>
    </Route>
  )
);
