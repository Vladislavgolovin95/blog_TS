import styled from "styled-components";

interface IInputField {
  name: string;
  value: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
}

export const InputField: React.FC<IInputField> = (props) => {
  const { name, value, onChange, onKeyDown, placeholder } = props;
  return <Input
    name={ name }
    value={ value }
    onChange={ onChange }
    onKeyDown={ onKeyDown }
    placeholder={ placeholder }
  />   
}

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  border: 1px solid #3D3D3D;
  font-size: 15px;
  background-color: inherit;
  outline: none;
`