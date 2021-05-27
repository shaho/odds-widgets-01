import styled, { css } from "styled-components";

export const Cell = styled.a`
  background: #e5e8eb;
  height: 44px;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  color: #021d38;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  > span.up,
  > span.down {
    position: absolute;
    right: 7px;
    top: 9px;
    display: flex;
  }
  ${(props) =>
    props.isHighlighted &&
    css`
      background: #e2f0ff;
      border: 2px solid #0079ff;
    `}
  ${(props) =>
    props.isDisabled &&
    css`
      color: #b3bbc3;
      cursor: not-allowed;
      pointer-events: none;
    `}
`;

export const Odd = styled.span`
  opacity: 0;
`;
