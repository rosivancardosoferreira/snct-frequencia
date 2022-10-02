import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { serviceAllActivitys } from "services/activitys";
import {
  changeAwaitRequest,
  resetAwaitRequest
} from "store/slices/awaitRequest";

export function useListAllActivity() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("chaam");
    async function getAllActivity() {
      dispatch(changeAwaitRequest({ type: "await", isOpen: true }));
      await serviceAllActivitys();
      dispatch(resetAwaitRequest());
    }
    getAllActivity();
  }, [dispatch]);

  return 0;
}
