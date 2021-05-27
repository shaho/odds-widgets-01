import PropTypes from "prop-types";

import OddCell from "../../../components/atoms/odd-cell";

import { Row, ProviderLogo, OddsRow } from "./styles";

export default function ProviderRow({ provider, oddsData = [] }) {
  return (
    <Row>
      <ProviderLogo
        href={provider?.link || "#"}
        rel="noopener noreferrer nofollow"
        target="_blank"
      >
        <img src={"/images/bet365.png"} alt={"bet365"} width={53} height={44} />
      </ProviderLogo>
      <OddsRow>
        {oddsData.map((item, index) => (
          <OddCell
            key={index}
            link={`https://bet365.com/${item.coupon_key}`}
            odds={item.odds}
            odds_old={item.odds_old}
            isDisabled={item.is_live !== "no"}
            isHighlighted={item.isHighlighted}
          />
        ))}
      </OddsRow>
    </Row>
  );
}

ProviderRow.propTypes = {
  provider: PropTypes.shape({}),
  oddsData: PropTypes.arrayOf(PropTypes.shape({})),
};
