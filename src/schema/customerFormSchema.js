import * as Yup from "yup";
import { cnpj } from "cpf-cnpj-validator";

export const customerFormSchema = Yup.object().shape({
  customerName: Yup.string().required("Nome é obrigatório!"),
  customerCnpj: Yup.string()
    .test({
      name: "cnpj-valid",
      skipAbsent: true,
      test(value = "", ctx) {
        if (!cnpj.isValid(value)) {
          return ctx.createError({ message: "CNPJ inválido!" });
        }
        return true;
      },
    })
    .required("CNPJ é obrigatório"),
  customerPhoneNumber: Yup.string()
    .min(10, "Telefone inválido!")
    .max(11, "Telefone inválido!")
    .required("Telefone é obrigatório"),
  customerZipCode: Yup.string()
    .min(8, "CEP deve ter 8 caracteres!")
    .max(8, "CEP deve ter 8 caracteres!")
    .required("Digite o seu CEP"),
  customerState: Yup.string().required("Selecione o estado"),
  customerCity: Yup.string().required("Digite a cidade"),
  customerNeighborhood: Yup.string().required("Digite o nome do bairro"),
  customerStreet: Yup.string().required("Digite o nome da rua"),
  customerNumber: Yup.string().required("Digite o número"),
  customerComplement: Yup.string(),
});
