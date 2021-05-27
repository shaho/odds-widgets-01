import PropTypes from "prop-types";

import { Wrapper, TextInfo, Button } from "./styles";

export default function Footer({ inactiveBets = false, link = "" }) {
  if (!inactiveBets) return null;
  return (
    inactiveBets && (
      <Wrapper>
        <TextInfo>Odds are no longer available for this event.</TextInfo>
        <Button href={link}>See more +</Button>
      </Wrapper>
    )
  );
}

Footer.propTypes = {
  inactiveBets: PropTypes.bool,
  link: PropTypes.string,
};
