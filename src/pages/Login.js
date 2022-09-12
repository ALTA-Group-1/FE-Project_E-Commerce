import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  return (
    <div>Login
      <div>
        <Button onClick={() => navigate("/")}>Home</Button>
      </div>
    </div>
  )
}

export default Login