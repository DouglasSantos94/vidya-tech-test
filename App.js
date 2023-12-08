import "react-native-gesture-handler";
import { View, StatusBar } from "react-native";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { CustomerForm, CustomerList, CustomerView } from "./src/pages";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        hidden={false}
        animated={true}
        barStyle="dark-content"
        backgroundColor="white"
      />
      <Stack.Navigator>
        <Stack.Screen
          name="Clientes"
          component={CustomerList}
          options={{
            headerTitleAlign: "center",
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="Cadastrar"
          component={CustomerForm}
          options={{ headerShown: false, presentation: "modal" }}
        />
        <Stack.Screen
          name="Detalhe"
          component={CustomerView}
          options={{ headerShown: false, presentation: "modal" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const AppContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
