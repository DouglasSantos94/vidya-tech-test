import { Image } from "react-native";
import { useSelector } from "react-redux";
import { Button, SearchBar } from "../../../components";
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
  const products = useSelector((state) => state.product.products);

  return (
    <ListContainer>
      <SearchBar />
      <ProductListContainer
        data={products}
        renderItem={({ item }) => (
          <ProductItem
            onPress={() =>
              navigation.navigate("ProductDetail", { id: item.id })
            }
          >
            <ProductImageContainer>
              <Image
                source={require("../../../assets/product-without-image.png")}
                style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
              />
            </ProductImageContainer>
            <ProductInfoContainer>
              <ProductTitle>{item.name}</ProductTitle>
              <ProductPrice>R${item.price}</ProductPrice>
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
