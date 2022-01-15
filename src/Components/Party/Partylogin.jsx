import React,{useState} from 'react'
import { Container, Form, Row } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {useNavigate} from 'react-router-dom'
import './party.css'

const Partylogin = () => {
    const navigate = useNavigate();

    const [Email,setEmail] = useState('');
    const [Password,setPassword] = useState('');

    const Postdata = async (e) => {
        e.preventDefault();

        const response = await fetch('http://35.154.226.25:3002/api/party/login',{
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                Email,
                Password
            })
        })

        const data = await response.json();
        if(data.Status === 'ok'){
            localStorage.setItem('token', data.data.token);
            navigate('/party/auth');
        }
        else{
            alert('Invalid Credentials');
        }
    }

    return (
        <>
        <div className="signin-container">
            <Container> 
            <Row className="offset-md-3">  
            <Form method="POST" className="border mt-5 p-4 shadow">
                <h2 className="form-title mb-4">
                    <u>Party Login</u>
                </h2>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="Email" placeholder="Enter email"  
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)} required/>
                </Form.Group>

                <Form.Group className="mb-2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="Password" name="Password" placeholder="password"
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)} required/>
                </Form.Group>

                <center>
                    <input type="submit" name="signup" id="signup" className="form-submit btn btn-primary mt-4 mb-3" value="Login" onClick={Postdata}/>
                    <br/>
                    <LinkContainer to="/partyreg">
                        <a className="loginroute">Register for new member</a>
                    </LinkContainer><br></br>
                    <LinkContainer to="/">
                        <button>Home</button>
                    </LinkContainer>
                </center>
            </Form>
            </Row> 
            
            </Container>
        </div>                 
    </>
    )
}

export default Partylogin
