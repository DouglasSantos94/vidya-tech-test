import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Button, Container, SearchBar } from "../../../components";
import styled from "styled-components";
import {
  ListContainer,
  ProductImageContainer,
  ProductInfoContainer,
  ProductItem,
  ProductListContainer,
  ProductPrice,
  ProductTitle,
} from "./ProductList.styles";

function ProductList({ navigation }) {
  const data = [
    { key: "1", title: "Item 1", price: 20 },
    { key: "2", title: "Item 2", price: 30 },
    { key: "3", title: "Item 3", price: 10 },
    { key: "4", title: "Item 4", price: 50 },
    { key: "5", title: "Item 5", price: 23.99 },
    { key: "6", title: "Item 6", price: 19 },
  ];
  return (
    <ListContainer>
      <SearchBar />
      <ProductListContainer
        data={data}
        renderItem={({ item }) => (
          <ProductItem onPress={() => navigation.navigate("ProductDetail")}>
            <ProductImageContainer>
              <Image
                source={require("../../../assets/product-without-image.png")}
                style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
              />
            </ProductImageContainer>
            <ProductInfoContainer>
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>{item.price}</ProductPrice>
            </ProductInfoContainer>
          </ProductItem>
        )}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        numColumns={2}
      />
      <Button
        text="Cadastrar produto"
        onPress={() => navigation.navigate("ProductForm")}
      />
    </ListContainer>
  );
}

export { ProductList };
