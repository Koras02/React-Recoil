import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../recoil/todo";

const TodoItem = ({ item }) => {
    const [todoList, setTodoList] = useRecoilState(todoListState);

    const editItemText = ({ target: {value} }) =>{
        const newList = todoList.map((listItem) => 
         listItem.id === item.id ? { ...listItem, text: value } : listItem
    ); // id가 같은 것은 text를 업데이트 하고 아닌 것은 그대로 넣는 list를 만들어주는 set
    setTodoList(newList);
    };


    const toggleItemCompletion = () => {
        const newList = todoList.map((listItem) => 
          listItem.id === item.id
          ? { ...listItem, isComplete: !item.isComplete }
          : listItem
        );
        // id가 같은 것은 isComplete를 업데이트 하고 아닌 것은 그대로 넣는 list를 만들어 set
        setTodoList(newList);
    };


    const deleteItem = () => {
        const newList = todoList.filter((listItem) => listItem.id !== item.id);
        // id와 다른것들을 filterling해서 set해준다.
        setTodoList(newList);
    };

    return (
        <div>
            <input type="text" value={item.text} onChange={editItemText} />
            <input 
              type="checkbox"
              checked={item.isComplete}
              onChange={toggleItemCompletion}
            />
            <button onClick={deleteItem}>X</button>
        </div>
    );
};

export default TodoItem;