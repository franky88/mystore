import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import PrivateRoute from "./utils/PrivateRoute";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <PrivateRoute path="/" exact>
                <HomePage />
              </PrivateRoute>
              <Route component={LoginPage} path="/login"/>
            </div>
          </div>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
