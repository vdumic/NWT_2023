const Comment = ({ comment }) => {
  return (
    <div className="py-5 flex align-middle">
      <p>{comment.text}</p>
    </div>
  );
};

export default Comment;
