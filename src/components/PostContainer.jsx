import React, { useContext, useEffect, useState } from "react";
import { Post } from "./Post";
import { PostList } from "../store/Post-list-store";
import { WelcomeMessage } from "./WelcomeMessage";
import { LoadingSpinner } from "./LoadingSpinner";

export const PostContainer = () => {
  const { postList, fetching } = useContext(PostList);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 ? (
        <WelcomeMessage />
      ) : (
        <>
          <p className="text-xl text-center font-semibold tracking-wide shadow-xl py-5">
            All New Posts
          </p>
          <div className=" mt-20 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-y-10 sm:gap-x-2 grid-auto-rows-auto lg:mx-2">
            {postList.map((post) => (
              <Post key={post.id} postData={post} />
            ))}
          </div>
        </>
      )}
    </>
  );
};
