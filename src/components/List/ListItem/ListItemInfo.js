import { Text, View } from "react-native";
import styled from "styled-components/native";

const generateColor = (key) => {
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, key);
  return `#${randomColor}`;
};

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

const Info = styled(View)`
  height: 33px;
`;

const InfoText = styled(Text)`
  font-size: 12px;
  color: #71727a;
  text-align: left;
`;

const InfoTitle = styled(InfoText)`
  font-weight: bold;
`;

function ListItemInfo({ key, letters }) {
  return (
    <ListItemIcon id={key}>
      <ListItemIconText>{letters}</ListItemIconText>
    </ListItemIcon>
  );
}

export { ListItemInfo, Info, InfoText, InfoTitle };
