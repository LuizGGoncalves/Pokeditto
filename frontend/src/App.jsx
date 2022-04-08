import Home from "./pages/Home";
import {
  BrowserRouter as Routers,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Routers>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Routers>
  );
}

export default App;
