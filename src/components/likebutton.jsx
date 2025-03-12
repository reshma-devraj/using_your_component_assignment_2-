import { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        color: liked ? "red" : "black",
        fontSize: "16px",
      }}
    >
      {liked ? "❤️" : "🤍"} Like
    </button>
  );
};

export default LikeButton;
