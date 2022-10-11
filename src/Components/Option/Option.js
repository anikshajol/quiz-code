import React from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import swal from "sweetalert";

const Option = ({ ques }) => {
  const { question, id, core, correctAnswer, options } = ques;

  const handleClickCorrectAnswer = () => {
    console.log("click");
    swal(`Correct Answer:${correctAnswer}`);
  };
  return (
    <div className="">
      <div className="card w-[750px] glass p-5">
        <section className="flex justify-between">
          <div className="">
            <h2 className="text-center text-xl">{question}</h2>
          </div>
          <div className="pl-12">
            <EyeIcon
              onClick={handleClickCorrectAnswer}
              className="w-10 cursor-pointer"
            ></EyeIcon>
          </div>
        </section>
        <div className="card-body">
          <section>
            <input className="mr-2 w-10" type="radio" name="option" id="" />
            <label htmlFor="option">{options[0]}</label>
          </section>
          <section>
            <input className="mr-2 w-10" type="radio" name="option" id="" />
            <label htmlFor="option">{options[1]}</label>
          </section>
          <section>
            <input className="mr-2 w-10" type="radio" name="option" id="" />
            <label htmlFor="option">{options[2]}</label>
          </section>
          <section>
            <input className="mr-2 w-10" type="radio" name="option" id="" />
            <label htmlFor="option">{options[3]}</label>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Option;
