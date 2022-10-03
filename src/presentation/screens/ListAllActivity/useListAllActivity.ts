import { useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { serviceAllActivitys } from "services/activitys";
import {
  changeAwaitRequest,
  resetAwaitRequest
} from "store/slices/awaitRequest";
import {
  changeAllActivitys,
  selectAllActivitys
} from "store/slices/allActivitys";

export function useListAllActivity() {
  const dispatch = useDispatch();
  const dataAllactivitys = useSelector(selectAllActivitys);
  const [isError, setIsError] = useState(false);

  const getAllActivity = useCallback(async () => {
    dispatch(changeAwaitRequest({ type: "await", isOpen: true }));
    try {
      const result = await serviceAllActivitys();
      dispatch(resetAwaitRequest());
      dispatch(changeAllActivitys(result.data.data));
    } catch (e: any) {
      dispatch(changeAwaitRequest({ type: "error", isOpen: true }));
      setIsError(true);
    }
  }, [dispatch]);

  useEffect(() => {
    getAllActivity();
  }, [getAllActivity]);

  function onActionRequest() {
    if (isError) {
      getAllActivity();
      setIsError(false);
    }
    return 0;
  }

  return {
    dataAllactivitys,
    onActionRequest: isError ? onActionRequest : undefined
  };
}
