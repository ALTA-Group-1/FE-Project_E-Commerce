import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Detail = () => {
  const navigate = useNavigate()
  return (
    <div>Detail
      <div>
        <Button onClick={() => navigate("/")}>Home</Button>
      </div>
    </div>
  )
}

export default Detail