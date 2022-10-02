import { LIST__ALL__ACTIVITYS } from "config/axios/api";
import { baseAPI } from "config/axios/baseAPI";
import { AllActivity } from "_types/iServiceActivitys";

export async function serviceAllActivitys() {
  const result = await baseAPI.get<AllActivity>(LIST__ALL__ACTIVITYS);
  return result;
}
