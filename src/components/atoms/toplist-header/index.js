import PropTypes from "prop-types";

import { Row, OddTitle, OddsRow } from "./styles";

export default function ToplistHeader({ oddType = "1x2" }) {
  return (
    <Row>
      {oddType === "1x2" && (
        <OddsRow>
          <OddTitle>1</OddTitle>
          <OddTitle>x</OddTitle>
          <OddTitle>2</OddTitle>
        </OddsRow>
      )}
    </Row>
  );
}

ToplistHeader.propTypes = {
  oddType: PropTypes.string,
};
