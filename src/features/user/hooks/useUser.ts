import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/features/user/services/getUser";

export const useUser = () => {
  const query = useQuery({
    queryKey: ["user-details"],
    queryFn: getUser,
  });

  return {
    ...query,
    isRefreshing: query.isFetching,
  };
};
