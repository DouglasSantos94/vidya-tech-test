import { InputLabel } from "./InputLabel/InputLabel";
import { InputText } from "./InputText/InputText";
import { InputWithLabel } from "./Input.styles";

function Input({
  labelText,
  onFocus,
  focused,
  onBlur,
  onChangeText,
  hasError,
  value,
  maxLength,
  keyboardType = "default",
}) {
  return (
    <InputWithLabel>
      <InputLabel labeltext={labelText} />
      <InputText
        keyboardType={keyboardType}
        onFocus={onFocus}
        focused={focused}
        onBlur={onBlur}
        onChangeText={onChangeText}
        hasError={hasError}
        maxLength={maxLength}
        value={value}
      />
    </InputWithLabel>
  );
}

export { Input };
