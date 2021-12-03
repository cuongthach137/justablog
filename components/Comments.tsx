import moment from "moment";
import React from "react";
import { Comment } from "../types";
import { joinClx } from "../utils/joinClassName";

const Comments = ({ comments }: { comments: Comment[] }) => {
  return (
    <div className="mb-5 text-gray-800 ">
      <h2 className="text-2xl lg:text-3xl mb-5">
        {!comments.length
          ? "There are 0 comments"
          : comments.length === 1
          ? "There is one comment"
          : "There are " + comments.length + " comments"}
      </h2>
      {console.log(comments)}
      <div className="border-solid border-blue-200 border-[1px]">
        {comments.length > 0 &&
          comments.map((comment, index) => {
            const commentBoxClx = joinClx(
              "w-full min-h-[100px] border-blue-200 mb-3 px-2",
              index !== comments.length - 1 ? "border-b-[1px]" : ""
            );
            return (
              <div className={commentBoxClx}>
                <div className="font-semibold text-lg text-blue-500 mb-2">
                  {comment.name.toUpperCase()} - {comment.email} -{" "}
                  {moment(comment.createdAt).calendar()}
                </div>
                <div>{comment.comment}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Comments;
