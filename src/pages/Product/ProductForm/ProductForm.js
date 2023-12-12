import { useState } from "react";
import { View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import {
  BackIcon,
  Container,
  Header,
  Input,
  PageTitle,
} from "../../../components";
import styled from "styled-components/native";

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
  });

  const [focusedField, setFocusedField] = useState("");

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
              focused={focusedField === name}
              value={value}
            />
          )}
          name="productName"
        />
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value, name } }) => (
            <Input
              labelText="Preço"
              keyboardType="decimal-pad"
              onBlur={() => setFocusedField("")}
              onFocus={() => setFocusedField(name)}
              focused={focusedField === name}
              value={value}
            />
          )}
          name="productPrice"
        />
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value, name } }) => (
            <Input
              labelText="Descrição"
              onBlur={() => setFocusedField("")}
              onFocus={() => setFocusedField(name)}
              focused={focusedField === name}
              value={value}
            />
          )}
          name="productDescription"
        />

        <ImageUploaderContainer></ImageUploaderContainer>
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
