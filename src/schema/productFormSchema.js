import * as Yup from "yup";

export const productFormSchema = Yup.object().shape({
  productName: Yup.string().required("Nome do produto é obrigatório!"),
  productPrice: Yup.string().required("Preço do produto é obrigatório!"),
  productDescription: Yup.string().required(
    "Descrição do produto é obrigatória!"
  ),
});
