import { useDispatch, useSelector } from "react-redux";
import { resetModalAlert, selectModalAlert } from "store/slices/modalAlert";

export function useModalAlert() {
  const { isOpen, title, message, textAction, textActionCancel } =
    useSelector(selectModalAlert);
  const dispatch = useDispatch();
  function onDismiss() {
    dispatch(resetModalAlert());
  }
  return {
    onDismiss,
    isOpen,
    title: title ?? "sem tittutlo",
    message: message ?? "sem message",
    textAction: textAction ?? "Ok",
    textActionCancel: textActionCancel ?? "Fechar"
  };
}
