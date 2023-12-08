import { View } from "react-native";
import styled from "styled-components/native";

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled(View)`
  background-color: #ffffff;
  flex: 1;
  width: 100%;
  align-items: center;
`;

export { Container };
