import React, { useState } from "react";
import { NumberBox } from "../.";
import { MainWrapper, GlobalStyle } from "./styles";
import { initialArray, NumberElement } from "../../utils";

const Main = () => {
  const [numbersArray, setNumbersArray] = useState(initialArray);

  const handleClick = (e: any) => {
    const { value } = e.target;
    const newNumbersArray: NumberElement[] = numbersArray.map(
      (number: NumberElement) => {
        if (number.numberValue % +value === 0) {
          if (number.numberValue === +value) {
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
