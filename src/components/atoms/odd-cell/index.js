import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import Arrow from "../arrow";
import { ToAmerican } from "../../../helpers/odds-converter";

import { Cell, Odd } from "./styles";

export default function OddCell({
  odds = "-.-",
  odds_old = "",
  link = "",
  isDisabled = false,
  isHighlighted = false,
}) {
  const [isUp, setIsUp] = useState(false);
  const [isDown, setIsDown] = useState(false);
  const isAmerican = false;

  const oddRef = useRef(null);
  useEffect(() => {
    if (Number(odds) > Number(odds_old)) setIsUp(true);
    if (Number(odds) < Number(odds_old)) setIsDown(true);
    if (Number(odds) === Number(odds_old)) {
      setIsUp(false);
      setIsDown(false);
    }
    // Added logic to fade-out fade-in odds on odds change
    oddRef.current.classList.remove("odds-fade-in");
    setTimeout(() => {
      oddRef.current.classList.add("odds-fade-in");
    }, 100);
  }, [odds, odds_old]);

  return (
    <Cell
      href={link}
      isHighlighted={isHighlighted}
      isDisabled={isDisabled}
      rel="noopener noreferrer nofollow"
      target="_blank"
    >
      <Odd className="value" ref={oddRef}>
        {isAmerican ? ToAmerican(odds) : odds}
      </Odd>
      {isUp && (
        <span className="up">
          <Arrow color="green" direction="up" />
        </span>
      )}
      {isDown && (
        <span className="down">
          <Arrow color="red" direction="down" />
        </span>
      )}
    </Cell>
  );
}

OddCell.propTypes = {
  odds: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  odds_old: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  link: PropTypes.string,
  isDisabled: PropTypes.bool,
  isHighlighted: PropTypes.bool,
};
