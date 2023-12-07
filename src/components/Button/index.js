import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export default function SaveButton({ onPress }) {
  return (
    <StyledButton onPress={onPress}>
      <Text style={{ color: "white", fontWeight: "bold" }}>Salvar</Text>
    </StyledButton>
  );
}

const StyledButton = styled(TouchableOpacity)`
  width: 85%;
  height: 48px;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #006ffd;
  border-radius: 10px;
`;
