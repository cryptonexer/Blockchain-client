import React from 'react'
import { Container, Card, Button, Row, Col } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Home = () => {
    return (
        <>

        <Container>
            <h3>Cryptonex</h3>
            <p>Blockchain Based Tech</p>
            <Row>
                <Col md={4}>
                <LinkContainer to="/Voterreg">
                        <button>Voter Reg</button>
                    </LinkContainer><br></br><br></br>
                    <LinkContainer to="/VoterLogin">
                        <button>Voter Login</button>
                    </LinkContainer><br></br><br></br>
                    <LinkContainer to="/VoterDashboard">
                        <button>Voter Dashboard</button>
                    </LinkContainer>
                </Col>
                <Col md={4}>
                <LinkContainer to="/partyreg">
                        <button>Party Reg</button>
                    </LinkContainer><br></br><br></br>
                    <LinkContainer to="/partylogin">
                        <button>Party Login</button>
                    </LinkContainer>
                </Col>
                <Col md={4}>
                <LinkContainer to="/admin">
                        <button>Admin</button>
                    </LinkContainer><br></br><br></br>
                    
                </Col>
            </Row>
        </Container>
            
        </>
    )
}

export default Home
