
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import AdminLogin from './Components/Admin/AdminLogin';
import UserLogin from './Components/User/UserLogin';
import AdminPortal from './Components/Admin/AdminPortal';
import UserPortal from './Components/User/UserPortal';

function App() {
  return (
    <BrowserRouter>
       
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/adminLogin' element={<AdminLogin/>}/>
          <Route path='/userLogin/*' element={<UserLogin/>}/>
          <Route path='/adminPortal/*' element={<AdminPortal/>}/>
          <Route path='/userPortal/*' element={<UserPortal/>}/>
        </Routes>
    </BrowserRouter>

  
  );
}

export default App;
