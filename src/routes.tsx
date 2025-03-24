import { createBrowserRouter, RouteObject } from "react-router-dom";
import { MainLayout } from "./layout";
import { Home } from "./pages";

const privateRoutes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <div>ROTA_PRIVADA</div>,
      },
    ],
  }
];

const publicRoutes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element:  <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <main>NOT_FOUND</main>,
  },
];

const routesList: RouteObject[] = [
  {
    element: <div>PRIVATE_ROUTES</div>,
    children: privateRoutes
  },
  ...publicRoutes
]

export const routes = createBrowserRouter(routesList)