import { useState } from "react";
import { View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components/native";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  BackIcon,
  Button,
  Container,
  ErrorMessage,
  Header,
  Input,
  PageTitle,
} from "../../../components";
import { productFormSchema } from "../../../schema/productFormSchema";

function ProductForm({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      productName: "",
      productPrice: "",
      productDescription: "",
      productImage: "",
    },
    resolver: yupResolver(productFormSchema),
  });

  const [focusedField, setFocusedField] = useState("");

  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <Header>
        <BackIcon onPress={() => navigation.goBack()} />
        <PageTitle pageTitleText="Cadastro de produtos" />
      </Header>
      <ProductFormContent>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value, name } }) => (
            <Input
              labelText="Nome"
              onBlur={() => setFocusedField("")}
              onFocus={() => setFocusedField(name)}
              hasError={errors[name]}
              focused={focusedField === name}
              value={value}
            />
          )}
          name="productName"
        />
        {errors.productName && (
          <ErrorMessage>{errors.productName.message}</ErrorMessage>
        )}
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value, name } }) => (
            <Input
              labelText="Preço"
              keyboardType="decimal-pad"
              onBlur={() => setFocusedField("")}
              onFocus={() => setFocusedField(name)}
              hasError={errors[name]}
              focused={focusedField === name}
              value={value}
            />
          )}
          name="productPrice"
        />
        {errors.productPrice && (
          <ErrorMessage>{errors.productPrice.message}</ErrorMessage>
        )}
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value, name } }) => (
            <Input
              labelText="Descrição"
              onBlur={() => setFocusedField("")}
              onFocus={() => setFocusedField(name)}
              hasError={errors[name]}
              focused={focusedField === name}
              value={value}
            />
          )}
          name="productDescription"
        />
        {errors.productDescription && (
          <ErrorMessage>{errors.productDescription.message}</ErrorMessage>
        )}
        <ImageUploaderContainer></ImageUploaderContainer>
        <Button onPress={handleSubmit(onSubmit)} text="Salvar produto" />
      </ProductFormContent>
    </Container>
  );
}

const ImageUploaderContainer = styled(View)`
  width: 85%;
  height: 129.01px;
  border-radius: 10px;
  border: dashed 5px #c5c6cc;
`;

const ProductFormContent = styled(View)`
  margin-top: 14px;
  width: 100%;
  align-items: center;
  gap: 10px;
`;

export { ProductForm };
