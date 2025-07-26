import React from "react";
import Cousin1 from "../Cousin/Cousin1";
import Fatema from "../Fatema/Fatema";

const Uncle = () => {
  return (
    <div className="border-2 border-amber-900 space-y-8">
      <p>Uncles Polapain</p>
      <div className="flex gap-8 border-2 border-amber-500">
        <Cousin1></Cousin1>
        <Fatema></Fatema>
      </div>
    </div>
  );
};

export default Uncle;
