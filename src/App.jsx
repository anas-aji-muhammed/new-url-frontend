import "./App.css";
import Homepage from "./pages/Homepage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import ErrorPage from "./components/ErrorPage";
import LinksPage from "./pages/LinksPage/LinksPage";
import AnalyticsPage from "./pages/AnalyticsPage/AnalyticsPage";
import LinkCreationForm from "./pages/LinksPage/LinkCreateForm";
import LinkDetailsPage from "./pages/LinksPage/LinkDetailsPage";
import LinksPageLayout from "./pages/LinksPage/LinksPageLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "links",
        element: <LinksPageLayout />,
        children: [
          {
            element: <LinksPage />,
            index: true
          },
          {
            path: "create-link",
            element: <LinkCreationForm />,
          },
          {
            path: ":linkId/",
            element: <LinkDetailsPage />,
          },
        ],
      },
      {
        path: "/analytics",
        element: <AnalyticsPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
