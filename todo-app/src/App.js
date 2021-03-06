import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoContext from "./contexts/TodoContext";
import Styles from "./styles/AppStyles.module.css"

function App() {
  return (
    <div className={`App ${Styles.main_wrapper}`}>
      <TodoContext>
        <TodoForm />
        <TodoList />
      </TodoContext>
    </div>
  );
}

export default App;
