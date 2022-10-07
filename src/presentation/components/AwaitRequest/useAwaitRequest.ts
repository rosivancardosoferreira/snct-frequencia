import { useDispatch, useSelector } from "react-redux";
import {
  resetAwaitRequest,
  selectAwaitRequest
} from "store/slices/awaitRequest";
import themes from "presentation/styles/defaultTheme";

export function useAwaitRequest() {
  const { type, isOpen, title, message } = useSelector(selectAwaitRequest);
  const dispatch = useDispatch();
  // const { type, isOpen, title, message } = {
  //   type: "await",
  //   isOpen: true,
  //   title: "adsads",
  //   message: "dsadsa"
  // };
  const messages = {
    await: {
      title: title ?? "Aguarde",
      subTitle: message ?? "Buscando dados..."
    },
    success: {
      title: title ?? "Sucesso!",
      subTitle: message ?? "Tudo certo por aqui."
    },
    error: {
      title: title ?? "Ooops!",
      subTitle: message ?? "Não foi realizar está ação."
    }
  };
  const colorsStatusBar = {
    await: {
      statusColor: themes.colors.darkBlue,
      background: themes.colors.primaryBlue
    },
    success: {
      statusColor: themes.colors.primaryGreen,
      background: themes.colors.primaryGreen
    },
    error: {
      statusColor: themes.colors.darkRed,
      background: themes.colors.primaryRed
    }
  };

  function typeColors() {
    return colorsStatusBar[type];
  }

  function typeMessage() {
    return messages[type];
  }

  function onDismiss() {
    dispatch(resetAwaitRequest());
  }

  return {
    typeColors,
    typeMessage,
    onDismiss,
    type,
    shouldRenderSpinner: type === "await",
    isOpen
  };
}
