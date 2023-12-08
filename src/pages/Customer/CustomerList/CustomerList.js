import { Container, Header, PageTitle, SearchBar } from "../../../components";

function CustomerList() {
  return (
    <Container>
      <Header>
        <PageTitle pageTitleText={"Clientes"} />
      </Header>
      <SearchBar />
    </Container>
  );
}

export { CustomerList };
