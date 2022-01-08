import React from "react";
import {useState} from "react";
import Counter from "./components/counter";
import ClassCounter from "./components/ClassCounter";
import Post from "./components/post";
import PostList from "./components/postList";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "Клубника", body: "это ягода"},
    {id: 2, title: "Малина", body: "тоже ягода"},
    {id: 3, title: "И калина", body: "тоже"},
  ]);
  const [posts2, setPosts2] = useState([
    {id: 1, title: "Банан", body: "это ягода"},
    {id: 2, title: "Яблоко", body: "тоже ягода"},
    {id: 3, title: "И кибербуллинг", body: "тоже"},
  ]);

  return (
    <div className="App">
      <PostList posts={posts} title="Список постов 1"/>
      <PostList posts={posts2} title="Список постов 2"/>
    </div>
  );
}

export default App;
