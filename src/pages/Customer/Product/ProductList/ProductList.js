import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Button, Container, SearchBar } from "../../../../components";
import styled from "styled-components";

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
        text="Cadastrar cliente"
        onPress={() => navigation.navigate("ProductForm")}
      />
    </ListContainer>
  );
}

const ListContainer = styled(View)`
  width: 100%;
  align-items: center;
`;

const ProductListContainer = styled(FlatList)`
  width: 90%;
  border: solid 1px blue;
`;

const ProductItem = styled(TouchableOpacity)`
  width: 166px;
  height: 160px;
  border-radius: 10px;
  box-sizing: border-box;
`;

const ProductInfoContainer = styled(View)`
  height: 69px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fe;
`;

const ProductTitle = styled(Text)`
  font-size: 12px;
`;

const ProductPrice = styled(Text)`
  font-size: 14px;
  font-weight: bold;
`;

export { ProductList };
