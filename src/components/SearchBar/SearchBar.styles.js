import { Image, TextInput, View } from "react-native";
import styled from "styled-components/native";

const SearchBarContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 85%;
  height: 44px;
  padding: 16px;
  background-color: #f8f9fe;
  border-radius: 8px;
`;

const SearchIcon = styled(Image)`
  width: 16px;
  height: 16px;
  margin-right: 16px;
`;

const SearchText = styled(TextInput)`
  width: 100%;
  height: 44px;
`;

export { SearchBarContainer, SearchIcon, SearchText };
