import { useState } from "react";
import { ScrollView, Text } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Container,
  Header,
  Input,
  PageTitle,
  Button,
  BackIcon,
  ErrorMessage,
} from "../../../components";
import { CustomerFormContent } from "./CustomerForm.styles";
import { customerFormSchema } from "../../../schema/customerFormSchema";

function CustomerForm({ navigation }) {
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
      customerComplement: "",
    },
    resolver: yupResolver(customerFormSchema),
  });

  const [focusedField, setFocusedField] = useState("");

  const onSubmit = (data) => console.log(data);
  return (
    <ScrollView contentContainerStyle={{ alignItems: "center", marginTop: 10 }}>
      <Header>
        <BackIcon onPress={() => navigation.goBack()} />
        <PageTitle pageTitleText="Cadastro de clientes" />
      </Header>
      <CustomerFormContent>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value, name } }) => (
            <Input
              labelText="Nome"
              onBlur={() => setFocusedField("")}
              onFocus={() => setFocusedField(name)}
              focused={focusedField === name}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="customerName"
        />
        {errors.customerName && (
          <ErrorMessage>{errors.customerName.message}</ErrorMessage>
        )}
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value, name } }) => (
            <Input
              labelText="CNPJ"
              onBlur={() => setFocusedField("")}
              onFocus={() => setFocusedField(name)}
              focused={focusedField === name}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="customerCnpj"
        />
        {errors.customerCnpj && (
          <ErrorMessage>{errors.customerCnpj.message}</ErrorMessage>
        )}
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value, name } }) => (
            <Input
              labelText="Telefone"
              onBlur={() => setFocusedField("")}
              onFocus={() => setFocusedField(name)}
              focused={focusedField === name}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="customerPhoneNumber"
        />
        {errors.customerPhoneNumber && (
          <ErrorMessage>{errors.customerPhoneNumber.message}</ErrorMessage>
        )}
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value, name } }) => (
            <Input
              labelText="CEP"
              onBlur={() => setFocusedField("")}
              onFocus={() => setFocusedField(name)}
              focused={focusedField === name}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="customerZipCode"
        />
        {errors.customerZipCode && (
          <ErrorMessage>{errors.customerZipCode.message}</ErrorMessage>
        )}
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value, name } }) => (
            <Input
              labelText="Estado"
              onBlur={() => setFocusedField("")}
              onFocus={() => setFocusedField(name)}
              focused={focusedField === name}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="customerState"
        />
        {errors.customerState && (
          <ErrorMessage>{errors.customerState.message}</ErrorMessage>
        )}
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value, name } }) => (
            <Input
              labelText="Cidade"
              onBlur={() => setFocusedField("")}
              onFocus={() => setFocusedField(name)}
              focused={focusedField === name}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="customerCity"
        />
        {errors.customerCity && (
          <ErrorMessage>{errors.customerCity.message}</ErrorMessage>
        )}
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value, name } }) => (
            <Input
              labelText="Bairro"
              onBlur={() => setFocusedField("")}
              onFocus={() => setFocusedField(name)}
              focused={focusedField === name}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="customerNeighborhood"
        />
        {errors.customerNeighborhood && (
          <ErrorMessage>{errors.customerNeighborhood.message}</ErrorMessage>
        )}
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value, name } }) => (
            <Input
              labelText="Endereço"
              onBlur={() => setFocusedField("")}
              onFocus={() => setFocusedField(name)}
              focused={focusedField === name}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="customerStreet"
        />
        {errors.customerStreet && (
          <ErrorMessage>{errors.customerStreet.message}</ErrorMessage>
        )}
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value, name } }) => (
            <Input
              labelText="Número"
              onBlur={() => setFocusedField("")}
              onFocus={() => setFocusedField(name)}
              focused={focusedField === name}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="customerNumber"
        />
        {errors.customerNumber && (
          <ErrorMessage>{errors.customerNumber.message}</ErrorMessage>
        )}
        <Controller
          control={control}
          render={({ field: { onChange, value, name } }) => (
            <Input
              labelText="Complemento"
              onBlur={() => setFocusedField("")}
              onFocus={() => setFocusedField(name)}
              focused={focusedField === name}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="customerComplement"
        />
        <Button onPress={handleSubmit(onSubmit)} text="Salvar cliente" />
      </CustomerFormContent>
    </ScrollView>
  );
}

export { CustomerForm };
