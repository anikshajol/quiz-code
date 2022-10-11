import React from "react";
import { useLoaderData } from "react-router-dom";
import Option from "../Option/Option";

const Quiz = () => {
  const data = useLoaderData();
  const quiz = data.data;
  console.log(quiz);
  const { questions, name } = quiz;

  // console.log(questions[0]);
  return (
    <div className="grid grid-cols-1 place-items-center justify-center container mx-auto mt-12 gap-y-12">
      <h2>Quiz of {name}</h2>
      {questions.map((ques) => (
        <Option key={ques.id} ques={ques}></Option>
      ))}
    </div>
  );
};

export default Quiz;
