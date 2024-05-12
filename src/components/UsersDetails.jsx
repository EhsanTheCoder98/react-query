import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axios from "axios";

const UsersDetails = () => {
  const { id } = useParams();
  const { data, isPending, error } = useQuery({
    queryKey: ["users",id],
    queryFn: ({queryKey}) =>
      axios.get(`https://jsonplaceholder.typicode.com/users/${queryKey[1]}`),
  });
  console.log(data);
  if (isPending) return <h1>LOADING</h1>;
  console.log(error)
  if (error) return <h1>{error.message}</h1>;
  return <div>{data.data.email}</div>;
};

export default UsersDetails;
