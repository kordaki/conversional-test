import Generator from "./containers/Generator";
import { data1, data2 } from "./mock";

function App() {
  return (
    <div className="App">
      <Generator data={data1} />
    </div>
  );
}

export default App;
