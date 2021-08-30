import "./App.css"
import { RecoilRoot } from "recoil"
// import Counter from "./Counter";
import TodoList from "./todo/TodoList";

function App() {
    return (
        <RecoilRoot>
            {/* <Counter /> */}
            <TodoList />
        </RecoilRoot>
    )
}


export default App;