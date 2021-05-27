import styled from "styled-components";

const colors = {
  green: "#0cd722",
  red: "#ff0042",
  blue: "#0079ff",
  black: "#021d38",
};

const directions = {
  up: "0",
  down: "180deg",
  right: "90deg",
  left: "270deg",
};

export const ArrowItem = styled.span`
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 6px solid ${(props) => colors[props.color]};
  border-radius: 3px;
  transform: rotate(${(props) => directions[props.direction]});
`;
