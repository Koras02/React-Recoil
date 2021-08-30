import {atom, selector} from "recoil";

export const todoListState = atom({
    key: 'todoListState',
    default: [],
});


export const todoListFilterState = atom({
    key: "todoListFilterState",
    default:"Show All",
}); // 어떤 값을 filter하는지 정하는 state

export const filteredTodoListState = selector({
    key: 'filteredTodoListState',
    // get에는 객체 안에 get함수가 들어있는 파라미터를 받는다.
    // get을 이용해 state들을 불러올 수 있다. 어떤 기준으로
    // filtering할지 state와 todoList state를 받아 기준에 따라 filtering 한다.
    get: ({ get }) => {
        const filter = get(todoListFilterState);
        const list = get(todoListState);
        switch(filter) {
            case 'Show Completed':
                return list.filter((item) => item.isComplete);
            case 'Show Uncompleted':
                return list.filter((item) => !item.isComplete);
            default:
                return list;
        }
    },
}); // 필터 된 todoList를 반환해주는 selector

export const todoListStatsState = selector({
    key: 'todoListStatsState',
    get: ({ get }) => {
        const todoList = get(filteredTodoListState);
        const totalNum = todoList.length;
        const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
        const totalUnCompletedNum = totalNum - totalCompletedNum;
        const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;
    
       return {
           totalNum,
           totalCompletedNum,
           totalUnCompletedNum,
           percentCompleted,
       };
    },
}); // todoList의 상태들을 계산해주는 selector
