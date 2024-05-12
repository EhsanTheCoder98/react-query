import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetchUsers = () => {
  const queryKey = ["users"];
  const queryFn = () => axios.get("https://jsonplaceholder.typicode.com/users");
  return useQuery({ queryKey, queryFn });
};

const useFetchUSerDetails = (id) => {
    return useQuery({
        queryKey: ["users",id],
        queryFn: ({queryKey}) =>
          axios.get(`https://jsonplaceholder.typicode.com/users/${queryKey[1]}`),
      });
}

export {useFetchUsers,useFetchUSerDetails};