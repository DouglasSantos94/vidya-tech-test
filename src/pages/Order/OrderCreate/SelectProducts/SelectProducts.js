import { View, Text } from "react-native";
import { useSelector } from "react-redux";

function SelectProducts({ navigation, route }) {
  const { id } = route.params;
  const customer = useSelector((state) =>
    state.customer.customers.find((customer) => customer.id == id)
  );
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
          <View>
            <Text>{customer.customerName}</Text>
            <Text>{customer.customerCnpj}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export { SelectProducts };
