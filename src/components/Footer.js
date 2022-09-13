import React from 'react'
import { Stack } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'


const Footer = () => {
    return (
        <footer style={{ backgroundColor: "#F6EEF4" }}>
            <Stack gap={2} className="col-md-5 mx-auto text-center m-0 p-0" >
                <div class="row">
                    <div className='border-bottom'>
                        <Nav className="justify-content-center" activeKey="/home">
                            <Nav.Item>
                                <Nav.Link href="" disabled>Active</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-1" disabled>Link</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2" disabled>Link</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="disabled" disabled>
                                    Disabled
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                    <div>&copy; Copyright Alta-FE-08</div>
                </div>
            </Stack>
        </footer>
    )
}

export default Footer