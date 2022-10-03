import Moment from "moment";
import { CHECKIN__PARTICIPANTS } from "config/axios/api";
import { baseAPI } from "config/axios/baseAPI";
import { iServiceCheckinParticipants } from "_types/iServiceCheckinParticipants";

export async function serviceCheckinParticipants({
  id_attendees,
  id_session
}: iServiceCheckinParticipants) {
  const payload = {
    sessions: [
      {
        id_attendees,
        id_session,
        checkin: 1,
        checkin_date: Moment()
      }
    ]
  };
  await baseAPI.post(CHECKIN__PARTICIPANTS, payload);
}
