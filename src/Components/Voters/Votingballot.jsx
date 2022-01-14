import React, { useEffect, useState } from 'react'
import { Container, Card, Button, Row, Col } from 'react-bootstrap'
import axios from 'axios'

const Votingballot = (props) => {

    const [users, setUsers] = useState([]);
    const [votinguser, setvotingUser] = useState([])

    //fetching all details related to active members
    useEffect(async () => {
        try {
            const res = await axios.get('http://13.233.237.111:3002/api/activeUsers');
            setUsers(res.data.data1);
        } catch (error) {
            console.log(error)
        }
    }, [])

    function voting(_id)
    {
        let email = props.email;
        console.log(email);
        try{
        
            {
                const req = axios.put(`http://13.233.237.111:3002/voteballot/vote/${_id}`);
    
                const votinguser = req.json();
                if(votinguser.status == 'ok')
                {
                    alert('Vote Casted');
                }
                //setvotingUser((votinguser.result));
    
            }
    
        }
        catch(err){
            if(err) throw err;
        }

    }
    


    return (
        <>
            <div className="voting-ballot">
                <Container>
                    <Row>
                        {users.map((user) => {
                            return (
                                <Col md={4}>
                                    <Card style={{ width: '18rem' }} className="mb-3 shadow border">
                                        <Card.Img variant="top" src="holder.js/100px180" />
                                        <Card.Body>
                                            <Card.Title>{user.Candidate_name}</Card.Title>
                                            <Card.Title>{user.Party_name}</Card.Title>
                                            <Card.Text>
                                                {user.Slogan}
                                            </Card.Text>
                                            <Card.Text>
                                                {user.Description}
                                            </Card.Text>
                                            
                                            <Button variant="primary" onClick={() => { voting(user._id) }}>Cast Vote</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })
                        }
                    </Row>
                    Count: {votinguser.Party_name}
                </Container>
                
            </div>
        </>
    )
}

export default Votingballot
