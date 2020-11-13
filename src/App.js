import React, { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Posts from "./components/Posts/Posts";
import data from "./dummy-data";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState(data);
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.

  const likePost = (postId) => {
    /*
      This function serves the purpose of increasing the number of likes by one, of the post with a given id.

      The state of the app lives at the top of the React tree, but it wouldn't be fair for nested components not to be able to change state!
      This function is passed down to nested components through props, allowing them to increase the number of likes of a given post.

      Invoke `setPosts` and pass as the new state the invocation of `posts.map`.
      The callback passed into `map` performs the following logic:
        - if the `id` of the post matches `postId`, return a new post object with the desired values (use the spread operator).
        - otherwise just return the post object unchanged.
     */
    setPosts(
      [...posts].map((el) => {
        if (el.id === postId) {
          ++el.likes;
          return el;
        } else {
          return el;
        }
      })
    );
  };
  return (
    <div className="App">
      {/* Check the implementation of each component, to see what props they require, if any! */}
      <SearchBar />
      <Posts posts={posts} likePost={likePost} />
    </div>
  );
};

export default App;
