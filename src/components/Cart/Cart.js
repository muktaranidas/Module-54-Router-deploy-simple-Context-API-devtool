import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveItem }) => {
  // console.log(cart);
  let message;
  if (cart.length === 0) {
    message = <p>Please buy at least one itam!!!</p>;
  } else if (cart.length === 1) {
    message = (
      <div>
        <h3>Tmr jonno akta nao</h3>
        <p>Monir jonno akta nao</p>
        <p>
          <small>Promar jonno akta nao</small>
        </p>
      </div>
    );
  } else {
    message = <p>Thanks for buying!</p>;
  }
  return (
    <div>
      <h2 className={cart.length === 2 ? `orange` : "purple"}>Order Summery</h2>
      <h5 className={`bold ${cart.length === 2 ? "blue" : "yellow"}`}>
        Order Quantity: {cart.length}
      </h5>
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}
          <button onClick={() => handleRemoveItem(tshirt)}>X</button>{" "}
        </p>
      ))}
      {message}
      {cart.length === 3 ? <p>তিনজনকে গিফট দিবা?</p> : <p>কিনো আরও কিনো</p>}
      <p>AND Operator</p>
      {cart.length === 2 && <h2> Double items </h2>}
      <p>OR Operator</p>
      {cart.length === 4 || <p>চারটা আইটেম না</p>}
    </div>
  );
};

export default Cart;

/*
Conditional Rendering
1. use element in a variable and then use if-else to set value
2. ternary operation condition ? true : false
3. && operator(if condition is true, i want to display somethings) 
4. || operator (if condition is false, i want to display somethings)
*/
