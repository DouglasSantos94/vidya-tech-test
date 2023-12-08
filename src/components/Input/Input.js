import InputLabel from "./InputLabel";
import { InputText } from "./InputText";
import { InputWithLabel } from "./style";

function Input({ labelText, onBlur, onChangeText, value }) {
  return (
    <InputWithLabel>
      <InputLabel labeltext={labelText} />
      <InputText onBlur={onBlur} onChangeText={onChangeText} value={value} />
    </InputWithLabel>
  );
}

export { Input };
