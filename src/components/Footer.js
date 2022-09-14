import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box><Container>
            <Row>
                <Column>
                    <Heading>About Us</Heading>
                    
                </Column>
                <Column>
                    <Heading>Services</Heading>
                   
                </Column>
                <Column>
                    <Heading>Contact Us</Heading>
                    
                </Column>
                <Column>
                    <Heading>Social Media</Heading>
                    
                </Column>
            </Row>
        </Container>
            <h3 style={{
                color: "#d9d9d9",
                textAlign: "center",
                marginTop: "-50px",
                borderTop: "solid #e6e6e6"
            }}>
                &copy;Copyright ALTA-FE08-1
            </h3>

        </Box>
    );
};
export default Footer;
