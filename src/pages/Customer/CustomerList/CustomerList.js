import { FlatList, Text, TouchableOpacity, View } from "react-native";
import {
  Button,
  Container,
  Header,
  ListItemInfo,
  PageTitle,
  SearchBar,
  TouchableListItem,
} from "../../../components";
import styled from "styled-components/native";

function CustomerList({ navigation }) {
  const data = [
    { key: "1", title: "Item 1", description: "description 1" },
    { key: "2", title: "Item 2", description: "description 2" },
    { key: "3", title: "Item 3", description: "description 3" },
  ];

  const generateInitialLetters = (str) => {
    const titleNames = str.split(" ");

    return `${titleNames[0].charAt(0)}${
      titleNames.length > 1 && titleNames[1].charAt(0)
    }`.toUpperCase();
  };

  return (
    <Container>
      <SearchBar />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableListItem
            onPress={() => navigation.navigate("CustomerDetail")}
          >
            <ListItemInfo
              id={item.key}
              letters={generateInitialLetters(item.title)}
            />
            <Data>
              <DataTitle>{item.title}</DataTitle>
              <DataText>{item.description}</DataText>
            </Data>
          </TouchableListItem>
        )}
        style={{ width: "90%", marginBottom: 30 }}
      />
      <Button
        text="Cadastrar cliente"
        onPress={() => navigation.navigate("NewCustomer")}
      />
    </Container>
  );
}

export { CustomerList };
