import React,{useEffect,useState} from 'react'
import Nav from './VoterNav'
import './Voter.css'

import { Container, Card, Button, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import Ballot from './Votingballot'


const VoterDashboard = () => {

    const [userData,setUserData] = useState([]);
    

    const Welcome = async () => {
        const req = await fetch('http://localhost:3002/api/voter/me',{
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
            window.location.href = '/Voter/Voterlogin'
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
         <div className='welcome-main'>
             <div className="welcome">
                <h1>Welcome {userData.First_name} {userData.Last_name}</h1>
                <p>Hello   {userData.Email} </p>
             </div>
             <p>Profile Status: {userData.ProfileStatus}</p>
         </div> 

         {verification}

         
        </>
    )
}

export default VoterDashboard
