import React,{useEffect,useState} from 'react'
import Nav from './PartyNav'
import { Col, Container, Form, Row } from 'react-bootstrap'
import './party.css'

const PartyProfile = () => {

    const [userData,setUserData] = useState([]);

    const partydetails = async () => {
        const req = await fetch('http://localhost:3002/api/party/me',{
            headers:{
                'x-access-token' : localStorage.getItem('token'),
            }
        })

        const data = await req.json();
        setUserData((data.data));
    }

     useEffect(() => {
         const token = localStorage.getItem('token');

         if(!token){
             alert('Invalid User');
             window.location.href = '/partylogin'
         }
         else{
             partydetails();
         }
     }, [])

    return (
        <>
        <div className="main">
        <div>
            <Nav/>
        </div>
        <Container>
            <Form method="get" className="mt-4 border shadow">
                <Row className="p-3">
                <h3 className="mb-4"><u>Profile</u></h3>
                    <Col className="col-md-4">
                        <img alt="Image" />
                    </Col>
                    <Col className="col-md-6">
                        <Row>
                            <Col className="col-md-12 profile">
                                <h5>Party Name : {userData.Party_name}</h5>
                                <h5>Candidate Name : {userData.Candidate_name}</h5>
                                <h5>Email : {userData.Email}</h5>
                                <h5>Slogan : {userData.Slogan}</h5>
                                <h5>Description : {userData.Description}</h5>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Form>
            </Container>
        </div>
        </>
    )
}

export default PartyProfile
