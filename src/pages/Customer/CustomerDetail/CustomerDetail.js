import { useSelector } from "react-redux";
import {
  CustomerData,
  CustomerDataTitle,
  CustomerDataText,
  CustomerInfoContent,
} from "./CustomerDetail.styles";
import { BackIcon, Container, Header, PageTitle } from "../../../components";

function CustomerDetail({ route, navigation }) {
  const { id } = route.params;
  const customer = useSelector((state) =>
    state.customer.customers.find((customer) => customer.id == id)
  );

  return (
    <Container>
      <Header>
        <BackIcon onPress={() => navigation.goBack()} />
        <PageTitle pageTitleText={customer.name} />
      </Header>
      <CustomerInfoContent>
        <CustomerData>
          <CustomerDataTitle>CNPJ</CustomerDataTitle>
          <CustomerDataText>00000000</CustomerDataText>
        </CustomerData>
        <CustomerData>
          <CustomerDataTitle>Telefone</CustomerDataTitle>
          <CustomerDataText>949521984</CustomerDataText>
        </CustomerData>
        <CustomerData>
          <CustomerDataTitle>CEP</CustomerDataTitle>
          <CustomerDataText>987651</CustomerDataText>
        </CustomerData>
        <CustomerData>
          <CustomerDataTitle>Estado</CustomerDataTitle>
          <CustomerDataText>SC</CustomerDataText>
        </CustomerData>
        <CustomerData>
          <CustomerDataTitle>Cidade</CustomerDataTitle>
          <CustomerDataText>Gabir</CustomerDataText>
        </CustomerData>
        <CustomerData>
          <CustomerDataTitle>Bairro</CustomerDataTitle>
          <CustomerDataText>Tapera</CustomerDataText>
        </CustomerData>
        <CustomerData>
          <CustomerDataTitle>Endereço</CustomerDataTitle>
          <CustomerDataText>Rua 2</CustomerDataText>
        </CustomerData>
        <CustomerData>
          <CustomerDataTitle>Número</CustomerDataTitle>
          <CustomerDataText>dasds</CustomerDataText>
        </CustomerData>
      </CustomerInfoContent>
    </Container>
  );
}

export { CustomerDetail };
