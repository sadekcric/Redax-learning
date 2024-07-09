/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/posts/postsSlice";
import { list } from "postcss";

const Posts = () => {
  const { posts, isLoading, isError, error } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  let content;

  if (isLoading) {
    content = <h1>Loading ...</h1>;
  }

  if (!isLoading && isError) {
    content = <h2>{error}</h2>;
  }

  if (!isLoading && posts.length === 0) {
    content = <h1>No Data Found</h1>;
  }

  if (!isLoading && posts.length > 0) {
    content = (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    );
  }
  return <div className="ml-10">{content}</div>;
};

export default Posts;
