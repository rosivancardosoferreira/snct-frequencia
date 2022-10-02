import { LIST__ALL__ACTIVITYS } from "config/axios/api";
import { baseAPI } from "config/axios/baseAPI";
import { AllActivity } from "_types/iServiceActivitys";

export async function serviceAllActivitys(): Promise<AllActivity | []> {
  try {
    const result = await baseAPI.get(LIST__ALL__ACTIVITYS);
    console.log(JSON.stringify(result, null, 2));
  } catch (e: any) {
    console.log(e);
    return [];
  } finally {
    return [];
  }
}
