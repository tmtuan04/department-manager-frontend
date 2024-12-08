import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addUpdateResident } from "../../services/apiResidents";
import toast from "react-hot-toast";

export default function useUpdateResident() {
  const queryClient = useQueryClient();

  const { mutate: updateResident, isLoading: isUpdating } = useMutation({
    mutationFn: ({ newResident, id }) => addUpdateResident(newResident, id),
    onSuccess: () => {
      toast.success("Resident successfully updated!");
      queryClient.invalidateQueries({
        queryKey: ["residents"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { updateResident, isUpdating };
}
