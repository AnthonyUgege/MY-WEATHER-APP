import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WeatherDataUi from "./components/WeatherDataUi";

function App() {
  return (
    <div className="App">
      <Header />
      <WeatherDataUi />
      <Footer />
    </div>
  );
}

export default App;
