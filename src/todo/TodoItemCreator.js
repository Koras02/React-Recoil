import React, {useState} from "react";
import { todoListState } from "../recoil/todo";
import { useSetRecoilState } from "recoil";

const TodoItemCreator = () => {
    const [inputValue, setInputValue] = useState('');
    const setTodoList = useSetRecoilState(todoListState);
    // useSetRecoilState 를 사용해서 set함수만을 가져올 수 있다.

    const addItem = () => {
        setTodoList((oldTodoList) => {
            const id = oldTodoList.length
            ? oldTodoList[oldTodoList.length - 1].id + 1
            : 0; // oldTodoList에 원소가 있다면 그 원소에 있는 id 값에 + 1씩 더해주고 없다면 
            // 기존 0값을 id로 간주한다.
            return [
                ...oldTodoList,
                {
                    id,
                    text: inputValue,
                    isComplate: false,
                },
            ];
        });
        setInputValue('');
    };


    const onChange = ({ target: { value } }) => {
        setInputValue(value);
    };


    return (
        <div>
            <input type="text" value={inputValue} onChange={onChange} />
            <button onClick={addItem}>Add</button>
        </div>
    );
};

export default TodoItemCreator;