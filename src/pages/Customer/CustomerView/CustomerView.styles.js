import { View, Text } from "react-native";
import styled from "styled-components/native";

const CustomerInfoContent = styled(View)`
  margin-top: 14px;
  gap: 15px;
  height: 35%;
  width: 85%;
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
  CustomerData,
  CustomerDataTitle,
  CustomerDataText,
  CustomerInfoContent,
};
