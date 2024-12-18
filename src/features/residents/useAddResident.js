import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addUpdateResident } from "../../services/apiResidents";
import toast from "react-hot-toast";

export default function useAddResident() {
  const queryClient = useQueryClient();

  const { mutate: addResident, isLoading: isAdding } = useMutation({
    mutationFn: addUpdateResident,
    onSuccess: () => {
      toast.success("New resident successfully added!");
      queryClient.invalidateQueries({
        queryKey: ["residents"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { addResident, isAdding };
}
