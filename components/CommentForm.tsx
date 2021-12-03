import React, { useReducer, useRef, useState } from "react";
import { submitComment } from "../services";

const CommentForm = ({ postSlug }: { postSlug: string }) => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
  });
  const comment = useRef() as React.MutableRefObject<HTMLInputElement>;

  const [submitState, setSubmitState] = useState("");
  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (comment.current && info.email && info.name) {
      const commentToSubmit = {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        comment: comment.current.innerText,
        email: info.email,
        name: info.name,
        slug: postSlug,
      };
      setSubmitState("pending");

      try {
        const result = await submitComment(commentToSubmit);
        setSubmitState("success");
      } catch (error) {
        setSubmitState("failed");
      }
    }
  }

  if (submitState === "pending") {
    return <div>Loading...</div>;
  }

  if (submitState === "success") {
    return (
      <div>
        Thank you for leaving a comment. We will review and publish it timely.
        Stay tuned!
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="mb-4 mx-auto">
          <label className="block text-gray-700  font-bold mb-4 text-xl">
            Leave a comment
          </label>{" "}
          <label>
            Name
            <input
              type="text"
              className="p-4 border-solid border-2 border-blue-500 block w-80 h-[50px] mb-4"
              onChange={(e) =>
                setInfo({
                  ...info,
                  name: e.target.value,
                })
              }
            />
          </label>
          <label>
            Email
            <input
              type="email"
              className="p-4 border-solid border-2 border-blue-500 block w-80 h-[50px] mb-4"
              onChange={(e) =>
                setInfo({
                  ...info,
                  email: e.target.value,
                })
              }
            />
          </label>
          <label>
            Comment
            <div
              ref={comment}
              contentEditable
              className="p-4 border-solid border-2 border-blue-500 block w-80 min-h-[200px] mb-4"
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentForm;
