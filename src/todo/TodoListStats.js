import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../recoil/todo";

const TodoListStats = () => {
    const {
        totalNum,
        totalCompletedNum,
        totalUnCompletedNum,
        percentCompleted,
    } = useRecoilValue(todoListStatsState);
    let formattedPercentCompleted = Math.round(percentCompleted * 100);


    return (
        <ul>
            <li>전체 개수: {totalNum}</li>
            <li>입력완료된 개수: {totalCompletedNum}</li>
            <li>제외된 개수: {totalUnCompletedNum}</li>
            <li>퍼센트를 포함한 개수: {formattedPercentCompleted}</li>
        </ul>
    );
};

export default TodoListStats;

