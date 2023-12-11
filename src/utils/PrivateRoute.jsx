import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useContext(AuthContext);

  return (
    <Route {...rest} >
        { user ? children : <Redirect to="/login" />}
    </Route>
  );
};

export default PrivateRoute;
