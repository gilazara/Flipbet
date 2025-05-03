import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/features/user/services/fetchUser";

export const useUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    staleTime: 300,
  });
};
