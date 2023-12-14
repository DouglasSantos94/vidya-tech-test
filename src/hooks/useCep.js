import { useCallback, useEffect, useState } from "react";
import { getAddressFromCep } from "../services/ViaCep";

export const useCep = (cep = "") => {
  const [address, setAddress] = useState({
    cep: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
  });

  const [error, setError] = useState(null);

  const fetcher = useCallback(() => {
    getAddressFromCep(cep)
      .then(({ data }) => setAddress(data))
      .catch((err) => setError(err));
  }, [cep]);

  useEffect(() => {
    fetcher();
  }, [fetcher]);

  return { address, error };
};
