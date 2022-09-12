import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const History = () => {
  const navigate = useNavigate()
  return (
    <div>History
      <div>
        <Button onClick={() => navigate("/")}>Home</Button>
      </div>
    </div>
  )
}

export default History