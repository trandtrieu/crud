import React, { useState } from "react";
import Accounts from "../shared/Accounts";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    registerAccount(email, password);
    setEmail("");
    setPassword("");
    toast.success("Register Successfully");
    history("/login");
  };

  const registerAccount = (email, password) => {
    Accounts.push({ email, password });
  };

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-2">
          <h3 className="mb-4">Register</h3>

          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <input
                className="form-control"
                placeholder="Your Email *"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Your Password *"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Register" />
            </div>
          </form>
        </div>
      </div>
    </div>

    // <form onSubmit={handleSubmit}>
    //   <h2>Đăng ký</h2>
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
    //   <button type="submit">Đăng ký</button>
    // </form>
  );
};

export default Register;
