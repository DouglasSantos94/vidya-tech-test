import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

const TouchableListItem = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 72px;
`;

const ListItem = styled(View)`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 72px;
`;

export { ListItem, TouchableListItem };
