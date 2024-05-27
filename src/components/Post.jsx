import React, { useContext, useState } from "react";
import { AiFillDelete, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { PostList } from "../store/Post-list-store";
import { WhatsappShareButton } from "react-share";

export const Post = ({ postData }) => {
  const { deletePost } = useContext(PostList);

  const [liked, setLiked] = useState(0);

  function handleLike() {
    if (liked) {
      setLiked(0);
    } else {
      setLiked(1);
    }
  }

  function handleDeletePost() {
    if (confirm("You want  to delete this post?")) {
      deletePost(postData.id);
    }
  }

  return (
    <div className="shadow-md rounded-lg mx-auto flex flex-col max-w-xs relative hover:scale-105 hover:border hover:border-blue-400 transition duration-500 ease-in-out min-w-60">
      <AiFillDelete
        onClick={handleDeletePost}
        className="absolute -right-2 -top-3 text-xl cursor-pointer text-blue-600"
      />

      <div className="px-6 py-4 space-y-2">
        {/* Post Title */}
        <div className="font-bold text-xl cursor-pointer">{postData.title}</div>

        {/* Post Body */}
        <p className="text-gray-700 text-base cursor-pointer">
          {postData.body}
        </p>

        <div className="space-x-2 py-2 flex flex-wrap">
          {postData.tags.map((tag, index) => (
            <span
              key={index}
              className="my-1 px-3 py-1 rounded-full bg-gray-300 text-center"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between text-2xl">
          <div className=" text-center flex flex-col" onClick={handleLike}>
            {liked ? (
              <AiFillHeart className="cursor-pointer text-red-700" />
            ) : (
              <AiOutlineHeart className="cursor-pointer text-red-700" />
            )}

            <span className="text-gray-400 text-sm">
              {postData.reactions === 0
                ? liked
                : postData.reactions.likes + liked}
            </span>
          </div>

          <div
            className=" text-center flex flex-col"
            onClick={() =>
              alert("Sorry for inconvenience, we are working on it.")
            }
          >
            <FaRegCommentDots className="cursor-pointer text-blue-600" />
            <span className="text-gray-400 text-sm">0</span>
          </div>

          <div className=" text-center flex flex-col">
            <WhatsappShareButton
              url="https://example.com/page-to-share"
              title="Check out this amazing page!"
              socialmedia="twitter"
            >
              <IoIosShareAlt className="cursor-pointer text-blue-600" />
              <span className="text-gray-400 text-sm">0</span>
            </WhatsappShareButton>
          </div>
        </div>
      </div>
    </div>
  );
};
