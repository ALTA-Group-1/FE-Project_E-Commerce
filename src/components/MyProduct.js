import React from 'react';
import { Container, Button } from 'react-bootstrap';
import '../style/MyProduct.css';

const MyProduct = () => {
  return (
    <div>
        <Container className="content mb-5">
            <div className="content-image">
                <img src="https://pbs.twimg.com/media/FchLCUcaMAIDzUe?format=jpg&name=small" />
            </div>
            <div className="content-detail">
                <h5>Product</h5>
                <h5>Rp 123</h5>
                <h5>Category</h5>
                <h5>Quantity</h5>
                <h5>Product Description</h5>
                <p style={{ width: '100%'}}>Aoashi adalah serial manga Jepang yang ditulis dan diilustrasikan oleh Yūgo Kobayashi dan berdasarkan konsep oleh Naohiko Ueno. Ini telah diserialkan di majalah manga seinen Shogakukan Weekly Big Comic Spirits sejak Januari 2015.</p>
                <div className="btnEdit pt-3">
                    <Button variant="info" style={{marginRight: '20px'}} type="submit">Edit Product</Button>
                    <Button variant="info" type="submit">Remove Product</Button>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default MyProduct