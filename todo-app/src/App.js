import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoContext from "./contexts/TodoContext";

function App() {
  return (
    <div className="App">
      <TodoContext>
        <TodoForm />
        <TodoList />
      </TodoContext>
    </div>
  );
}

export default App;
