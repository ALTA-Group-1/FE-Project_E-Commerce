import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const MyStore = () => {
  const navigate = useNavigate()
  return (
    <div>MyStore
      <div>
        <Button onClick={() => navigate("/")}>Home</Button>
      </div>
    </div>
  )
}

export default MyStore