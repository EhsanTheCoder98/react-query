import { useParams } from "react-router-dom";
import { useFetchUSerDetails } from "../hooks/queries";

const UsersDetails = () => {
  const { id } = useParams();
  const { data, isPending, error } = useFetchUSerDetails(id);
  console.log(data);
  if (isPending) return <h1>LOADING</h1>;
  console.log(error)
  if (error) return <h1>{error.message}</h1>;
  return <div>{data.data.email}</div>;
};

export default UsersDetails;
