import "../App.css";
import React, { useEffect, useState } from "react";
import MyButton from "../UI/button/MyButton";
import MyModal from "../UI/modal/MyModal";
import PostForm from "../UI/PostForm";
import PostList from "../UI/PostList";
import PostFilter from "../UI/PostFilter";
import usePosts from "../customHooks/usePosts";

function Students() {
  const [modal, setModal] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "Саша Лусто",
      date: "2000-04-08",
      company: "iTechArt",
      events: "Проходит стажировку",
      faculty: "Информационные технологии",
      group: "109",
    },
    {
      id: 2,
      name: "Валера Савицкий",
      date: "2017-10-29",
      company: "ЗАВОД",
      events: "Работае за станком под пивас",
      faculty: "Завод-Сквад",
      group: "401",
    },
    {
      id: 3,
      name: "Никита Коваленко",
      date: "2007-01-09",
      company: "МВД",
      events: "Бегает за бомжами на вокзале",
      faculty: "Права и Обмана",
      group: "301",
    },
    {
      id: 4,
      name: "Дмитрий Бурак",
      date: "2011-07-19",
      company: "EPAM",
      events: "Working as a Junior Developer",
      faculty: "Информатика",
      group: "211",
    },
    {
        id: 5,
        name: "Вадим Говоронок",
        date: "2018-10-01",
        company: "isSoft",
        events: "На испытательном сроке",
        faculty: "Программирование электронных маших",
        group: "102Б",
      },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <>
      <MyButton
        style={{ marginTop: "30px", marginLeft: "20px" }}
        onClick={() => setModal(true)}
      >
        Добавить студента
      </MyButton>
      <PostFilter filter={filter} setFilter={setFilter} />
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm setVisible={setModal} create={createPost} />
      </MyModal>

      <PostList
        remove={removePost}
        posts={sortedAndSearchedPost}
        title={"Список студентов"}
      />
    </>
  );
}

export default Students;
