import { TextInput } from "react-native";
import styled from "styled-components/native";

function generateBorderColor(focused, hasError) {
  if (hasError) return "solid 1.5px #db1d39";
  if (focused) return "solid 1.5px #006FFD";
  return "solid 1px #C5C6CC";
}

const InputText = styled(TextInput)`
  width: 100%;
  height: 48px;
  border: ${({ focused, hasError }) => generateBorderColor(focused, hasError)};
  border-radius: 12px;
  padding: 12px 16px;
`;

export { InputText };
