import "./App.css";
import Button from "./components/Button.jsx";
import Alert from "./components/Alert.jsx";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button text="primary" />
        <Button text="secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert text="error" />
        <Alert text="warning" />
        <Alert text="info" />
        <Alert text="success" />
      </div>
    </div>
  );
}

export default App;
