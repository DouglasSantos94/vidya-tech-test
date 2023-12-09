import "react-native-gesture-handler";
import { View, StatusBar } from "react-native";
import styled from "styled-components/native";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import { CustomerForm, CustomerList, CustomerView } from "./src/pages";

const CustomerStack = createStackNavigator();

function CustomerTabs() {
  return (
    <CustomerStack.Navigator>
      <CustomerStack.Screen
        name="Clientes"
        component={CustomerList}
        options={{
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <CustomerStack.Screen
        name="Cadastrar"
        component={CustomerForm}
        options={{ headerShown: false, presentation: "modal" }}
      />
      <CustomerStack.Screen
        name="Detalhe"
        component={CustomerView}
        options={{ headerShown: false, presentation: "modal" }}
      />
    </CustomerStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const generateDisplay = (route) => {
  const name = getFocusedRouteNameFromRoute(route);

  const acceptedTabs = ["Clientes", "Produtos", "Pedidos", undefined];
  const display = acceptedTabs.includes(name) ? "flex" : "none";
  return display;
};

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        hidden={false}
        animated={true}
        barStyle="dark-content"
        backgroundColor="white"
      />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = "person-sharp";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarInactiveTintColor: "#D4D6DD",
          tabBarStyle: {
            display: generateDisplay(route),
          },
        })}
      >
        <Tab.Screen name="Customer" component={CustomerTabs} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const AppContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
