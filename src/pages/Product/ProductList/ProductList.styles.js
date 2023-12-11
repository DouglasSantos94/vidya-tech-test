import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

const ListContainer = styled(View)`
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: white;
`;

const ProductListContainer = styled(FlatList)`
  width: 85%;
  margin-top: 30px;
  background-color: white;
`;

const ProductItem = styled(TouchableOpacity)`
  width: 166px;
  height: 160px;
  border-radius: 16px;
  box-sizing: border-box;
  background-color: #f8f9fe;
  margin-bottom: 30px;
`;

const ProductImageContainer = styled(View)`
  width: 166px;
  height: 91px;
`;

const ProductInfoContainer = styled(View)`
  height: 69px;
  align-items: center;
  justify-content: center;
`;

const ProductTitle = styled(Text)`
  font-size: 12px;
`;

const ProductPrice = styled(Text)`
  font-size: 14px;
  font-weight: bold;
`;

export {
  ListContainer,
  ProductListContainer,
  ProductItem,
  ProductImageContainer,
  ProductInfoContainer,
  ProductTitle,
  ProductPrice,
};
