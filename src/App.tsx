import { useState } from "react";

function App() {
  const [state, setState] = useState(0);

  return (
    <div className="font-sans w-full h-screen space-y-2 flex flex-col items-center justify-center">
      <div className="text-3xl font-semibold">Inited FeedSource</div>
      <div className="text-lg font-normal text-zinc-500">
        Open Source Feedback React Package
      </div>
    </div>
  );
}

export default App;
