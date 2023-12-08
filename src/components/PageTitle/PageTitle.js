import { Text } from "react-native";
import styled from "styled-components/native";

function PageTitle({ pageTitleText }) {
  return <StyledPageTitle>{pageTitleText}</StyledPageTitle>;
}

const StyledPageTitle = styled(Text)`
  color: #1f2024;
  font-size: 14px;
  font-weight: bold;
`;

export { PageTitle };
