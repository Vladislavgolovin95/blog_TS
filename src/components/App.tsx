import { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { addDataToFirestore, getDataToFirestore } from "../firebase/firebase";
import { IPost } from "../types/data";
import { Btn } from "./Btn";
import { InputField } from "./InputField";
import { PostsList } from "./PostsList";

export const App: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    getDataToFirestore()
      .then(data => setPosts(data));
  }, []);


  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;

    if (name === 'title') setTitle(value);
    if (name === 'description') setDescription(value);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      addPost();
    }
  };
  
  const addPost = () => {
    const id = uuidv4();

    if (title && description) {
      addDataToFirestore(id, title, description);

      getDataToFirestore()
      .then(data => setPosts(data));

      setTitle("");
      setDescription("");
    }
  };
  
  const removePost = (id: string): void => {
    setPosts(posts.filter(post => post.id !== id))
  }
  
  return (
    <AppWrap>
      <InputsWrap>
        <InputField 
          name="title"
          value={title}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Title"
        />
        <InputField 
          name="description"
          value={description}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Description"
        />
        <Btn 
          onClick={ addPost } 
          text="Add Post"
        />
      </InputsWrap>
      <PostsList 
        posts={posts} 
        removePost={ removePost }
      />
    </AppWrap>
  );
};

const AppWrap = styled.div`
  margin-inline: auto;
  margin-block-start: 50vh;
  transform: translateY(-50%);
  display: flex;
  flex-direction: row;
  gap: 50px;
  justify-content: center;
`
const InputsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`