import { useQuery } from "react-query";
import PropTypes from "prop-types";

import { getThreeWayEvent } from "../services";

export default function useThreeWay(
  eventId,
  onWindowFocus = false,
  refetchInterval = 60000,
) {
  return useQuery(["event", eventId], () => getThreeWayEvent(eventId), {
    refetchOnWindowFocus: onWindowFocus,
    refetchInterval,
  });
}

useThreeWay.propTypes = {
  eventId: PropTypes.number,
  onWindowFocus: PropTypes.boolean,
  refetchInterval: PropTypes.number,
};
