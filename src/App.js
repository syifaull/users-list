import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ListUsers } from "./components";
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
          <Route path="/home" element={<Home />} />
          <Route exact path="/" element={<ListUsers />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/favorite" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
