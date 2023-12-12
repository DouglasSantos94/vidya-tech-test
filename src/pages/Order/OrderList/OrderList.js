import { FlatList, Text, TouchableOpacity, View } from "react-native";
import {
  Button,
  Container,
  Header,
  Info,
  InfoText,
  InfoTitle,
  ListItem,
  ListItemInfo,
  PageTitle,
  SearchBar,
} from "../../../components";
import styled from "styled-components/native";

const generateInitialLetters = (str) => {
  const titleNames = str.split(" ");

  return `${titleNames[0].charAt(0)}${
    titleNames.length > 1 && titleNames[1].charAt(0)
  }`.toUpperCase();
};

function OrderList({ navigation }) {
  const data = [
    { key: "1", title: "Item 1", price: 20, productQuantity: 7 },
    { key: "2", title: "Item 2", price: 30, productQuantity: 7 },
    { key: "3", title: "Item 3", price: 10, productQuantity: 7 },
    { key: "4", title: "Item 4", price: 50, productQuantity: 7 },
    { key: "5", title: "Item 5", price: 23.99, productQuantity: 7 },
    { key: "6", title: "Item 6", price: 19, productQuantity: 7 },
  ];

  return (
    <Container>
      <SearchBar />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ListItem>
            <ListItemInfo
              id={item.key}
              letters={generateInitialLetters(item.title)}
            />
            <Info>
              <InfoTitle>{item.title}</InfoTitle>
              <InfoText>Qtd Produtos: {item.productQuantity}</InfoText>
            </Info>
            <Text style={{ flex: 1, textAlign: "right", fontWeight: "bold" }}>
              R${item.price}
            </Text>
          </ListItem>
        )}
        style={{ width: "85%", marginBottom: 30 }}
      />
      <Button
        text="Cadastrar produto"
        onPress={() => navigation.navigate("NewCustomer")}
      />
    </Container>
  );
}

export { OrderList };
