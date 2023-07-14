import React, { useState } from "react";
import Accounts from "../shared/Accounts";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const account = validateCredentials(email, password);

    if (account) {
      setEmail("");
      setPassword("");
      toast.success("Login Successfully");
      history("/");
    } else {
      toast.error("Login Failed");
    }
  };

  const validateCredentials = (email, password) => {
    return Accounts.find(
      (acc) => acc.email === email && acc.password === password
    );
  };

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Login</h3>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                placeholder="Your Email *"
                className="form-control"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group mt-3">
              <input
                placeholder="Your Password *"
                className="form-control"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group mt-3">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
            <div className="form-group">
              <Link to="/register" className="ForgetPwd">
                Do not have account?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>

    // <form onSubmit={handleSubmit}>
    //   <h2>Đăng nhập</h2>
    //   <div>
    //     <label>Email:</label>
    //     <input
    //       type="email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       required
    //     />
    //   </div>
    //   <div>
    //     <label>Mật khẩu:</label>
    //     <input
    //       type="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       required
    //     />
    //   </div>
    //   <button type="submit">Đăng nhập</button>
    // </form>
  );
};

export default Login;
