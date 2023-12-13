import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components/native";
import { yupResolver } from "@hookform/resolvers/yup";
import * as ImagePicker from "expo-image-picker";
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
import { InputLabel } from "../../../components/Input/InputLabel/InputLabel";
import { addProduct } from "../../../store/product/productSlice";
import { useDispatch } from "react-redux";

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
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const onSubmit = (data) => {
    dispatch(addProduct({ ...data, productImage: image }));
  };

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
              onChangeText={onChange}
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
              onChangeText={onChange}
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
              onChangeText={onChange}
              value={value}
            />
          )}
          name="productDescription"
        />
        {errors.productDescription && (
          <ErrorMessage>{errors.productDescription.message}</ErrorMessage>
        )}
        <InputLabel labeltext="Foto do produto" />
        <ImageUploaderContainer>
          <ImageUploaderButton onPress={pickImage}>
            <Image source={require("../../../assets/image-upload.png")} />
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Faça o upload da foto
            </Text>
          </ImageUploaderButton>
        </ImageUploaderContainer>
        <Button onPress={handleSubmit(onSubmit)} text="Salvar produto" />
      </ProductFormContent>
    </Container>
  );
}

const ImageUploaderContainer = styled(View)`
  width: 85%;
  height: 129.01px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: dashed 5px #c5c6cc;
  box-sizing: border-box;
`;

const ImageUploaderButton = styled(TouchableOpacity)`
  width: 183.291px;
  height: 29.159px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
  background-color: #006ffd;
  padding: 0 10px;
`;

const ProductFormContent = styled(View)`
  margin-top: 14px;
  width: 100%;
  align-items: center;
  gap: 10px;
`;

export { ProductForm };
