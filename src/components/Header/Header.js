import { View } from "react-native";
import styled from "styled-components/native";

function Header({ children }) {
  return <StyledHeader>{children}</StyledHeader>;
}

const StyledHeader = styled(View)`
  margin-top: 30px;
`;

export { Header };
