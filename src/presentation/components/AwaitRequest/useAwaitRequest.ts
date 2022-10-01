import themes from "presentation/styles/defaultTheme";
import { iTypeMessage, iTypeStatusBar } from "_types/iAwaitRequest";

export function useAwaitRequest() {
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

  function typeColors({ type }: iTypeStatusBar) {
    return colorsStatusBar[type];
  }

  function typeMessage({ type }: iTypeMessage) {
    return messages[type];
  }

  return { typeColors, typeMessage };
}
