import React from "react";
import Myself from "../Myself/Myself";
import Daughter from "../Daughter/Daughter";
import "./father.css";

const Father = () => {
  return (
    <div className="border-2 border-amber-900 space-y-8">
      <h2 className="">Father</h2>
      <div className="flex gap-8 border-2 border-amber-500">
        <Myself></Myself>
        <Daughter></Daughter>
      </div>
    </div>
  );
};

export default Father;
