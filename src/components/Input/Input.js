import { InputLabel } from "./InputLabel/InputLabel";
import { InputText } from "./InputText/InputText";
import { InputWithLabel } from "./Input.styles";

function Input({
  labelText,
  onBlur,
  onChangeText,
  value,
  keyboardType = "default",
}) {
  return (
    <InputWithLabel>
      <InputLabel labeltext={labelText} />
      <InputText
        keyboardType={keyboardType}
        onBlur={onBlur}
        onChangeText={onChangeText}
        value={value}
      />
    </InputWithLabel>
  );
}

export { Input };
