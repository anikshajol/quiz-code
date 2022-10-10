import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Statistics from "./Components/Statistics/Statistics";
import Blog from "./Components/Blog/Blog";
import Main from "./Layouts/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: async () =>
            await fetch("https://openapi.programming-hero.com/api/quiz"),
        },
        {
          path: "home",
          element: <Home></Home>,
          loader: async () =>
            await fetch("https://openapi.programming-hero.com/api/quiz"),
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
