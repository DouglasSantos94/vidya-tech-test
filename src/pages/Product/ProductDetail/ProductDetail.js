import { Image, StatusBar, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { Inter_400Regular, Inter_900Black } from "@expo-google-fonts/inter";
import { useFonts } from "expo-font";
import { CloseIcon, Container } from "../../../components";
import { ProductDescriptionText } from "./ProductDetail.styles";

function ProductDetail({ navigation, route }) {
  const { productId } = route.params;
  const product = useSelector((state) =>
    state.product.products.find((product) => product.productId == productId)
  );

  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_900Black });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <Container>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <CloseIcon onPress={() => navigation.goBack()} />
      <Image
        source={
          product.productImage
            ? { uri: product.productImage }
            : require("../../../assets/product-without-image.png")
        }
        style={{ width: "100%", height: "50%" }}
      />
      <View style={{ height: "50%", alignItems: "center" }}>
        <View style={{ width: "85%", marginTop: 30 }}>
          <View
            style={{
              height: 48,
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Inter_900Black",
              }}
            >
              {product.productName}
            </Text>
            <Text style={{ fontSize: 14, fontFamily: "Inter_400Regular" }}>
              R$ {product.productPrice}
            </Text>
          </View>
          <ProductDescriptionText fontFamily="Inter_400Regular">
            {product.productDescription}
          </ProductDescriptionText>
        </View>
      </View>
    </Container>
  );
}

export { ProductDetail };
