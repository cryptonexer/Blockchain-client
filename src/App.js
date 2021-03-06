import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'

import PartyDashboard from './Components/Party/PartyDashboard'
import Partyreg from './Components/Party/Partyreg'
import Partylogin from './Components/Party/Partylogin'

import Details from './Components/Admin/Admin'
import Adlogin from './Components/Admin/Adminlogin'
import Pdetails from './Components/Party/PartyProfile'
import PartyAuth from "./Components/PartyAuth"

import VoterAuth from './Components/VoterAuth'
import VoterDashboard from './Components/Voters/VoterDashboard'
import Voterreg from './Components/Voters/Voterreg'
import Voterlogin from './Components/Voters/Voterlogin'
import VoterDetails from './Components/Voters/VoterProfile'

function App() {
  return (
       <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/PartyDashboard" element={<PartyDashboard/>} />
            <Route path="/partyreg" element={<Partyreg/>} />
            <Route path="/partylogin" element={<Partylogin/>} />
            
            <Route path="/Voter/" element={<Voterlogin />}/>
            <Route path="/VoterDashboard" element={<VoterDashboard />}/>
            <Route path="/VoterReg" element={<Voterreg />}/>
            <Route path="/VoterLogin" element={<Voterlogin />}/>
            <Route path="/VoterDetails" element={<VoterDetails />}/>
            <Route path='/Voter/auth' element={<VoterAuth/>}/>

            <Route path='/admin' element={<Details/>}/>
            <Route path='/adminlogin' element={<Adlogin/>}/>
            <Route path='/partydetail' element={<Pdetails/>}/>
            <Route path='/party/auth' element={<PartyAuth/>}/>

          </Routes>
       </Router>
  );
}

export default App;
