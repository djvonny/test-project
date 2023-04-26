import axios from "axios";

export const getUserData = async () => {
  const result = await axios.get("https://jsonplaceholder.typicode.com/users");
  return result.status === 200 ? result.data : result;
};
