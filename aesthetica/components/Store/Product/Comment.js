import { useContext } from "react";

import AppContext from "../../../store/app-context";

const handleDeleteComment = async (slug) => {
  await fetch(`http://localhost:3000/api/comments/${slug}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
};

const Comment = ({ comment, slug }) => {
  const appCtx = useContext(AppContext);

  return (
    <div className="py-5 flex align-middle">
      <p className="px-5">{comment.text}</p>
      {true && (
        <button
          className="flex justify-center bg-[#252526] hover:bg-[#3e3e42] hover:border-[#3e3e42] text-gray-100 font-medium mt-8 py-2 px-12 border-2 border-[#252526] rounded-full shadow-xl"
          onClick={(e) => {
            handleDeleteComment(slug);
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default Comment;
