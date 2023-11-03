import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import Navbar from "./components/navbar/Navbar";
import { useAuth } from "./provider/AuthProvider";

const ProtectedRoute = ({children}) => {
  const auth = useAuth();
  if (auth.user) {
    return children;
  }

  return <Navigate to="/signin" />;
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          ),
        },
        {
          path: "signin",
          element: <SignIn />,
        },
        { path: "signup", element: <SignUp /> },
      ],
    },
  ]);

  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
