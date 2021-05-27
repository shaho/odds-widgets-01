import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

import ProviderRow from "../../../components/molecules/provider-row";
import Arrow from "../../../components/atoms/arrow";
import ToplistHeader from "../../../components/atoms/toplist-header";
import useThreeWay from "../../../hooks/useThreeWay";
import { setHighlightIn1x2 } from "../../../helpers/find-the-highest-odd";

import { ToplistWrapper, Timestamp, SeeMore } from "./styles";

export default function OddsToplist({ oddType = "1x2", mockData = [] }) {
  const boxRef = useRef(null);
  const btnRef = useRef(null);
  const labelRef = useRef(null);
  const timestampRef = useRef(null);

  const { data, error, isLoading, isError } =
    mockData.length > 0
      ? {
          data: mockData,
          error: { message: "" },
          isLoading: false,
          isError: false,
        }
      : // eslint-disable-next-line react-hooks/rules-of-hooks
        useThreeWay(3560740);

  const handleClick = () => {
    boxRef.current.classList.toggle("open");
    btnRef.current.classList.toggle("open");
    if (labelRef.current.innerText === "See less offers") {
      labelRef.current.innerText = "See more offers";
    } else {
      labelRef.current.innerText = "See less offers";
    }
  };

  useEffect(() => {
    const today = new Date();

    data &&
      (timestampRef.current.innerText = `Last Updated: Today, at ${today.getHours()}:${today.getMinutes()}`);
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <>
      <ToplistWrapper ref={boxRef}>
        <ToplistHeader oddType={oddType} />
        {setHighlightIn1x2(data)?.map((item) => (
          <ProviderRow key={item.odds_provider.id} oddsData={item.offers} />
        ))}
      </ToplistWrapper>

      <Timestamp ref={timestampRef}>Last Updated: Today, at 00:00</Timestamp>

      <SeeMore type="button" ref={btnRef} onClick={() => handleClick()}>
        <span ref={labelRef}>See more offers</span>
        <Arrow color="blue" direction="down" />
      </SeeMore>
    </>
  );
}

OddsToplist.propTypes = {
  oddType: PropTypes.string,
  mockData: PropTypes.array,
};
