import React from "react";
import { useLoaderData } from "react-router-dom";
import Topics from "../Topics/Topics";

const Home = () => {
  const data = useLoaderData();
  const quizData = data.data;
  console.log(quizData);
  return (
    <div>
      <h2>Home</h2>
      {quizData.map((topic) => (
        <Topics key={topic.id} topic={topic}></Topics>
      ))}
    </div>
  );
};

export default Home;
