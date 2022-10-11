import React from "react";

const Option = ({ ques }) => {
  const { question, id, core, correctAnswer, options } = ques;

  return (
    <div className="">
      <div className="card w-[500px] glass">
        <h2 className="text-center text-xl">{question}</h2>
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
