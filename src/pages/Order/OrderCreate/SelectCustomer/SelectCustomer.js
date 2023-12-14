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
import { FlatList, Image, View } from "react-native";
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
          <TouchableListItem
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            onPress={() => setSelectedId(item.customerId)}
          >
            <View style={{ flexDirection: "row" }}>
              <ListItemInfo
                id={Date.now()}
                letters={generateInitialLetters(item.customerName)}
              />
              <Info>
                <InfoTitle>{item.customerName}</InfoTitle>
                <InfoText>{item.customerCnpj}</InfoText>
              </Info>
            </View>
            {item.customerId === selectedId && (
              <Image source={require("../../../../assets/selected-icon.png")} />
            )}
          </TouchableListItem>
        )}
        style={{ width: "85%", marginBottom: 30 }}
      />
      <Button
        text="Salvar"
        onPress={() =>
          navigation.navigate("SelectProducts", {
            customerId: selectedId,
          })
        }
      />
    </Container>
  );
}

export { SelectCustomer };
