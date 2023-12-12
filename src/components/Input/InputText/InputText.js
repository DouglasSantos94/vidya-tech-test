import { TextInput } from "react-native";
import styled from "styled-components/native";

const InputText = styled(TextInput)`
  width: 100%;
  height: 48px;
  border: solid ${({ focused }) => (focused ? "1.5px #006FFD" : "1px #C5C6CC")};
  border-radius: 12px;
  padding: 12px 16px;
`;

export { InputText };
