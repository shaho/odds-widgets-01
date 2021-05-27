import PropTypes from "prop-types";

import { ArrowItem } from "./styles";

export default function Arrow({ direction = "up", color = "green" }) {
  return <ArrowItem color={color} direction={direction} />;
}

Arrow.propTypes = {
  direction: PropTypes.oneOf(["up", "down", "left", "right"]),
  color: PropTypes.oneOf(["green", "red", "blue", "black"]),
};
