import React from "react";

const Topics = ({ topic }) => {
  const { name, logo } = topic;

  return (
    <div className="px-3 md:px-0 md:mr-5 mt-7">
      <div className="card w-full bg-gray-300">
        <figure>
          <img src={logo} alt={name} />
        </figure>
        <div className="card-body bg-slate-200">
          <h2 className="card-title">{name}</h2>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topics;
