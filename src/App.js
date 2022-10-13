import toast from "./components/alerts/toast";

function App() {
  return (
    <div>
      <h1>Hey</h1>
      <button onClick={() => toast("success", "Some title here", 2000)}>
        Show toast
      </button>
    </div>
  );
}

export default App;
