import { useSelector } from "react-redux";
import themes from "presentation/styles/defaultTheme";
import { selectAwaitRequest } from "store/slices/awaitRequest";

export function useAwaitRequest() {
  const { type, isOpen } = useSelector(selectAwaitRequest);
  const messages = {
    await: {
      title: "Aguarde",
      subTitle: "Buscando dados..."
    },
    success: {
      title: "",
      subTitle: ""
    },
    error: {
      title: "Ooops!",
      subTitle: "Não foi possível trazer os dados."
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

  return {
    typeColors,
    typeMessage,
    shouldRenderSpinner: type === "await",
    isError: type === "error",
    isOpen
  };
}
