import React from 'react'
import Girl from '../Images/girl.svg';
import Boy from '../Images/boy.svg';
import { Container,Card } from 'react-bootstrap';
import './Style/Gender.css';
import { NavLink } from 'react-router-dom';


function Gender() {
    return (
        <>
        <Container className="d-flex justify-content-center mainhead">
        <div className="head"><h1>Choose Your Hostel</h1></div>
        <div className="maincontainer">
            <Card className="card">
            <NavLink to="/Choose_Hostel">
                <Card.Img variant="top" src={Boy} />
                </NavLink>
            </Card>
            <Card className="card">
                <Card.Img variant="top" src={Girl} />
            </Card>
            </div>
        </Container>
        </>
    )
}

export default Gender;
