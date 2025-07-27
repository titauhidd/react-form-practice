import React from "react";
import Special from "../Special/special";
// import special from "../Special/special";

const Myself = ({ asset }) => {
  return (
    <div className="border-2 border-b-amber-200 p-6">
      <p>Fathers Son</p>
      {/* <special></special> */}
      <section>{asset && <Special asset={asset}></Special>}</section>
    </div>
  );
};

export default Myself;
