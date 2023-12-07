import { TextInput, View } from "react-native";
import { CustomerContainer, CustomerNav, PageTitle } from "../style";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components/native";

export default function CustomerForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      customerName: "",
      customerCnpj: "",
      customerPhoneNumber: "",
      customerZipCode: "",
      customerState: "",
      customerCity: "",
      customerNeighborhood: "",
      customerStreet: "",
      customerNumber: "",
    },
  });
  return (
    <CustomerContainer>
      <CustomerNav>
        <PageTitle>Cadastro de cliente</PageTitle>
      </CustomerNav>
      <CustomerContent>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
          )}
          name="customerName"
        />
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
          )}
          name="customerCnpj"
        />
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
          )}
          name="customerPhoneNumber"
        />
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
          )}
          name="customerZipCOde"
        />
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
          )}
          name="customerState"
        />
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
          )}
          name="customerCity"
        />
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
          )}
          name="customerNeighborhood"
        />
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
          )}
          name="customerStreet"
        />
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
          )}
          name="customerNumber"
        />
      </CustomerContent>
    </CustomerContainer>
  );
}

const CustomerContent = styled(View)`
  margin-top: 14px;
`;
