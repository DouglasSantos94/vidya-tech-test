import { View } from "react-native";

function SelectProducts({ navigation, route }) {
  return (
    <View>
      <View
        style={{
          borderRadius: 16,
          borderColor: "#71727A",
          borderWidth: 0.5,
          padding: 16,
        }}
      >
        <View>
          <Text>Cliente selecionado</Text>
        </View>
      </View>
    </View>
  );
}

export { SelectProducts };
