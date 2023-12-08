import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Container, Header, PageTitle, SearchBar } from "../../../components";
import styled from "styled-components/native";

const generateColor = (key) => {
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, key);
  return `#${randomColor}`;
};

function CustomerList() {
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
      <Header>
        <PageTitle pageTitleText={"Clientes"} />
      </Header>
      <SearchBar />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ListItemContainer
            onPress={() => alert(`${item.title} ${item.description}`)}
          >
            <ListItemIcon key={item.key}>
              <ListItemIconText>
                {generateInitialLetters(item.title)}
              </ListItemIconText>
            </ListItemIcon>
            <Data>
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

const Data = styled(View)`
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

const ListItemContainer = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 72px;
`;

const ListItemIcon = styled(View)`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background-color: ${(props) => generateColor(props.key)};
  margin-right: 16px;
`;

const ListItemIconText = styled(Text)`
  font-size: 20px;
  color: white;
  font-weight: bold;
`;

export { CustomerList };
