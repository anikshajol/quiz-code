import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Topics from "../Topics/Topics";

const Home = () => {
  const data = useLoaderData();
  const quizData = data.data;

  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-1 items-center place-items-center p-2 md:grid-cols-4 container mx-auto">
        {quizData.map((topic) => (
          <Topics key={topic.id} topic={topic}></Topics>
        ))}
      </div>
    </div>
  );
};

export default Home;
