import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Container,
  Header,
  Input,
  PageTitle,
  Button,
  BackIcon,
} from "../../../components";
import { CustomerFormContent } from "./CustomerForm.styles";

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
    },
  });

  const [focusedField, setFocusedField] = useState("");

  const onSubmit = (data) => console.log(data);
  return (
    <Container>
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
        <Button onPress={handleSubmit(onSubmit)} />
      </CustomerFormContent>
    </Container>
  );
}

export { CustomerForm };
