import styled from "styled-components";

export const Select = styled.div`
  width: 200px;
  height: 40px;
  position: relative;
  border-bottom: 2px solid #021d38;
  filter: drop-shadow(0px 2px 8px rgba(2, 29, 56, 0.15));
  background-color: #fff;
  display: flex;
  padding-left: 16px;
  align-items: center;
  > span:last-child {
    position: absolute;
    right: 17px;
    top: 17px;
  }
`;

export const Text = styled.span`
  font-size: 16px;
  width: calc(100% - 30px);
  line-height: 23px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
