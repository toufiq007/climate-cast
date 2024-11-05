import "./App.css";
import Home from "./components/Home";
import WeatherProvider from "./provider/WeatherProvider";

function App() {
  return (
    <>
      <WeatherProvider>
        <Home />
      </WeatherProvider>
    </>
  );
}

export default App;
