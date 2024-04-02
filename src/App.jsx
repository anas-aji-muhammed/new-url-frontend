import './App.css'
import Homepage from "./pages/Homepage/HomePage"
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import ErrorPage from './components/ErrorPage';
import LinksPage from './pages/LinksPage/LinksPage';
import AnalyticsPage from './pages/AnalyticsPage/AnalyticsPage';
import LinkCreationForm from './components/LinkCreateForm';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>,
      errorElement: <ErrorPage/>,
      children:[
        {
            path: "/links",
            element: <LinksPage/>,
            children:[
                {
                    path: "/create",
                    element: <LinkCreationForm/>,
                },
            ]
        },
        {
            path: "/analytics",
            element: <AnalyticsPage/>,
        },
        {
            path: "/create-link",
            element: <LinkCreationForm/>,
        },
        
      ]
    },
    {
        path: "/dashboard",
        element: <Dashboard/>,
    },
  ]);
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
