
import LikeButton from "./LikeButton";


const PostCard = ({ username, profilePic, content }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        borderRadius: "10px",
        width: "300px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <img
          src={profilePic}
          alt="Profile"
          style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }}
        />
        <strong>{username}</strong>
      </div>
      <p>{content}</p>
      <LikeButton />
    </div>
  );
};

export default PostCard;
