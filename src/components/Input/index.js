import { Container } from "./styles";

function Input ({ id, label, value, handler, ...rest }) {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        {...rest}
        value={value}
        onChange={handler}
      />
      </Container>
  );
}

export default Input;