import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoContext from "./contexts/TodoContext";
import Styles from "./styles/AppStyles.module.css"

function App() {
  return (
    <div className={`App ${Styles.main_wrapper}`}>
      <TodoContext>
        <h1>What needs to be done?</h1>
        <TodoForm />
        <TodoList />
      </TodoContext>
    </div>
  );
}

export default App;
