import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomerView from "./src/pages/Customer/CustomerView";
import styled from "styled-components/native";

export default function App() {
  return (
    <AppContainer>
      <CustomerView />
    </AppContainer>
  );
}

const AppContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
