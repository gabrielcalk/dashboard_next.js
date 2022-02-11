import { useQuery } from "react-query";
import { api } from "../api";

type User = {
    id: string,
    name: string,
    email: string,
    createdAt: string
}

// return promise user
export async function getUsers(): Promise<User[]> {
  //key utilized to cache the data
  const { data } = await api.get("users");

  const users = data.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString(),
    };
  });
  return users;
}

export function useUsers() {
  return useQuery("users", getUsers, {
    staleTime: 1000 * 5, //this query during 5 seconds will be fresh
  });
}
