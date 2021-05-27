import { useQuery } from "react-query";

import { dummyData } from "fixtures/1x2";

export default function Test1() {
  const { data, error, isLoading, isError } = useQuery(
    "event",
    () => dummyData(),

    {
      refetchOnWindowFocus: false,
    },
  );

  console.log(data);

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <h1>Fixture Test</h1>
      </div>
    </>
  );
}
