import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Header = () => {
  let {user, logoutUser} = useContext(AuthContext)
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to="/" >Mystore</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" >Home</Link>
            </li>
            <li className="nav-item">
              {user ? (
                <Link className="nav-link" onClick={logoutUser} to="/login" >Logout</Link>
              ) : (
                <Link className="nav-link" to="/login" >Login</Link>
              )}
            </li>
          </ul>
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <small>Hello guest! {user && user.username}</small>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header