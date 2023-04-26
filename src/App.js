import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./pages/login";
import DashboardPage from "./pages/dashboard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },{
      path: "/dashbaord",
      element: <DashboardPage />,
    },
  ]);


  return (
    <RouterProvider router={router} />
  );
}

export default App;
