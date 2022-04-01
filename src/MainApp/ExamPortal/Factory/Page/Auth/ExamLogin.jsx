import React from 'react'
import "./Auth.css"
export default function ExamLogin() {
  return (
    <div className='login-page'>
      <div className="login-card">
        <div className="title">Exam Portal Login</div>
        <form action="">
        <div className="form-control">
            <label htmlFor="">Username:</label>
            <input type="text" />
          </div>
          <div className="form-control">
            <label htmlFor="">Username:</label>
            <input type="text" />
          </div>
          <div className="form-control">
            <input type="button" value="signin" />
          </div>
        </form>
      </div>
    </div>
  )
}
