import Arrow from "../arrow";

import { Select, Text } from "./styles";

export default function OddsSelect() {
  return (
    <Select>
      <Text>1x2</Text>
      <Arrow direction="down" color="black" />
    </Select>
  );
}
