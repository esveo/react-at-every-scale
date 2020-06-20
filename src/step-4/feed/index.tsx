import { useOn } from "../EventBus";
import { provideComponent } from "../provideComponent";

const React = window.React;
const { useState } = React;

function Feed() {
  const [posts, setPosts] = useState<string[]>([]);

  useOn("new-post", (event) =>
    setPosts((oldPosts) => [event.content, ...oldPosts])
  );

  return (
    <div
      style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        height: "100%",
      }}
    >
      <p style={{ flex: "0 0 auto" }}>Feed</p>
      <hr />
      <div
        style={{ flex: "1 1 auto", overflow: "auto", height: "100%" }}
      >
        {posts.map((p, index) => (
          <React.Fragment key={index}>
            <div>
              <small>{p}</small>
            </div>
            <hr />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

provideComponent(Feed);
