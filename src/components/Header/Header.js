import { View } from "react-native";
import styled from "styled-components/native";

function Header() {
  return <StyledHeader />;
}

const StyledHeader = styled(View)`
  margin-top: 30px;
`;

export { Header };
