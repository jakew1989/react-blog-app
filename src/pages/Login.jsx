import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input required type="email" placeholder='email' />
        <input required type="text" placeholder='username' />
        <input required type="password" placeholder='password' />
        <button>Login</button>
        <p>This is an error!</p>
      </form>
      <span>Don't have an account? <Link to="/register">Register here</Link></span>
    </div>
  )
}

export default Login
