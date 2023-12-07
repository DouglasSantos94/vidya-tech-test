import { Text, View } from "react-native";
import styled from "styled-components/native";

const CustomerContainer = styled(View)`
  background-color: #ffffff;
  flex: 1;
  width: 85%;
`;

const CustomerNav = styled(View)`
  margin-top: 30px;
`;

const PageTitle = styled(Text)`
  color: #1f2024;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;

export { CustomerContainer, CustomerNav, PageTitle };
