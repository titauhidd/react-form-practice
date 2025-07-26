import React from "react";
import Abdullah from "../Abdullah/Abdullah";
import Baraka from "../Baraka/Baraka";

const Aunty = () => {
  return (
    <div className="border-2 border-amber-900 space-y-8">
      <p>Auntys Polapain</p>
      <div className="flex gap-8 border-2 border-amber-500">
        <Abdullah></Abdullah>
        <Baraka></Baraka>
      </div>
    </div>
  );
};

export default Aunty;
