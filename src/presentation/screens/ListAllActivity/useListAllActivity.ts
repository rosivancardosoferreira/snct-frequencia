import { useSelector } from "react-redux";
import { selectAllActivitys } from "store/slices/allActivitys";

export function useListAllActivity() {
  const dataAllactivitys = useSelector(selectAllActivitys);
  return {
    dataAllactivitys
  };
}
