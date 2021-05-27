import useThreeWay from "hooks/useThreeWay";

export default function Test2() {
  const { data, error, isLoading, isError } = useThreeWay(3560740);

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
        <h1>API Test</h1>
      </div>
    </>
  );
}
