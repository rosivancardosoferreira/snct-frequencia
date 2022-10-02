export interface AllActivityItem {
  id_session: number;
  id_event: number;
  title: string;
  description: string;
  credit_hour: null;
  capacity: null;
  ticket_price: number;
  type: string;
  venue: null;
  tags: null;
  speakers: [];
  times: [
    {
      id_event: number;
      id_session: number;
      id_time: number;
      date: string;
      start_time: string;
      end_time: string;
    }
  ];
}

export interface AllActivity {
  data: AllActivityItem[];
  count: number;
}

export interface TodayActivitySessions {
  id_session: number;
  title: string;
  title_schedule: string;
  venue: null;
  description: string;
  tags: null;
  date: string;
  date_UTC: string;
  start_time: string;
  end_time: string;
  speakers: [];
  all_dates: [
    {
      date: string;
      day: string;
      start_time: string;
      end_time: string;
    }
  ];
}

export interface TodayActivityItem {
  id_schedule: string;
  date: string;
  day: string;
  sessions: TodayActivitySessions[];
}

export interface TodaySessions {
  data: TodayActivityItem[];
  count: number;
}
