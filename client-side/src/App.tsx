import logo from "./logo.svg";
import "./App.css";
import auth from "./firebase.init";
import Header from "./Components/shared/Header/Header";
import Home from "./Components/Home/Home";

function App() {
  console.log(auth);
  return (
    <main>
      <Header />
      <Home />
    </main>
  );
}

export default App;
