import { useState } from "react";
import {
  Button,
  Container,
  Info,
  InfoText,
  InfoTitle,
  ListItemInfo,
  SearchBar,
  TouchableListItem,
} from "../../../../components";
import { FlatList, Image } from "react-native";
import { useSelector } from "react-redux";

function SelectCustomer({ navigation }) {
  const customers = useSelector((state) => state.customer.customers);
  const [selectedId, setSelectedId] = useState("");

  const generateInitialLetters = (str) => {
    const titleNames = str.split(" ");
    const initialLetters = titleNames[0].charAt(0);

    if (titleNames.length > 1) initialLetters += titleNames[1].charAt(0);

    return initialLetters.toUpperCase();
  };

  return (
    <Container>
      <SearchBar />
      <FlatList
        data={customers}
        renderItem={({ item }) => (
          <TouchableListItem onPress={() => setSelectedId(item.customerId)}>
            <ListItemInfo
              id={Date.now()}
              letters={generateInitialLetters(item.customerName)}
            />
            <Info>
              <InfoTitle>{item.customerName}</InfoTitle>
              <InfoText>{item.customerCnpj}</InfoText>
            </Info>
            <Image source={require("../../../../assets/selected-icon.png")} />
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

export { SelectCustomer };
