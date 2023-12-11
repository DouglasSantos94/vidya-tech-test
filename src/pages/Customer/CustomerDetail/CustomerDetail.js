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
          <CustomerDataText>{customer.cnpj}</CustomerDataText>
        </CustomerData>
        <CustomerData>
          <CustomerDataTitle>Telefone</CustomerDataTitle>
          <CustomerDataText>{customer.phoneNumber}</CustomerDataText>
        </CustomerData>
        <CustomerData>
          <CustomerDataTitle>CEP</CustomerDataTitle>
          <CustomerDataText>{customer.zipCode}</CustomerDataText>
        </CustomerData>
        <CustomerData>
          <CustomerDataTitle>Estado</CustomerDataTitle>
          <CustomerDataText>{customer.customerState}</CustomerDataText>
        </CustomerData>
        <CustomerData>
          <CustomerDataTitle>Cidade</CustomerDataTitle>
          <CustomerDataText>{customer.city}</CustomerDataText>
        </CustomerData>
        <CustomerData>
          <CustomerDataTitle>Bairro</CustomerDataTitle>
          <CustomerDataText>{customer.neighborhood}</CustomerDataText>
        </CustomerData>
        <CustomerData>
          <CustomerDataTitle>Endereço</CustomerDataTitle>
          <CustomerDataText>{customer.street}</CustomerDataText>
        </CustomerData>
        <CustomerData>
          <CustomerDataTitle>Número</CustomerDataTitle>
          <CustomerDataText>{customer.number}</CustomerDataText>
        </CustomerData>
      </CustomerInfoContent>
    </Container>
  );
}

export { CustomerDetail };
