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
        <PageTitle pageTitleText={customer.customerName} />
      </Header>
      <CustomerInfoContent>
        <CustomerData>
          <CustomerDataTitle>CNPJ</CustomerDataTitle>
          <CustomerDataText>{customer.customerCnpj}</CustomerDataText>
        </CustomerData>
        <CustomerData>
          <CustomerDataTitle>Telefone</CustomerDataTitle>
          <CustomerDataText>{customer.customerPhoneNumber}</CustomerDataText>
        </CustomerData>
        <CustomerData>
          <CustomerDataTitle>CEP</CustomerDataTitle>
          <CustomerDataText>{customer.customerZipCode}</CustomerDataText>
        </CustomerData>
        <CustomerData>
          <CustomerDataTitle>Estado</CustomerDataTitle>
          <CustomerDataText>{customer.customerState}</CustomerDataText>
        </CustomerData>
        <CustomerData>
          <CustomerDataTitle>Cidade</CustomerDataTitle>
          <CustomerDataText>{customer.customerCity}</CustomerDataText>
        </CustomerData>
        <CustomerData>
          <CustomerDataTitle>Bairro</CustomerDataTitle>
          <CustomerDataText>{customer.customerNeighborhood}</CustomerDataText>
        </CustomerData>
        <CustomerData>
          <CustomerDataTitle>Endereço</CustomerDataTitle>
          <CustomerDataText>{customer.customerStreet}</CustomerDataText>
        </CustomerData>
        <CustomerData>
          <CustomerDataTitle>Número</CustomerDataTitle>
          <CustomerDataText>{customer.customerNumber}</CustomerDataText>
        </CustomerData>
        <CustomerData>
          <CustomerDataTitle>Complemento</CustomerDataTitle>
          <CustomerDataText>{customer.customerComplement}</CustomerDataText>
        </CustomerData>
      </CustomerInfoContent>
    </Container>
  );
}

export { CustomerDetail };
