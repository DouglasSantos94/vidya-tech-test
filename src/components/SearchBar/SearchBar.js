import { SearchBarContainer, SearchIcon, SearchText } from "./SearchBar.styles";

function SearchBar() {
  return (
    <SearchBarContainer>
      <SearchIcon source={require("../../assets/Search.png")} />
      <SearchText placeholder="Pesquisar" />
    </SearchBarContainer>
  );
}

export { SearchBar };
