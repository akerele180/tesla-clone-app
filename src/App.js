import "./App.css";
import Header from "./components/Header/Header";
// import RightMenu from "./components/Header/RightMenu/RightMenu";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      {/* <RightMenu /> */}
      <Header />
      <Home />
    </div>
  );
}

export default App;
