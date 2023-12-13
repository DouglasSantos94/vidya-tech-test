import { Text } from "react-native";
import styled from "styled-components/native";

const ProductDescriptionText = styled(Text)`
  text-align: justify;
  color: #71727a;
  width: 100%;
  font-family: ${(props) => props.fontFamily};
`;

export { ProductDescriptionText };
