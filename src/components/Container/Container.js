import { ScrollView, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

const StyledContainer = styled(View)`
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const ListItemContainer = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 72px;
`;

const ScrollContainer = styled(ScrollView)`
  background-color: white;
`;

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export { Container, ListItemContainer, ScrollContainer };
