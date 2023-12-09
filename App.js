import "react-native-gesture-handler";
import { View, StatusBar } from "react-native";
import styled from "styled-components/native";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "@expo/vector-icons/MaterialIcons";

import { CustomerForm, CustomerList, CustomerView } from "./src/pages";

const CustomerStack = createStackNavigator();
const ProductStack = createStackNavigator();
const OrderStack = createStackNavigator();

function CustomerTabs() {
  return (
    <CustomerStack.Navigator>
      <CustomerStack.Screen
        name="Customers"
        component={CustomerList}
        options={{
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <CustomerStack.Screen
        name="NewCustomer"
        component={CustomerForm}
        options={{ headerShown: false, presentation: "modal" }}
      />
      <CustomerStack.Screen
        name="CustomerDetail"
        component={CustomerView}
        options={{ headerShown: false, presentation: "modal" }}
      />
    </CustomerStack.Navigator>
  );
}

function ProductTabs() {
  return (
    <ProductStack.Navigator>
      <ProductStack.Screen
        name="Products"
        component={CustomerList}
        options={{
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <ProductStack.Screen
        name="NewProduct"
        component={CustomerForm}
        options={{ headerShown: false, presentation: "modal" }}
      />
      <ProductStack.Screen
        name="ProductDetail"
        component={CustomerView}
        options={{ headerShown: false, presentation: "modal" }}
      />
    </ProductStack.Navigator>
  );
}

function OrderTabs() {
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen
        name="Orders"
        component={CustomerList}
        options={{
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <OrderStack.Screen
        name="NewOrder"
        component={CustomerForm}
        options={{ headerShown: false, presentation: "modal" }}
      />
      <OrderStack.Screen
        name="OrderDetail"
        component={CustomerView}
        options={{ headerShown: false, presentation: "modal" }}
      />
    </OrderStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const generateDisplay = (route) => {
  const name = getFocusedRouteNameFromRoute(route);

  const acceptedTabs = ["Customers", "Products", "Orders", undefined];
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
          tabBarIcon: ({ color, size }) => {
            const icons = {
              Clientes: "person",
              Produtos: "store",
              Pedidos: "shopping-bag",
            };
            let iconName = icons[route.name];
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarInactiveTintColor: "#D4D6DD",
          tabBarStyle: {
            display: generateDisplay(route),
            color: "black",
          },
        })}
      >
        <Tab.Screen name="Pedidos" component={OrderTabs} />
        <Tab.Screen name="Clientes" component={CustomerTabs} />
        <Tab.Screen name="Produtos" component={ProductTabs} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const AppContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
