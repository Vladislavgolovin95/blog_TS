import { IPost  } from "../types/data";
import { PostItem } from "./PostItem";

interface IPostsListProps {
  posts: IPost [];
  removePost : (id: string) => void;
}

export const PostsList: React.FC<IPostsListProps> = (props) => {
  const { posts, removePost } = props;

  return <ul>
    { 
      posts.map(post => (
        <PostItem 
          key={post.id}
          removePost={ removePost } 
          {...post} 
        />
      ))
    }
  </ul>
}