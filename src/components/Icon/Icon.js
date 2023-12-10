import { Image, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import Icon from "@expo/vector-icons/MaterialIcons";

const BackIconContainer = styled(TouchableOpacity)`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 0;
`;

const CloseIconContainer = styled(TouchableOpacity)`
  z-index: 1;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 54px;
  left: 24px;
`;

function BackIcon({ onPress }) {
  return (
    <BackIconContainer onPress={onPress}>
      <Image source={require("../../assets/left-button.png")} />
    </BackIconContainer>
  );
}

function CloseIcon({ onPress }) {
  return (
    <CloseIconContainer onPress={onPress}>
      <Icon name="close" size={20} color="#2F3036" />
    </CloseIconContainer>
  );
}

export { BackIcon, CloseIcon };
