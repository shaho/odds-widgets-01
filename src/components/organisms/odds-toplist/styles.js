import styled from "styled-components";

export const ToplistWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 16px 0 8px 0;
  max-height: 165px;
  overflow: hidden;
  transition: max-height 0.5s ease-out;
  &.open {
    max-height: 2000px;
    transition: max-height 0.5s ease-in;
  }
`;

export const Timestamp = styled.div`
  width: 100%;
  font-size: 12px;
  line-height: 18px;
  color: #354a60;
  margin: 8px 0;
  text-align: center;
`;

export const SeeMore = styled.button`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  &:focus {
    background: transparent;
    border: none;
    outline: none;
  }
  span {
    margin-right: 12px;
    font-size: 16px;
    color: #0079ff;
    font-weight: 500;
  }
  &.open {
    span:last-child {
      transform: rotate(0deg);
    }
  }
`;
