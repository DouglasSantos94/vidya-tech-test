import {
  CustomerData,
  CustomerDataTitle,
  CustomerDataText,
  CustomerInfoContainer,
  CustomerInfoContent,
  CustomerInfoNav,
  PageTitle,
} from "./style";

export default function CustomerView() {
  return (
    <CustomerInfoContainer>
      <CustomerInfoNav>
        <PageTitle>Nome do cliente</PageTitle>
      </CustomerInfoNav>
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
    </CustomerInfoContainer>
  );
}
