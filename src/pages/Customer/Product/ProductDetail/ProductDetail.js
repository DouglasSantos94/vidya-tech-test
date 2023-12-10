import { Image, StatusBar, Text, View } from "react-native";
import { BackIcon, Button, CloseIcon } from "../../../../components";

function ProductDetail() {
  return (
    <View>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <CloseIcon />
      <View style={{ height: "50vh", width: "100%" }}>
        <Image
          source={require("../../../../assets/product-photo-detail.png")}
          style={{ width: "100%" }}
        />
      </View>
      <View style={{ height: "50%" }}>
        <Text>Product View</Text>
      </View>
    </View>
  );
}

export { ProductDetail };
