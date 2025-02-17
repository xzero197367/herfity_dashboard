import { rootRoute } from "@/App";
import TraderDashboard from "@/pages/vendor/trader_dashboard";
import TraderInventory from "@/pages/vendor/trader_inventory";
import TraderOrders from "@/pages/vendor/trader_orders";
import TraderSettings from "@/pages/vendor/trander_settings";
import { Route } from "@tanstack/react-router";

export const traderRoutes = [
  new Route({
    getParentRoute: () => rootRoute,
    path: "trader/",
    component: TraderDashboard,
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: "trader/orders",
    component: TraderOrders,
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: "trader/inventory",
    component: TraderInventory,
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: "trader/settings",
    component: TraderSettings,
  }),
];
