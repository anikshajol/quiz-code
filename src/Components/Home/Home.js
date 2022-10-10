import React from "react";
import { useLoaderData } from "react-router-dom";
import Topics from "../Topics/Topics";

const Home = () => {
  const data = useLoaderData();
  const quizData = data.data;
  console.log(quizData);
  return (
    <div className="grid grid-cols-1 items-center place-items-center p-2 md:grid-cols-4 container mx-auto">
      {quizData.map((topic) => (
        <Topics key={topic.id} topic={topic}></Topics>
      ))}
    </div>
  );
};

export default Home;
