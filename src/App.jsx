import "./App.css";
import AboutPage from "./components/AboutPage/AboutPage";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Homepage />
            <AboutPage />
        </div>
    );
}

export default App;
