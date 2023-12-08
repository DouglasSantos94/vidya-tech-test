import { Image, View } from "react-native";
import styled from "styled-components/native";

function Header({ children }) {
  return <StyledHeader>{children}</StyledHeader>;
}

const StyledHeader = styled(View)`
  width: 85%;
  margin-top: 20px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export { Header };
