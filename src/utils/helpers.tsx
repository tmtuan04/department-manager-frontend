export function capitalize(input: string): string | null {
  if (!input.length) return null;
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}

export const formatFeeType = (feeType: string) => {
  switch (feeType) {
    case "DepartmentFee":
      return "Fee";
    case "ContributionFund":
      return "Fund";
    // Thêm các trường hợp khác nếu cần
    case "VehicleFee":
      return "Vehicle Fee";
    default:
      return feeType; // Giữ nguyên nếu không có mapping
  }
};
