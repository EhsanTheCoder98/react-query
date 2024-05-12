import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Users = () => {
  const queryKey = ["users"];
  const queryFn = () => axios.get("https://jsonplaceholder.typicode.com/users");

  const { isPending, data, error } = useQuery({ queryKey, queryFn });
  if (isPending) return <h1>LOADING...</h1>;
  return (
    <div>
      {data.data.map((i) => {
        return (
          <div key={i.id}>
            <h3 >{i.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
