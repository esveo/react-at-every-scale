import React, { CSSProperties, lazy, Suspense } from "react";
import { load } from "./loadComponent";

const Feed = lazy(() =>
  load("http://localhost:3030/feed/index.js").then((c) => ({
    default: c,
  }))
);
const NewPost = lazy(() =>
  load("http://localhost:3030/new-post/index.js").then((c) => ({
    default: c,
  }))
);

export function App() {
  return (
    <div style={appStyles}>
      <nav style={navStyles}>Face +</nav>
      <Suspense fallback="Loading">
        <div style={postWrapperStyles}>
          <NewPost />
        </div>
        <div style={feedWrapperStyles}>
          <Feed />
        </div>
      </Suspense>
    </div>
  );
}

const appStyles: CSSProperties = {
  width: 300,
  background: "#333",
  height: 450,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
};

const navStyles: CSSProperties = {
  fontWeight: "bold",
  textAlign: "center",
  padding: "1em",
  flex: "0 0 auto",
};

const feedWrapperStyles: CSSProperties = {
  flex: "1 1 auto",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
};

const postWrapperStyles: CSSProperties = { flex: "0 0 auto" };
