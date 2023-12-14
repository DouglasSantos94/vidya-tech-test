import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { customerFormSchema } from "../schema/customerFormSchema";
import {
  normalizeCepNumber,
  normalizeCnpjNumber,
  normalizePhoneNumber,
} from "../utils";
import { useCep } from "./useCep";

const useCustomerForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
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
      customerComplement: "",
    },
    resolver: yupResolver(customerFormSchema),
  });

  const [focusedField, setFocusedField] = useState("");

  const phoneFieldValue = watch("customerPhoneNumber");
  const cnpjFieldValue = watch("customerCnpj");
  const zipCodeFieldValue = watch("customerZipCode");
  const { address, error } = useCep(zipCodeFieldValue);

  useEffect(() => {
    setValue("customerPhoneNumber", normalizePhoneNumber(phoneFieldValue));
  }, [phoneFieldValue]);

  useEffect(() => {
    setValue("customerCnpj", normalizeCnpjNumber(cnpjFieldValue));
  }, [cnpjFieldValue]);

  useEffect(() => {
    if (zipCodeFieldValue.replace("-", "").length === 8) {
      setValue("customerState", address.uf);
      setValue("customerCity", address.localidade);
      setValue("customerNeighborhood", address.bairro);
      setValue("customerStreet", address.logradouro);
    }
    setValue("customerZipCode", normalizeCepNumber(zipCodeFieldValue));
  }, [zipCodeFieldValue, address]);

  return {
    control,
    handleSubmit,
    formState: { errors },
    focusedField,
    setFocusedField,
    address,
  };
};

export { useCustomerForm };
