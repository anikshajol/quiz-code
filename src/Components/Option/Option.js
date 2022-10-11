import React from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import swal from "sweetalert";

const Option = ({ ques }) => {
  const { question, id, correctAnswer, options } = ques;
  console.log(ques);

  const handleClickCorrectAnswer = () => {
    swal(`Correct Answer: ${correctAnswer}`);
  };

  //   const handleClickOption = () => {
  //     if (correctAnswer === id) {
  //       swal("correct");
  //     } else {
  //       swal("wrong");
  //     }
  //   };

  return (
    <div className="">
      <div className="card w-96 md:w-[750px] glass p-5">
        <section className="flex justify-between">
          <div className="">
            <h2 className="text-center text-xl font-semibold">{question}</h2>
          </div>
          <div className="pl-12 text-blue-600">
            <EyeIcon
              onClick={handleClickCorrectAnswer}
              className="w-10 cursor-pointer"
            ></EyeIcon>
          </div>
        </section>
        <div className="card-body rounded-md bg-slate-200">
          <section>
            {options.map((option, idx) => (
              <div key={idx}>
                <input
                  className="mr-2 w-10"
                  type="radio"
                  name={id}
                  value={idx}
                  id={correctAnswer}
                />
                <label
                  className="text-lg hover:bg-blue-700 rounded-md hover:px-1 hover:text-white "
                  htmlFor={id}
                >
                  {option}
                </label>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Option;
