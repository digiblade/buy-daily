import React from "react";
import "./Auth.css";
import loginbanner from "../../../../../Assets/banner/loginbanner.jpg";
import {useNavigate} from "react-router-dom"
export default function ExamLogin() {
  const navigate = useNavigate();
  const validation = ()=>{
    navigate("/exam-portal")
  }
  return (
    <div
      className="login-page"
      style={{
        backgroundImage: `url(${loginbanner})`,
        
      }}
    >
      <div className="login-card">
        <div className="title">Exam Portal Login</div>
        <form action="">
          <div className="form-control">
            <label htmlFor="">Username:</label>
            <input type="text" placeholder="username" />
          </div>
          <div className="form-control">
            <label htmlFor="">Username:</label>
            <input type="text" placeholder="password" />
          </div>
          <div className="right-text"><span>forget password?</span></div>
          <div className="form-control">
            <button type="button" className="btn btn-primary" onClick={validation}>Signin</button>
          </div>
        </form>
      </div>
    </div>
  );
}
