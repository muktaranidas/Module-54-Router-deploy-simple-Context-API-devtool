import React from "react";
import Cousin from "../Cousin/Cousin";

const Aunty = ({ house }) => {
  return (
    <div>
      <h2>Aunty</h2>
      <p>
        <small>House : {house}</small>
      </p>
      <section className="flex">
        <Cousin house={house}></Cousin>
        <Cousin house={house}></Cousin>
      </section>
    </div>
  );
};

export default Aunty;
