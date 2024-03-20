import styled from "styled-components";

interface IButton {
  className?: string;
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Btn: React.FC<IButton> = (props) => {
  const { text, onClick, className } = props;

  return <Button className={className} onClick={ onClick }>{ text }</Button>
}

const Button = styled.button`
  padding: 10px;
  background-color: inherit;
  font-family: inherit;
  font-size: 15px;
  border: 1px solid #3D3D3D;
`