import React, { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Posts from "./components/Posts/Posts";
import data from "./dummy-data";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState(data);
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts(
      [...posts].filter((e) => {
        let testString = searchInput.toLowerCase();
        return e.username.toLowerCase().includes(testString);
      })
    );
    setSearchInput("");
  };

  const likePost = (postId) => {
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
      <SearchBar
        searchInput={searchInput}
        handleInputChange={(value) => setSearchInput(value)}
        handleSubmit={(e) => handleSubmit(e)}
      />
      <Posts posts={posts} likePost={likePost} />
    </div>
  );
};

export default App;
