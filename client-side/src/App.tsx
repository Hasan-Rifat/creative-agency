import logo from "./logo.svg";
import "./App.css";
import auth from "./firebase.init";
import Header from "./Components/Header";

function App() {
  console.log(auth);
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
