import Config from "react-native-config";

import axios from "axios";
export const baseAPI = axios.create({
  baseURL: Config.EVEN_BASE_URL,
  headers: {
    "Authorization-Token": Config.EVEN_TOKEN
  }
});
