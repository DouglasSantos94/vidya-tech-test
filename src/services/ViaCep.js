import axios from "axios";

const CepApi = axios.create({
  baseURL: "https://viacep.com.br/ws",
  headers: {
    Accept: "application/json",
  },
});

export const getAddressFromCep = (cep) => {
  return CepApi.get(`/${cep}/json/`);
};
