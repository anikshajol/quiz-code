import React from "react";
import { Link } from "react-router-dom";

const Topics = ({ topic }) => {
  const { name, logo, id } = topic;
  // const data = useLoaderData();
  // const quiz = data.data;

  return (
    <div className="px-3 md:px-0 md:mr-5 mt-7">
      <div className="card w-full bg-gray-300">
        <figure>
          <img src={logo} alt={name} />
        </figure>
        <div className="card-body bg-slate-200">
          <h2 className="card-title">{name}</h2>

          <div className="card-actions justify-end">
            <Link to={`/home/${id}`}>
              <button className="btn btn-primary">Start now!</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topics;
