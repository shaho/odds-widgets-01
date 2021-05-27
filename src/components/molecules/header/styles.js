import styled from "styled-components";

export const Wrapper = styled.div``;

export const TopBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleBox = styled.div`
  line-break: auto;
  h2 {
    line-height: 23px;
    font-size: 16px;
    color: #021d38;
    margin: 0;
  }
`;

export const DateBox = styled.div`
  display: flex;
  color: #354a60;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 40px;
  background-color: #e5e8eb;
  height: 44px;
  padding: 4px;
  font-size: 12px;
`;

export const SelectBox = styled.div`
  margin-top: 8px;
  margin-bottom: 19px;
`;
