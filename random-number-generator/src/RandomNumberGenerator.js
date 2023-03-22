import React from "react";
import generateRandomNumber from "./RandomNumber";

function RandomNumberGenerator({ min, max }) {
  const randomNumber = generateRandomNumber(min, max);

  return (
    <div>
      <p>Random Number: {randomNumber}</p>
    </div>
  );
}

export default RandomNumberGenerator;
