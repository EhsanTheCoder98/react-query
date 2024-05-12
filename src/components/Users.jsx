import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

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
            <Link to={`/users/${i.id}`}>
            <h3 >{i.name}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
