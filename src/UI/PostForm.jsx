import React, { useState } from "react";
import MyButton from "./button/MyButton";
import MyInput from "./input/MyInput";
const PostForm = ({ create, setVisible }) => {
  const [post, setPost] = useState({
    id: "",
    name: "",
    date: "",
    company: "",
    events: "",
  });

  function addNewPost(e) {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({
      id: "",
      name: "",
      date: "",
      company: "",
      events: "",
      faculty: "",
      group: "",
    });
  }
  function cancelAddNewPost(e) {
      e.preventDefault();
      setVisible(false);
  }
  

  return (
    <form>
      <MyInput
        type="text"
        placeholder="Имя"
        value={post.name}
        onChange={(e) => setPost({ ...post, name: e.target.value })}
      />
      <MyInput
        type="text"
        placeholder="Специальность"
        value={post.faculty}
        onChange={(e) => setPost({ ...post, faculty: e.target.value })}
      />
      <MyInput
        type="text"
        placeholder="Номер группы"
        value={post.group}
        onChange={(e) => setPost({ ...post, group: e.target.value })}
      />
      <MyInput
        type="date"
        placeholder="Дата поступления"
        value={post.date}
        onChange={(e) => setPost({ ...post, date: e.target.value })}
      />
      <MyInput
        type="text"
        placeholder="Компания"
        value={post.company}
        onChange={(e) => setPost({ ...post, company: e.target.value })}
      />
      <MyInput
        type="text"
        placeholder="Событие"
        value={post.events}
        onChange={(e) => setPost({ ...post, events: e.target.value })}
      />
      <MyButton onClick={addNewPost}>Добавить</MyButton>
      <MyButton onClick={cancelAddNewPost}>Удалить</MyButton>
    </form>
  );
};

export default PostForm;
