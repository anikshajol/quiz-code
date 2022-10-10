import React from "react";
import Lottie from "lottie-react";
import lottie from "../../Lottie/lottie.json";
const Header = () => {
  return (
    <div className=" mt-10 md:mt-0 flex flex-col-reverse  md:flex-row md:px-0 px-6 items-center container mx-auto">
      <section className="md:w-2/4">
        <Lottie className="md:w-2/4" animationData={lottie} loop={true} />
      </section>
      <section className="md:w-2/4">
        <h1 className="text-3xl text-justify">
          <span className="text-4xl font-bold text-blue-800">W</span>elcome to
          the world's largest quiz community. You can check your knowledge about
          Programming. <span className="">So be ready and lets go...</span>
        </h1>
      </section>
    </div>
  );
};

export default Header;
