import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-900 w-full min-h-[100vh] items-center justify-center flex flex-col gap-10">
      <div className="flex flex-row items-center justify-center gap-4">
        <a href="https://vitejs.dev">
          <img src={viteLogo} className="h-32 w-auto" alt="Vite logo" />
        </a>
        <a href="https://react.dev">
          <img src={reactLogo} className="h-32 w-auto" alt="React logo" />
        </a>
      </div>

      <h1 className="text-4xl font-bold text-white">Vite + React</h1>

      <button
        className="bg-black border-2 border-black hover:border-blue-500 transition-all text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
    </div>
  );
}

export default App;
