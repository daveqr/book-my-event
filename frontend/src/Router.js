import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import AboutPage from "./pages/AboutPage";
import Home from "./pages/Home";
import EventsPage from "./pages/EventsPage";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <AboutPage /> },
      { path: "events", element: <EventsPage /> },
      { path: "login", element: <LoginPage /> },
    ],    
  },
]);

export default router;