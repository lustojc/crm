import React from "react";
import MyButton from "./button/MyButton";

const PostItem = ({ remove, number, ...props }) => {
  return (
    <div>
      <div className="post">
        <div className="post__name">
          <div>
            {number + ") "}
            {props.post.name}
          </div>
        </div>
        <div className="post__info">
          <div>Дата: {props.post.date}</div>
          <div>Компания: {props.post.company}</div>
          <div>Событие: {props.post.events}</div>
          <div>Факультет: {props.post.faculty}</div>
          <div>Группа: {props.post.group}</div>
          <div className="post__btns">
          <MyButton onClick={() => remove(props.post)}>Удалить</MyButton>
        </div>
        </div>

        
      </div>
    </div>
  );
};

export default PostItem;
