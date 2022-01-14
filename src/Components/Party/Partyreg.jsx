import React, {useState} from 'react'
import {Form,Row,Col, Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { useNavigate } from 'react-router-dom'
import './party.css'

const Partyreg = () => {

    const navigate = useNavigate();

    const [Party_name,setParty_name] = useState('');
    const [Candidate_name,setCandidate_name] = useState('');
    const [Email,setEmail] = useState('');
    const [Slogan,setSlogan] = useState('');
    const [Description,setDescription] = useState('');
    const [Password,setPassword] = useState('');
    const [Cpassword,setCpassword] = useState('');

    const Postdata = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:3002/api/party/register',{
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                Party_name,
                Candidate_name,
                Email,
                Slogan,
                Description,
                Password,
                Cpassword
            })
        })

        const data = await response.json();

        if(data.Status === 'Please Enter Same Password'){
            alert('Please Enter Same Password');
        }
        else if(data.Status === 'error'){
            alert('Email already in use');
        }
        else{
        if(data.Status === 'Please Enter all details' || !data){
            
            alert('Invalid registeration');
        }
        else{
             alert('Registered Successfully');
             navigate('/partylogin');
        }
    }
    }
    
    return (
        <>
        <div className="signup-container">
            <Container>
                <Form method="POST" className=" border shadow mt-3 p-4">
                    <h2 className="form-title mb-4">
                        <u>Party Register</u>
                    </h2>
                <Row>
                    <Col md={6}>
                    <Form.Group className="mb-2">
                        <Form.Label>Party Name
                        </Form.Label>
                        <Form.Control type="text"  name="Party_name" placeholder="Party Name" 
                            value={Party_name}
                            onChange={(e) => setParty_name(e.target.value)} required/>
                    </Form.Group>
 
                    <Form.Group className="mb-2">
                        <Form.Label>Candidate Name
                        </Form.Label>
                        <Form.Control type="text" name="Candidate_name" placeholder="Candidate Name" 
                            value={Candidate_name}
                            onChange={(e) => setCandidate_name(e.target.value)} required/>
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="Email" placeholder="Enter email"  
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)} required/>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label>Slogan
                        </Form.Label>
                        <Form.Control type="text" name="Slogan" placeholder="Slogan"  
                            value={Slogan}
                            onChange={(e) => setSlogan(e.target.value)} required/>
                    </Form.Group>
                    </Col>

                    <Col md={6}>
                    <Form.Group className="mb-2">
                        <Form.Label>Description
                        </Form.Label>
                        <Form.Control type="text" name="Description" placeholder="Description"  
                            value={Description}
                            onChange={(e) => setDescription(e.target.value)} required/>
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="Password" name="Password" placeholder="password"
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)} required/>
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="Password" name="Cpassword" placeholder="password"
                            value={Cpassword}
                            onChange={(e) => setCpassword(e.target.value)} required/>
                    </Form.Group>
                    </Col>
                </Row>

                    <center>
                        <button type="submit" name="signup" id="signup" className="form-submit   btn btn-primary mt-3" value="Register" onClick={Postdata}>Register</button>
                        <br/>
                        <LinkContainer to="/partylogin">
                            <a className="loginroute">Login if Already registered</a>
                        </LinkContainer><br></br>
                        <LinkContainer to="/">
                        <button>Home</button>
                    </LinkContainer>
                    </center>
                </Form>
                </Container>
            </div>
        </>
    )
}

export default Partyreg
