import { View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components/native";
import {
  Container,
  Header,
  Input,
  PageTitle,
  Button,
} from "../../../components";
import { CustomerFormContent } from "./CustomerForm.styles";

function CustomerForm() {
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
    <Container>
      <Header>
        <PageTitle>Cadastro de cliente</PageTitle>
      </Header>
      <CustomerFormContent>
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
        <Button onPress={handleSubmit(onSubmit)} />
      </CustomerFormContent>
    </Container>
  );
}

export { CustomerForm };
