import { createContext, useEffect, useReducer, useState } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  fetching: false,
});

function PostListReducer(currPostList, action) {
  let newPostList = currPostList;

  if (action.type === "DELETE_POST") {
    // Deleting a single posts
    newPostList = currPostList.filter(
      (post) => post.id != action.payload.postID
    );
  } else if (action.type === "ADD_INITIAL_POST") {
    // Fetching posts from API
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    // Adding a single user defined post
    newPostList = [action.payload.post, ...currPostList];
  }

  return newPostList;
}

export const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(PostListReducer, []);
  // Loading spinner state
  const [fetching, setFetching] = useState(false);

  function addPost(post) {
    const newAction = {
      type: "ADD_POST",
      payload: { post },
    };
    dispatchPostList(newAction);
  }

  function addInitialPosts(posts) {
    dispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: {
        posts,
      },
    });
  }

  function deletePost(postID) {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postID,
      },
    });
  }

  useEffect(() => {
    // Fetching some initial posts from server(dummy API)
    // From sending request..
    setFetching(true);

    // To cleanup the fetch
    const controller = new AbortController();
    const signal = controller.signal;

    async function handleFetchData() {
      try {
        // signal is for cleanup
        const res = await fetch("https://dummyjson.com/posts", { signal });
        const data = await res.json();
        addInitialPosts(data.posts);
        // ..  To getting data
        setFetching(false);
      } catch (err) {
        console.log(err);
      }
    }
    handleFetchData();

    return () => {
      // This will abort the fatching request from server (Cleaup of fetch)
      // controller.abort();
    };
  }, []);

  return (
    <PostList.Provider value={{ postList, addPost, deletePost, fetching }}>
      {children}
    </PostList.Provider>
  );
};
