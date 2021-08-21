import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';

function BookedData(props) {
    return (
        <div >
            <Container>
                <Card className="mx-auto w-75 m-50px" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{props.Name}</Card.Title>
                        <Card.Text>
                            You have already Booked A Room
                        </Card.Text>
                        <Card.Text>
                            Your Room Details are as follow
                        </Card.Text>
                        <h4>Yout Hostel No is {props.Hostel_no}</h4>
                        <h4>And Your Room No is{props.Room_no}</h4>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default BookedData;
