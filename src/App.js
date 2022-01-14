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
            <Route path="/" element={<Partylogin/>} />
            <Route path="/Party/Dashboard" element={<PartyDashboard/>} />
            <Route path="/Party/partyreg" element={<Partyreg/>} />
            <Route path="/Party/partylogin" element={<Partylogin/>} />
            
            <Route path="/Voter/" element={<Voterlogin />}/>
            <Route path="/Voter/Dashboard" element={<VoterDashboard />}/>
            <Route path="/Voter/VoterReg" element={<Voterreg />}/>
            <Route path="/Voter/VoterLogin" element={<Voterlogin />}/>
            <Route path="/Voter/VoterDetails" element={<VoterDetails />}/>
            <Route path='/Voter/auth' element={<VoterAuth/>}/>

            <Route path='/admin/uyqeyuqw/daguasgdgai/afsdtasfdu' element={<Details/>}/>
            <Route path='/adminlogin' element={<Adlogin/>}/>
            <Route path='/partydetail' element={<Pdetails/>}/>
            <Route path='/party/auth' element={<PartyAuth/>}/>

          </Routes>
       </Router>
  );
}

export default App;
