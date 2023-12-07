import { Button, TextInput, View } from "react-native";
import { CustomerContainer, CustomerNav, PageTitle } from "../style";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components/native";
import Input from "../../../components/Input";

export default function CustomerForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      customerName: "",
      customerCnpj: "",
      customerPhoneNumber: "",
      customerZipCode: "",
      customerState: "",
      customerCity: "",
      customerNeighborhood: "",
      customerStreet: "",
      customerNumber: "",
    },
  });

  const onSubmit = (data) => console.log(data);
  return (
    <CustomerContainer>
      <CustomerNav>
        <PageTitle>Cadastro de cliente</PageTitle>
      </CustomerNav>
      <CustomerContent>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              labelText="Nome"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="customerName"
        />
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              labelText="CNPJ"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="customerCnpj"
        />
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              labelText="Telefone"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="customerPhoneNumber"
        />
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              labelText="CEP"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="customerZipCode"
        />
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              labelText="Estado"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="customerState"
        />
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              labelText="Cidade"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="customerCity"
        />
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              labelText="Bairro"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="customerNeighborhood"
        />
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              labelText="Endereço"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="customerStreet"
        />
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              labelText="Número"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="customerNumber"
        />
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </CustomerContent>
    </CustomerContainer>
  );
}

const CustomerContent = styled(View)`
  margin-top: 14px;
  width: 100%;
  align-items: center;
  gap: 10px;
`;
