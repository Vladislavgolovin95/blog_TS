import styled from "styled-components";
import { IPost  } from "../types/data";
import { Btn } from "./Btn";

interface IPostItem extends IPost  {
  removePost : (id: string) => void;
}

export const PostItem: React.FC<IPostItem> = (props) => {
  const { id, title, description, removePost  } = props;

  return (
    <Item>
      <span>{ title }</span>
      <span>{ description }</span>
      <StyledPostBtn onClick={() => removePost (id)} text="Remove post"/>
    </Item>
  );
};

const Item = styled.li`
  margin-bottom: 20px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid#3D3D3D;
  border-radius: 5px;
  text-align: center;
`

const StyledPostBtn = styled(Btn)`
  margin: 0 auto;
  max-width: 100px;
  padding: 5px;
  color: red;
`