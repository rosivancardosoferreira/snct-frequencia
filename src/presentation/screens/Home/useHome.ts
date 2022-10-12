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
import { serviceAllParticipants } from "services/participants";
import { changeAllParticipants } from "store/slices/participants";

export function useHome() {
  const dispatch = useDispatch();
  const { type } = useSelector(selectAwaitRequest);
  const isError = type === "error";

  const getAllActivityAndParticipants = useCallback(async () => {
    dispatch(changeAwaitRequest({ type: "await", isOpen: true }));
    try {
      const resultAcvitys = await serviceAllActivitys();
      const resultParticipants = await serviceAllParticipants();
      dispatch(changeAllParticipants(resultParticipants.data.data));
      dispatch(changeAllActivitys(resultAcvitys.data.data));
      dispatch(resetAwaitRequest());
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
    getAllActivityAndParticipants();
  }, [getAllActivityAndParticipants]);

  function onActionRequest() {
    if (isError) {
      getAllActivityAndParticipants();
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
