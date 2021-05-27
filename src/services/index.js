import axios from "axios";

import { EVENTS_API_URL } from "./config";

axios.defaults.baseURL = EVENTS_API_URL;

/* -------------------------------------------------------------------------- */
/*                             GET THREE WAY EVENT                            */
/* -------------------------------------------------------------------------- */
export const getThreeWayEvent = async (eventID = 3560740) => {
  const response = await axios.get(`/events/${eventID}/1x2`, {
    // headers: {
    //   "X-API-KEY": AUTH_TOKEN,
    // },
  });
  return response.data;
};
