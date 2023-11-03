import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import Navbar from "./components/navbar/Navbar";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          index: true,
          element: <HomePage />,
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
        <h1>App Component</h1>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
