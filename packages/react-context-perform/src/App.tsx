import ContextOptimise from "./components/optimise";
import ContextUnOptimise from "./components/unOptimise";

function App() {
  console.log("rerendering app");
  return (
    <div className="flex flex-col gap-10">
      <div>
        <div>Context UnOptimise</div>
        <ContextUnOptimise />
      </div>

      <div>
        <div>Context Optimise</div>
        <ContextOptimise />
      </div>
    </div>
  );
}

export default App;
