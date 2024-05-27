import { useContext, useRef } from "react";
import { Form, redirect, useNavigate } from "react-router-dom";
import { PostList } from "../store/Post-list-store";

export const CreatePost = () => {
  const navigate = useNavigate();
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postElement = useRef();
  const postTitleElement = useRef();
  const postDescriptionElement = useRef();
  const tagsElement = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    const UserId = userIdElement.current.value;
    // const post = postElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postDescription = postDescriptionElement.current.value;
    const tags = tagsElement.current.value.trim().split(" ");

    // Making the form empty after user input
    userIdElement.current.value = "";
    // postElement.current.value = "";
    postTitleElement.current.value = "";
    postDescriptionElement.current.value = "";
    tagsElement.current.value = [];

    // This code is sending data to server and server returns a post alongwith ID than we create it
    const res = await fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: UserId,
        title: postTitle,
        body: postDescription,
        tags: tags,
        reactions: 0,
      }),
    });
    // converting server response into json
    const data = await res.json();

    // alert("Post Added Sucessfully");

    // Calling to add post
    addPost(data);

    // Navigating the page to home page to see the post
    navigate("/home");
  }

  return (
    <Form
      method="POST"
      onSubmit={handleSubmit}
      className="px-2 md:px-5 py-10 space-y-8 md:w-9/12 md:mx-auto mt-4 mb-10 mx-2 shadow-lg rounded-lg"
    >
      <div className=" flex justify-between flex-wrap">
        <label className="text-lg">User ID: </label>
        <input
          type="number"
          ref={userIdElement}
          required
          name="UserId"
          placeholder="Example - 101"
          className="border-b border-slate-500 mx-2 focus:outline-none text-lg w-3/5"
        />
      </div>

      {/* Removing since, dummyjson doesnot contains image */}
      {/* <div className=" flex justify-between items-center flex-wrap">
        <label className="text-lg">Post (image/video): </label>
        <input
          type="file"
          ref={postElement}
          name="postElement"
          className=" text-lg w-3/5 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div> */}

      <div className=" flex justify-between flex-wrap">
        <label className="text-lg">Post title: </label>
        <input
          type="text"
          ref={postTitleElement}
          required
          name="postTitle"
          placeholder="How are you feeling today..."
          className="border-b border-slate-500 mx-2 focus:outline-none text-lg w-3/5"
        />
      </div>

      <div className=" flex justify-between flex-wrap">
        <label className="text-lg">Post description: </label>
        <textarea
          ref={postDescriptionElement}
          required
          name="postDescription"
          placeholder="Tell us more about it."
          rows="1"
          className="border-b border-slate-500 mx-2 focus:outline-none text-lg w-3/5"
        ></textarea>
      </div>

      <div className=" flex justify-between flex-wrap">
        <label className="text-lg">tags: </label>
        <input
          ref={tagsElement}
          name="tags"
          required
          type="text"
          placeholder="#tags seperated by space"
          className="border-b border-slate-500 mx-2 focus:outline-none text-lg w-3/5"
        />
      </div>

      <button
        type="submit"
        className="px-4 py-1 w-full max-w-xs bg-blue-500 rounded-lg text-white active:bg-blue-600 md:hover:bg-bue-600 md:active:bg-blue-500"
      >
        Post
      </button>
    </Form>
  );
};

// export async function CreatePostAction(data) {
//   // This is giving error
//   const { addPost } = useContext(PostList);

//   const formData = await data.request.formData();
//   const postData = Object.fromEntries(formData);

//   const { UserId, postTitle, postDescription, tags } = postData;

//   try {
//     const res = await fetch("https://dummyjson.com/posts/add", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         // you can pass postData if all the fields are same since postdata is already this

//         userId: UserId,
//         title: postTitle,
//         body: postDescription,
//         tags: tags,
//         reactions: 0,
//       }),
//     });

//     if (!res.ok) {
//       throw "Post is not uploaded";
//     }

//     // converting server response into json
//     const resData = await res.json();

//     // alert("Post Added Sucessfully");

//     // Calling to add post
//     addPost(resData);
//     console.log(resData);
//   } catch (err) {
//     console.error(err);
//   }

//   // Navigating the page to home page to see the post
//   // navigate("/");

//   // Using redirect() instead of navigate function
//   return redirect("/");
// }
