import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navb from "./components/Navb";
import Detail from "./pages/Detail";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navb />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/favorite" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
