import { Text } from "react-native";
import styled from "styled-components/native";

export default function InputLabel({ labeltext }) {
  return <LabelText>{labeltext}</LabelText>;
}

const LabelText = styled(Text)`
  font-size: 12px;
  color: #2f3036;
  font-weight: bold;
`;
