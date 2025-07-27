import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandfather.css";

export const AssetContext = createContext("gold");
export const MoneyContext = createContext(1000);
const Grandfather = () => {
  const [money, setMoney] = useState(1000);
  const asset = "Diamond Ring";
  // const asset = "";

  return (
    <div>
      <p className="border-2 border-amber-200">GrandFather</p>
      <p>NetMoney: {money}</p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <AssetContext.Provider value="gold">
          <section className="flex">
            <Father asset={asset}></Father>
            <Uncle></Uncle>
            <Aunty></Aunty>
          </section>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandfather;
