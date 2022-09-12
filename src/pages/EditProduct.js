import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const EditProduct = () => {
  const navigate = useNavigate()
  return (
    <div>EditProduct
      <div>
        <Button onClick={() => navigate("/")}>Home</Button>
      </div>
    </div>
  )
}

export default EditProduct