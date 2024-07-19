import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1>Task: Add three Card elements</h1>
      {/* Create multiple copies of the <Card/> component */}
      <Card h2="First card's h2" />
      <Card h3="Second card's h3"/>
      <Card h2="Third card's h2" h3="Third card's h3"/>
    </div>
  );
}

export default App;
