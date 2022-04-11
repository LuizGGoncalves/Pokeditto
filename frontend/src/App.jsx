import Home from "./pages/Home";
import Signup from "./components/signup";
import {
  BrowserRouter as Routers,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { context } from "./contexts/context.form";
import { useContext } from "react";

function App() {
  const { isRegistrationForm } = useContext(context);

  return (
    <Routers>
      <Routes>
        {isRegistrationForm ? (
          <Route exact path="/" element={<Signup />} />
        ) : (
          <Route exact path="/" element={<Home />} />
        )}
      </Routes>
    </Routers>
  );
}

export default App;
