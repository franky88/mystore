import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import AuthContext, { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import { useContext } from "react";

const App = () => {
  const autheticated = false;
  const { user } = useContext(AuthContext)
  return (
    <AuthProvider>
      <Router>
          <Header />
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
              <Routes>
                <Route path="/" element={!user ? <Navigate to="/login" /> : <HomePage />} exact />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
              </div>
            </div>
          </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
