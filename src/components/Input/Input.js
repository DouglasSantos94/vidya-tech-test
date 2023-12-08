import { InputLabel } from "./InputLabel/InputLabel";
import { InputText } from "./InputText/InputText";
import { InputWithLabel } from "./Input.styles";

function Input({ labelText, onBlur, onChangeText, value }) {
  return (
    <InputWithLabel>
      <InputLabel labeltext={labelText} />
      <InputText onBlur={onBlur} onChangeText={onChangeText} value={value} />
    </InputWithLabel>
  );
}

export { Input };
