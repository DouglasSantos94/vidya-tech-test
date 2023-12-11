import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Container,
  Header,
  Info,
  InfoText,
  InfoTitle,
  ListItemInfo,
  PageTitle,
  SearchBar,
  TouchableListItem,
} from "../../../components";

function CustomerList({ navigation }) {
  const customers = useSelector((state) => state.customer.customers);
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
        data={customers}
        renderItem={({ item }) => (
          <TouchableListItem
            onPress={() => navigation.navigate("CustomerDetail")}
          >
            <ListItemInfo
              id={Date.now()}
              letters={generateInitialLetters(item.name)}
            />
            <Info>
              <InfoTitle>{item.name}</InfoTitle>
              <InfoText>{item.cnpj}</InfoText>
            </Info>
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
