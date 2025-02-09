import { gql, useQuery } from "@apollo/client";
import React from "react";

export const GET_COUNTER = gql`
  query GetCounter {
    clickCount @client
  }
`;

const Counter = () => {
  const { data, loading, error } = useQuery(GET_COUNTER);

  if (loading) return <div>Loading</div>;
  if (error) return <p>ERROR: {error.message}</p>;
  return <div>{"X:" + data?.clickCount}</div>;
};

export default Counter;
