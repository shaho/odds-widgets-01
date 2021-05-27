import PropTypes from "prop-types";

import OddsSelect from "../../../components/atoms/odds-select";
import { pad } from "../../../helpers/pad";

import { Wrapper, TopBox, TitleBox, DateBox, SelectBox } from "./styles";

export default function Header({ title = "", date = "" }) {
  const eventDate = new Date(date);

  return (
    <Wrapper>
      <TopBox>
        <TitleBox>
          <h2>{title}</h2>
        </TitleBox>
        <DateBox>
          <span>{`${pad(eventDate.getMonth() + 1)}/${pad(
            eventDate.getDate(),
          )}`}</span>
          <span>{`${pad(
            eventDate.getHours(),
          )}:${eventDate.getMinutes()}`}</span>
        </DateBox>
      </TopBox>
      <SelectBox>
        <OddsSelect />
      </SelectBox>
    </Wrapper>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
};
