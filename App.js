import { StyleSheet, Text, View, StatusBar } from "react-native";
import CustomerView, { CustomerList } from "./src/pages";
import styled from "styled-components/native";
import { CustomerForm } from "./src/pages";

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
      {/* <CustomerForm /> */}
      <CustomerList />
    </AppContainer>
  );
}

const AppContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
