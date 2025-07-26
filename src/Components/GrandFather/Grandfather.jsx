import React from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandfather.css";

const Grandfather = () => {
  return (
    <div className="mainc ">
      <Father></Father>
      <Uncle></Uncle>
      <Aunty></Aunty>
    </div>
  );
};

export default Grandfather;
