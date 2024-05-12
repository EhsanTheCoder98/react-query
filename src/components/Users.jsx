import React from "react";

import { Link } from "react-router-dom";
import { useFetchUsers } from "../hooks/queries";

const Users = () => {
  

  const { isPending, data, error } = useFetchUsers();
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
