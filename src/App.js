import React from "react";
import { data1, data2 } from "./mock";
import useGenerator from './hooks/useGenerator'

function App() {
  const generatedElement = useGenerator(data1)
  return (
    <div className="App">
      {generatedElement}
    </div>
  );
}

export default App;
