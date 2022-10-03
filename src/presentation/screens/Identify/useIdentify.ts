import { useRoute } from "@react-navigation/core";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { serviceCheckinParticipants } from "services/checkin";
import { IRootRouteProps, IRouterProps } from "_types/iNavigate";
import {
  changeAwaitRequest,
  resetAwaitRequest
} from "store/slices/awaitRequest";
import { iParticipants } from "_types/iParticipants";
import { iIdentify } from "_types/iIdentify";

export function useIdentify() {
  const route = useRoute<IRootRouteProps<"Identify">>();
  const navigation = useNavigation<IRouterProps>();
  const [checkinCode, setCheckinCode] = useState("");
  const [suggestionParticipants, setSuggestionParticipants] = useState<
    iParticipants[]
  >([]);

  const dispatch = useDispatch();
  const id_session = route?.params?.id_session;
  const titleActivity = route?.params?.title;
  const timesActivity = route?.params?.times;

  function onActionSucess() {
    setCheckinCode("");
    setSuggestionParticipants([]);
    dispatch(resetAwaitRequest());
  }

  function goBack() {
    navigation.goBack();
  }

  function onSearchParticipants(value: string) {
    const regex = new RegExp(value, "g");
    const data = [
      {
        id_attendees: 1766413,
        id_event: 278282,
        checkin_code: 31725790,
        name: "Rosivan Cardoso Ferreira",
        bagde_name: "Rosivan Cardoso Ferreira",
        email: "rosivancardoso767@gmail.com",
        gender: "M",
        photo: "",
        document: "032.983.032-59",
        confirmed: false
      },
      {
        id_attendees: 1797476,
        id_event: 278282,
        checkin_code: 31898795,
        name: "Josilene Vitória dos Santos da Silva",
        bagde_name: "Josilene Vitória dos Santos da Silva",
        email: "josilenevitoriasilva@gmail.com",
        gender: "F",
        photo: "",
        document: "029.363.502-12",
        confirmed: true
      },
      {
        id_attendees: 1972973,
        id_event: 278282,
        checkin_code: 31903406,
        name: "Rosivan Ferreira",
        bagde_name: "Rosivan Ferreira",
        email: "cardosorosivan001@gmail.com",
        gender: "M",
        photo: "",
        document: "",
        confirmed: true
      },
      {
        id_attendees: 1831028,
        id_event: 278282,
        checkin_code: 31903928,
        name: "Josias Braga Pena",
        bagde_name: null,
        email: "pjosiaspena8@gmail.com",
        gender: "M",
        photo: null,
        document: "001.476.572-10",
        confirmed: true
      }
    ];

    const participants = data.filter(e =>
      e.checkin_code.toString().match(regex)
    );
    setSuggestionParticipants(participants as iParticipants[]);
  }

  function onChangeInput(value: string) {
    setCheckinCode(value);
    if (value.length > 0) {
      onSearchParticipants(value);
    } else {
      if (suggestionParticipants.length > 0) {
        setSuggestionParticipants([]);
      }
    }
  }

  async function onCheckinParticipants({ id_attendees }: iIdentify) {
    dispatch(
      changeAwaitRequest({
        type: "await",
        isOpen: true,
        title: "Enviando dados",
        message: "Aguarde um instante"
      })
    );
    try {
      await serviceCheckinParticipants({
        id_session,
        id_attendees: id_attendees
      });
      dispatch(
        changeAwaitRequest({
          type: "success",
          isOpen: true,
          title: "Sucesso!",
          message: "Registrado com sucesso."
        })
      );
    } catch (e: any) {
      dispatch(
        changeAwaitRequest({
          type: "error",
          isOpen: true,
          message: "Falha na comunicação."
        })
      );
    }
  }

  return {
    goBack,
    onCheckinParticipants,
    onSearchParticipants,
    onChangeInput,
    onActionSucess,
    checkinCode,
    titleActivity,
    timesActivity: timesActivity ?? [],
    shouldRenderDays: timesActivity.length > 1,
    suggestionParticipants,
    isOpenSuggestion: suggestionParticipants.length > 0
  };
}
