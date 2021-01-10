import React, { useState } from "react";
import { NumberBox } from "../.";
import { MainWrapper, GlobalStyle } from "./styles";
import { initialArray, NumberElement } from "../../utils";

const Main = () => {
  const [numbersArray, setNumbersArray] = useState(initialArray);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const { value } = e.currentTarget;
    const valueAsNumber = +value;
    const newNumbersArray: NumberElement[] = numbersArray.map(
      (number: NumberElement) => {
        if (number.numberValue % valueAsNumber === 0) {
          if (number.numberValue === valueAsNumber) {
            return { ...number, isMultiple: true, isSelected: true };
          }
          return { ...number, isMultiple: true, isSelected: false };
        }
        return { ...number, isMultiple: false, isSelected: false };
      }
    );
    setNumbersArray(newNumbersArray);
  };

  return (
    <>
      <MainWrapper>
        <h1>TABLE OF MULTIPLES</h1>
        <p>Select a number from the grid to see its multiples </p>
        <p className="remember">
          * Also remember, every number is always a multiple of itself *
        </p>

        {numbersArray.map((item) => (
          <NumberBox
            key={item.numberValue}
            numberValue={item.numberValue}
            isMultiple={item.isMultiple}
            isSelected={item.isSelected}
            handleClick={handleClick}
          />
        ))}
      </MainWrapper>
      <GlobalStyle />
    </>
  );
};

export default Main;
