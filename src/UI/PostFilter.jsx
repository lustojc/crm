import React from "react";
import MyInput from "./input/MyInput";
import MySelect from "./select/MySelect";
import cl from "../UI/input/MyInput.module.css";


const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        className={cl.myLittleInput}
        placeholder="Поиск студента по имени"
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Сортировка студентов"
        options={[
          { value: "name", name: "По имени" },
          { value: "date", name: "По дате" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
