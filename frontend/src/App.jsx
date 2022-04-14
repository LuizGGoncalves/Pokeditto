import Home from "./pages/Home";
import Form from "./pages/Form";
import Dashboard from "./pages/Dashboard";
import Spinner from "./components/Spinner";

import {
  BrowserRouter as Routers,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { context } from "./contexts/context.form";
import { privates } from "./contexts/private";
import { useContext, useEffect } from "react";

function App() {
  const { isRegistrationForm } = useContext(context);
  const { auth, loading } = useContext(privates);

  const PrivateRoute = ({ children }) => {
    if (loading) return <Spinner />;
    if (!auth) return <Navigate to="/" />;

    return children;
  };

  return (
    <Routers>
      <Routes>
        {isRegistrationForm ? (
          <Route path="/" element={<Form />} />
        ) : (
          <Route exact path="/" element={<Home />} />
        )}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Routers>
  );
}

export default App;
