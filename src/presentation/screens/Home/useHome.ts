import { useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { serviceAllActivitys } from "services/activitys";
import {
  changeAwaitRequest,
  resetAwaitRequest,
  selectAwaitRequest
} from "store/slices/awaitRequest";
import { changeAllActivitys } from "store/slices/allActivitys";
import { changeModalAlert } from "store/slices/modalAlert";

export function useHome() {
  const dispatch = useDispatch();
  const { type } = useSelector(selectAwaitRequest);
  const isError = type === "error";

  const getAllActivity = useCallback(async () => {
    dispatch(changeAwaitRequest({ type: "await", isOpen: true }));
    try {
      const result = await serviceAllActivitys();
      dispatch(resetAwaitRequest());
      dispatch(changeAllActivitys(result.data.data));
    } catch (e: any) {
      dispatch(
        changeAwaitRequest({
          type: "error",
          message: "Não foi possivel trazer os dados",
          isOpen: true
        })
      );
    }
  }, [dispatch]);

  useEffect(() => {
    getAllActivity();
  }, [getAllActivity]);

  function onActionRequest() {
    if (isError) {
      getAllActivity();
    }
    return 0;
  }

  function testeOpemmodal() {
    dispatch(
      changeModalAlert({
        isOpen: true,
        title: "teste",
        message: "bora de teste"
      })
    );
  }

  return {
    onActionRequest: isError ? onActionRequest : undefined,
    isOnline: false,
    testeOpemmodal
  };
}
