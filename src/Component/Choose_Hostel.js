import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Image } from 'react-bootstrap';

function Choose_Hostel() {
    return (
        <div>
            <Container>
                <Row style={{ border:"5px solid blue", height:"400px"}}>
                    <Col xs={6} md={4}>
                        <Image src="holder.js/171x180" rounded />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="holder.js/171x180" roundedCircle />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Choose_Hostel;
