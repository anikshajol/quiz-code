import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();
  const quizData = data.data;
  console.log(quizData);
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

export default Home;
