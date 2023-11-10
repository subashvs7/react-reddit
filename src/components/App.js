
import Accordion from "./accordion";
import Reddit from "../reddit.json";

function App() {
  return (
    <div className="task">
      <Accordion data={Reddit} />
    </div>
  );
}

export default App;
