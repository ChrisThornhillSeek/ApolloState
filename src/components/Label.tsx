import { gql, useReactiveVar } from "@apollo/client";
import React from "react";
import { clickCountVar } from "../cache";

const Label = ({ title }: { title: string }) => {
  const data = useReactiveVar(clickCountVar);
  return (
    <div style={{ padding: 4, fontWeight: "bold" }}>{title + " : " + data}</div>
  );
};

export default Label;
