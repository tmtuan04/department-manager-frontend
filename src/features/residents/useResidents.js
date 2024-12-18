import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { getResidents } from "../../services/apiResidents";

export default function useResidents() {
  const queryClient = useQueryClient();

  const {
    isLoading,
    data: residents,
    error,
  } = useQuery({
    queryKey: ["residents"],
    queryFn: () => getResidents(),
  });

  console.log(residents);
  return { isLoading, residents, error };
}
