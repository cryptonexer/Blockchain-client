import React,{useEffect,useState} from 'react'
import Nav from './PartyNav'
import './party.css'

const PartyDashboard = () => {

    const [userData,setUserData] = useState([]);

    const Welcome = async () => {
        const req = await fetch('http://13.233.237.111:3002/api/party/me',{
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
            window.location.href = '/Party/partylogin'
        }
        else{
            Welcome();
        }
    }, [])

    return (
        <>
         <div>
             <Nav/>
         </div>   
         <div className='welcome-main'>
             <div className="welcome">
                <h1>{"Welcome "+userData.Candidate_name}</h1>
                <p>Hello {userData.Email}</p>
             </div>
         </div>
        </>
    )
}

export default PartyDashboard
