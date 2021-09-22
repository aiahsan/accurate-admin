import React from 'react'
import Login from './pages/login'
import Home from './pages/home'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {useSelector} from 'react-redux'
function App() {
  const token=useSelector(x=>x.token)
  React.useEffect(()=>{
   },[])
  return (
 <div>
   {token!=null?<><Home/></>:<Login/>}
    
 </div>
    );
}

export default App;
