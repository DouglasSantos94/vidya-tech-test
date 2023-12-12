import { Controller } from "react-hook-form";
import { CustomerFormContent } from "./CustomerForm.styles";
import {
  Header,
  Input,
  PageTitle,
  Button,
  BackIcon,
  ErrorMessage,
  ScrollContainer,
} from "../../../components";
import { useCustomerForm } from "../../../hooks/useCustomerForm";

function CustomerForm({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    focusedField,
    setFocusedField,
  } = useCustomerForm();

  const onSubmit = (data) => console.log(data);
  return (
    <ScrollContainer contentContainerStyle={{ alignItems: "center" }}>
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
              hasError={errors[name]}
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
              hasError={errors[name]}
              onChangeText={onChange}
              value={value}
              maxLength={18}
              keyboardType="numeric"
            />
          )}
          name="customerCnpj"
        />
        {errors.customerCnpj && (
          <ErrorMessage>{errors.customerCnpj.message}</ErrorMessage>
        )}
        <Controller
          control={control}
          rules={{ required: true, minLength: 10, maxLength: 11 }}
          render={({ field: { onChange, value, name } }) => (
            <Input
              labelText="Telefone"
              onBlur={() => setFocusedField("")}
              onFocus={() => setFocusedField(name)}
              focused={focusedField === name}
              hasError={errors[name]}
              onChangeText={onChange}
              value={value}
              maxLength={15}
              keyboardType="phone-pad"
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
              hasError={errors[name]}
              onChangeText={onChange}
              value={value}
              maxLength={9}
              keyboardType="numeric"
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
              hasError={errors[name]}
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
              hasError={errors[name]}
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
              hasError={errors[name]}
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
              hasError={errors[name]}
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
              onChangeText={onChange}
              focused={focusedField === name}
              hasError={errors[name]}
              value={value}
              keyboardType="numeric"
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
              hasError={errors[name]}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="customerComplement"
        />
        <Button onPress={handleSubmit(onSubmit)} text="Salvar cliente" />
      </CustomerFormContent>
    </ScrollContainer>
  );
}

export { CustomerForm };
