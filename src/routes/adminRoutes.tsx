import { Route } from "@tanstack/react-router";
import AdminCustomers from "@/pages/admin/admin_customer";
import { AdminDashboard } from "@/pages/admin/admin_dashboard";
import AdminInventory from "@/pages/admin/admin_inventory";
import { AdminOrders } from "@/pages/admin/admin_orders";
import AdminSettings from "@/pages/admin/admin_settings";
import AdminTrader from "@/pages/admin/admin_traders";
import { rootRoute } from "@/App";

export const adminRoutes = [
  new Route({
    getParentRoute: () => rootRoute,
    path: "admin/",
    component: AdminDashboard,
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: "admin/orders",
    component: AdminOrders,
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: "admin/customers",
    component: AdminCustomers,
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: "admin/inventory",
    component: AdminInventory,
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: "admin/traders",
    component: AdminTrader,
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: "admin/settings",
    component: AdminSettings,
  }),
];
