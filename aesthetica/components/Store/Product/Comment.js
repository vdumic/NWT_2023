import { useContext, useState } from "react";

import AppContext from "../../../store/app-context";

const Comment = ({ comment, slug, commentChange }) => {
  const appCtx = useContext(AppContext);

  const [isEditing, setIsEditiong] = useState(false);
  const [newComment, setNewComment] = useState(comment.text);

  const handleEditComment = async () => {
    await fetch(`http://localhost:3000/api/comments/${slug}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: comment.id, text: newComment }),
    });

    setIsEditiong(false);
    commentChange();
  };

  const handleDeleteComment = async () => {
    await fetch(`http://localhost:3000/api/comment/${comment.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    commentChange();
  };

  return (
    <div className="py-5 flex align-middle">
      <p className="font-middle text-xl">{comment.text}</p>
      <div className="flex justify-between">
        {appCtx.userData.email == comment.useremail && (
          <button
            className="flex justify-center bg-bckgrnd-light hover:bg-bckgrnd text-black font-medium mt-8 py-2 px-12 border-2 border-[#252526] rounded-full shadow-xl ml-4"
            onClick={(e) => {
              handleDeleteComment(slug);
            }}
          >
            Delete
          </button>
        )}
        {appCtx.userData.email == comment.useremail && (
          <button
            className="flex justify-center bg-bckgrnd-light hover:bg-bckgrnd text-black font-medium mt-8 py-2 px-12 border-2 border-[#252526] rounded-full shadow-xl ml-4"
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
              className="border-2 px-14 ml-4"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button
              className="flex justify-center bg-bckgrnd-light hover:bg-bckgrnd text-black font-medium mt-8 py-2 px-12 border-2 border-[#252526] rounded-full shadow-xl ml-4"
              type="submit"
              onClick={handleEditComment}
            >
              Update
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Comment;
