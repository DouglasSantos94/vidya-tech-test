import { StyleSheet, Text, View, StatusBar } from "react-native";
import CustomerView from "./src/pages/Customer/CustomerView";
import styled from "styled-components/native";
import CustomerForm from "./src/pages/Customer/CustomerForm";

export default function App() {
  return (
    <AppContainer>
      <StatusBar
        hidden={false}
        animated={true}
        barStyle="dark-content"
        backgroundColor="white"
      />
      {/* <CustomerView /> */}
      <CustomerForm />
    </AppContainer>
  );
}

const AppContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
