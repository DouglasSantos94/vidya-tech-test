import { TextInput, View } from "react-native";
import styled from "styled-components/native";

function SearchBar() {
  return (
    <SearchBarContainer>
      <View></View>
      <TextInput></TextInput>
    </SearchBarContainer>
  );
}

const SearchBarContainer = styled(View)`
  width: 85%;
  height: 44px;
  background-color: #f8f9fe;
  border-radius: 8px;
`;

export { SearchBar };
