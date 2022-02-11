import { useQuery } from "react-query";
import { api } from "../api";

type User = {
    id: string,
    name: string,
    email: string,
    createdAt: string
}

type GetUserResponse = {
  totalCount: number
  users: User[]
}

// return promise user
export async function getUsers(page: number): Promise<GetUserResponse> {
  //key utilized to cache the data
  const { data, headers } = await api.get("users", {
    params:{
      page
    }
  });

  const totalCount = Number(headers['x-total-count'])

  const users = data.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString(),
    };
  });
  return {
    users,
    totalCount
  };
}

export function useUsers(page: number) {
  // passing the page as parametor to automatticaly update the content on the page and not used the cache
  return useQuery(["users", page], () => getUsers(page), {
    staleTime: 1000 * 5, //this query during 5 seconds will be fresh
  });
}
