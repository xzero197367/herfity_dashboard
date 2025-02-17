// src/App.tsx
import React from "react";
import {
  createRouter,
  RouterProvider,
  createRootRoute,
  Route,
} from "@tanstack/react-router";
import { adminRoutes } from "./routes/adminRoutes";
import { traderRoutes } from "./routes/traderRoutes";
import { Outlet } from "@tanstack/react-router";
import MainPage from "./pages/main_page";
import Login from "./pages/auth/login";
const RootLayout: React.FC = () => {
  return <Outlet />;
};

// Create the root route
export const rootRoute = createRootRoute({
  component: RootLayout,
});

// Define the login route with the new LoginLayout
const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "login",
  component: Login, // Use LoginLayout for the login route
});

const loginRoute1 = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Login, // Use LoginLayout for the login route
});

// Main routes
const mainRoutes = [
  new Route({
    getParentRoute: () => rootRoute,
    path: "/admin",
    component: MainPage,
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: "/trader",
    component: MainPage,
  }),
];

// Create the router instance
const router = createRouter({
  routeTree: rootRoute.addChildren([
    loginRoute,
    loginRoute1,
    ...mainRoutes,
    ...adminRoutes,
    ...traderRoutes,
  ]),
});

// Main App component
const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
