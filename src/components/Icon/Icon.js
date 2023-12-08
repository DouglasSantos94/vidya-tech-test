import { Image, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const BackIconContainer = styled(TouchableOpacity)`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 0;
`;

function BackIcon({ onPress }) {
  return (
    <BackIconContainer onPress={onPress}>
      <Image source={require("../../assets/left-button.png")} />
    </BackIconContainer>
  );
}

export { BackIcon };
