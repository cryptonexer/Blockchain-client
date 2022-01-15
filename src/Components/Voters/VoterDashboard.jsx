import React,{useEffect,useState} from 'react'
import Nav from './VoterNav'
import './Voter.css'

import { Container, Card, Button, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import Ballot from './Votingballot'
const host = process.env.HOST
console.log(process.env.HOST);

const VoterDashboard = () => {

    const [userData,setUserData] = useState([]);
    

    const Welcome = async () => {
        const req = await fetch('http://35.154.226.25:3002/api/voter/me',{
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
            window.location.href = '/VoterLogin'
        }
        else{
            Welcome();
        }
    }, [])

    const ballot = userData.ProfileStatus;
    let verification;

    if(ballot == "Verified"){
        verification = <Ballot />
    }

    return (
        <>
         <div>
             <Nav/>
         </div> 
         <Container>
         <div className='welcome-main'>
             <div className="welcome">
                <h1>Welcome {userData.First_name} {userData.Last_name}</h1>
                
             </div>
             <p>{userData.Email} </p>
             <p>Profile Status: {userData.ProfileStatus}</p>
         </div> 
            
         </Container>  
         

         {verification}

         
        </>
    )
}

export default VoterDashboard
