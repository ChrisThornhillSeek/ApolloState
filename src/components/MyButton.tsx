import React from "react";
import { clickCountVar } from "../cache";

const MyButton = ({ title }: { title: string }) => {
  const handleClick = (event: any) => {
    clickCountVar(clickCountVar() + 1);
    console.log(clickCountVar());
  };

  return <button onClick={handleClick}>{title}</button>;
};

export default MyButton;
