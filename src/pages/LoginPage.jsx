import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'

const LoginPage = () => {
    const {loginUser} = useContext(AuthContext)
  return (
    <div className="card w-25 mt-3 shadow-sm border-0 text-bg-light">
        <div className="card-body">
            <div className="card-title">
                <h3>User login</h3>
            </div>
            <form onSubmit={loginUser}>
                <div className="mb-3">
                    <label htmlFor="floatingInput" className="form-label">Username</label>
                    <input type="text" name="username" className="form-control form-control-md" id="floatingInput" placeholder="Username"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="floatingPassword" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control form-control-md" id="floatingPassword" placeholder="Password"/>
                </div>
                <input className="btn btn-outline-primary btn-md" type="submit" value="Login" />
            </form>
        </div>
    </div>
  )
}

export default LoginPage