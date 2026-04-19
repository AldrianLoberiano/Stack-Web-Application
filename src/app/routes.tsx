import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Features } from "./pages/Features";
import { Pricing } from "./pages/Pricing";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { DashboardLayout } from "./components/DashboardLayout";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Projects } from "./pages/dashboard/Projects";
import { Team } from "./pages/dashboard/Team";
import { Settings } from "./pages/dashboard/Settings";
import { ProtectedRoute } from "./components/ProtectedRoute";

export const router = createBrowserRouter([
  // Auth pages (no header/footer)
  { path: "/login", Component: Login },
  { path: "/signup", Component: SignUp },

  // Dashboard (protected)
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, Component: Dashboard },
      { path: "projects", Component: Projects },
      { path: "team", Component: Team },
      { path: "settings", Component: Settings },
    ],
  },

  // Marketing site
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "features", Component: Features },
      { path: "pricing", Component: Pricing },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
