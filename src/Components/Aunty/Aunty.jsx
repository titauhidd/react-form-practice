import React, { useContext } from "react";
import Abdullah from "../Abdullah/Abdullah";
import Baraka from "../Baraka/Baraka";
import { MoneyContext } from "../GrandFather/Grandfather";

const Aunty = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div className="border-2 border-amber-900 space-y-8">
      <p>Auntys Polapain</p>
      <div className="flex gap-8 border-2 border-amber-500">
        <Abdullah></Abdullah>
        <Baraka></Baraka>
      </div>
      <p>Money: {money}</p>
      <button onClick={() => setMoney(money + 1000)} className="px-6 py-3 border-amber-50 border text-2xl">Add 1000 </button>
    </div>
  );
};

export default Aunty;
