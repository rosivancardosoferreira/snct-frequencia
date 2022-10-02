export interface iHeaderActivity {
  title: string;
}

interface iTimes {
  id_event: number;
  id_session: number;
  id_time: number;
  date: string;
  start_time: string;
  end_time: string;
}
export interface iCardItem {
  title: string;
  type: string;
  times: iTimes[];
}
