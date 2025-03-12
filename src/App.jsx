import PostCard from "./components/PostCard";


const posts = [
  { id: 1, username: "JohnDoe", profilePic: "https://via.placeholder.com/50", content: "Hello World!" },
  { id: 2, username: "JaneSmith", profilePic: "https://via.placeholder.com/50", content: "React is amazing!" }
];

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Home Page</h1>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          username={post.username}
          profilePic={post.profilePic}
          content={post.content}
        />
      ))}
    </div>
  );
}

export default App;
