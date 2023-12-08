import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Container, Header, PageTitle, SearchBar } from "../../../components";
import styled from "styled-components/native";

function CustomerList() {
  const data = [
    { key: "1", title: "Item 1", description: "description 1" },
    { key: "2", title: "Item 2", description: "description 2" },
    { key: "3", title: "Item 3", description: "description 3" },
  ];

  return (
    <Container>
      <Header>
        <PageTitle pageTitleText={"Clientes"} />
      </Header>
      <SearchBar />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ListItemContainer>
            <Data onPress={() => alert(`${item.title} ${item.description}`)}>
              <DataTitle>{item.title}</DataTitle>
              <DataText>{item.description}</DataText>
            </Data>
          </ListItemContainer>
        )}
        style={{ width: "90%" }}
      />
    </Container>
  );
}

const Data = styled(TouchableOpacity)`
  height: 33px;
`;

const DataText = styled(Text)`
  font-size: 12px;
  color: #71727a;
  text-align: left;
`;

const DataTitle = styled(DataText)`
  font-weight: bold;
`;

const ListItemContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 72px;
  border: solid 1px blue;
`;

export { CustomerList };
