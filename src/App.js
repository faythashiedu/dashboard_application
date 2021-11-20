import "./App.css"
import Navbar from "./Components/Navbar/navbar"
import Sidebar from "./Components/Sidebar/sidebar"
import Home from "./Pages/HomePage/home"

function App() {
  return (
    <div>
      <Navbar />
      <div className="main">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
