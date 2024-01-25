import React from "react";

const Title = ({ heading }) => {
  return (
    <div className="text-center font-bold text-2xl md:text-3xl lf:text-5xl text-red-600 my-10">
      <h2>{heading}</h2>
    </div>
  );
};

export default Title;
