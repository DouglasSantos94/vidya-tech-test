import { Image, StatusBar, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { Inter_400Regular, Inter_900Black } from "@expo-google-fonts/inter";
import { useFonts } from "expo-font";
import { CloseIcon } from "../../../components";

function ProductDetail({ navigation, route }) {
  const { id } = route.params;
  const product = useSelector((state) =>
    state.customer.customers.find((customer) => customer.id == id)
  );

  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_900Black });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <View>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <CloseIcon onPress={() => navigation.goBack()} />
      <View style={{ height: "50vh", width: "100%" }}>
        <Image
          source={require("../../../assets/product-photo-detail.png")}
          style={{ width: "100%" }}
        />
      </View>
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
              {product.name}
            </Text>
            <Text style={{ fontSize: 14, fontFamily: "Inter_400Regular" }}>
              R$ {product.price}
            </Text>
          </View>
          <View style={{ width: "100%" }}>
            <Text
              style={{
                textAlign: "justify",
                color: "#71727A",
                fontFamily: "Inter_400Regular",
              }}
            >
              {product.description}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export { ProductDetail };
