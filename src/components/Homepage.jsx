import React from "react";
import { useQuery } from "@tanstack/react-query";

const Homepage = () => {
  const queryKey = ["users"];
  const queryFn = () => {
    return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json()
    );
  };
  const { isPending, error, data } = useQuery({ queryKey, queryFn });
  console.log({ data });
  if (isPending) return <h1>LOADING...</h1>;
    return (
      <div>
        {data.map((i) => {
            return <h3 key={i.id}>{i.name}</h3>;
          })}
      </div>
    );
};

export default Homepage;
