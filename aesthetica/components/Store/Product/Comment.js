import { useContext, useState } from "react";

import AppContext from "../../../store/app-context";

const handleDeleteComment = async (slug) => {
  await fetch(`http://localhost:3000/api/comments/${slug}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
};

const Comment = ({ comment, slug }) => {
  const appCtx = useContext(AppContext);

  const [isEditing, setIsEditiong] = useState(false);
  const [newComment, setNewComment] = useState(comment.text);

  const handleEditComment = async () => {
    await fetch(`http://localhost:3000/api/comments/${slug}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: newComment }),
    });

    setIsEditiong(false);
  };

  return (
    <div className="py-5 flex align-middle">
      <p className="px-5">{comment.text}</p>
      {appCtx.userData.email == comment.useremail && (
        <button
          className="flex justify-center bg-[#252526] hover:bg-[#3e3e42] hover:border-[#3e3e42] text-gray-100 font-medium mt-8 py-2 px-12 border-2 border-[#252526] rounded-full shadow-xl"
          onClick={(e) => {
            handleDeleteComment(slug);
          }}
        >
          Delete
        </button>
      )}
      {appCtx.userData.email == comment.useremail && (
        <button
          className="flex justify-center bg-[#252526] hover:bg-[#3e3e42] hover:border-[#3e3e42] text-gray-100 font-medium mt-8 py-2 px-12 border-2 border-[#252526] rounded-full shadow-xl"
          onClick={(e) => {
            setIsEditiong(true);
          }}
        >
          Edit
        </button>
      )}
      {isEditing && (
        <>
          <input
            type="text"
            name="comment"
            className="border-2 py-2 px-24"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            className="flex justify-center bg-[#252526] hover:bg-[#3e3e42] hover:border-[#3e3e42] text-gray-100 font-medium mt-8 py-2 px-12 border-2 border-[#252526] rounded-full shadow-xl"
            type="submit"
            onClick={handleEditComment}
          >
            Update
          </button>
        </>
      )}
    </div>
  );
};

export default Comment;
