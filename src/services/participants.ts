import { LIST__ALL__PARTICIPANTS } from "config/axios/api";
import { baseAPI } from "config/axios/baseAPI";
import { AllParticipants } from "_types/iServiceParticipants";

export async function serviceAllParticipants() {
  const result = await baseAPI.get<AllParticipants>(LIST__ALL__PARTICIPANTS);
  return result;
}
