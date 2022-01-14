import React,{useEffect,useState} from 'react'
import Nav from './VoterNav'
import { Col, Container, Form, Row } from 'react-bootstrap'
import './Voter.css'

const VoterProfile = () => {

    const [userData,setUserData] = useState([]);

    const Voterdetails = async () => {
        const req = await fetch('http://13.233.237.111:3002/api/voter/me',{
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
             window.location.href = '/Voter/Voterlogin'
         }
         else{
             Voterdetails();
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
                            <h5>Voter Unique ID : {userData._id}</h5>
                                <h5>Voter Name : {userData.First_name} {userData.Last_name}</h5>
                                <h5>Email : {userData.Email}</h5>
                                
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

export default VoterProfile
