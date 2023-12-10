import { Image, StatusBar, Text, View } from "react-native";
import { Inter_400Regular, Inter_900Black } from "@expo-google-fonts/inter";
import { useFonts } from "expo-font";
import { CloseIcon } from "../../../../components";

function ProductDetail({ navigation }) {
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
          source={require("../../../../assets/product-photo-detail.png")}
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
              Produto
            </Text>
            <Text style={{ fontSize: 14, fontFamily: "Inter_400Regular" }}>
              R$ 23.99
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
              diam sed metus commodo egestas. Nam pellentesque neque tortor.
              Donec nunc nunc, tempus eu luctus at, semper a magna. Pellentesque
              auctor accumsan sem id eleifend. Pellentesque venenatis nunc vel
              eros mollis tristique. Nam et erat tristique velit scelerisque
              rhoncus. Donec bibendum, elit in viverra blandit, enim velit
              pharetra ex, id lacinia justo elit eu velit. Integer porta auctor
              quam dapibus varius. Etiam scelerisque ullamcorper risus at
              pretium.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export { ProductDetail };
