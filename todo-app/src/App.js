import TodoForm from "./components/TodoForm";
import TodoContext from "./contexts/TodoContext";

function App() {
  return (
    <div className="App">
      <TodoContext>
        <TodoForm />
      </TodoContext>
    </div>
  );
}

export default App;
