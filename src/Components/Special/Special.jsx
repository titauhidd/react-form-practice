import React from "react";

const Special = ({ asset }) => {
  return (
    <div className="border-2 border-amber-400 p-4">
      {/* <p>Diamond: Give it to I'm Special</p> */}
      <p>Special</p>
      <p>Has: {asset}</p>
    </div>
  );
};

export default Special;
