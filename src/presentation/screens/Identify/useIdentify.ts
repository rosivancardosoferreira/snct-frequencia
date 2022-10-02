import { useRoute } from "@react-navigation/core";
import { useNavigation } from "@react-navigation/native";
import { IRootRouteProps, IRouterProps } from "_types/iNavigate";

export function useIdentify() {
  const route = useRoute<IRootRouteProps<"Identify">>();
  const navigation = useNavigation<IRouterProps>();
  const id_session = route?.params?.id_session;
  const titleActivity = route?.params?.title;
  const timesActivity = route?.params?.times;

  function goBack() {
    navigation.goBack();
  }

  return {
    id_session,
    titleActivity,
    goBack,
    timesActivity: timesActivity ?? [],
    shouldRenderDays: timesActivity.length > 1
  };
}
