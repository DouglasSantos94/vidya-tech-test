import { View, Text } from "react-native";
import styled from "styled-components/native";

const CustomerInfoContainer = styled(View)`
  background-color: #ffffff;
  flex: 1;
  width: 85%;
`;

const CustomerInfoNav = styled(View)``;

const PageTitle = styled(Text)`
  color: #1f2024;
  font-size: 14px;
  font-weight: bold;
`;

const CustomerInfoContent = styled(View)`
  margin-top: 14px;
  gap: 15px;
  height: 35%;
`;

const CustomerData = styled(View)`
  flex: 1;
  height: 33px;
`;

const CustomerDataText = styled(Text)`
  font-size: 12px;
  color: #71727a;
  text-align: left;
`;

const CustomerDataTitle = styled(CustomerDataText)`
  font-weight: bold;
`;

export {
  CustomerInfoContainer,
  CustomerInfoNav,
  CustomerInfoContent,
  CustomerData,
  CustomerDataTitle,
  CustomerDataText,
  PageTitle,
};
