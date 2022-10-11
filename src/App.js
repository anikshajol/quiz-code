import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Statistics from "./Components/Statistics/Statistics";
import Blog from "./Components/Blog/Blog";
import Main from "./Layouts/Main";
import Topics from "./Components/Topics/Topics";
import Quiz from "./Components/Quiz/Quiz";
import ErrorPage from "./Components/ErrorElements/ErrorPage";

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
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/home/:topicsId",
          element: <Quiz></Quiz>,
          loader: async ({ params }) =>
            await fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.topicsId}`
            ),
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage></ErrorPage>,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
