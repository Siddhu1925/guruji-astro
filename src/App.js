import Headers from './Components/Header/Headers';
import Videos from './Components/VideoReviews/Video';
import Premium from './Components/PremiuimAstro/Premium';
import Wheel from './Components/AstroWheel/Wheel';
import Reviews from './Components/Reviews/Reviews';
import Footer from './Components/Footer/Footer';
import SkeltonLoading from './Components/SkeltonLoading';
import { useState,useEffect } from 'react';
import extra from './assets/extension.svg'
import extra1 from './assets/extrabg.svg'
// import { ChakraProvider } from '@chakra-ui/react';
import Skeleton from "react-loading-skeleton";
import './App.css';

function App() {
const [loading,setLoading] = useState(true)
useEffect(()=>{
  setTimeout(() => {
    setLoading(false)
    
  }, 3000);
},[])


  return (
    <div className="App">
      

        <div className='rounded bg-white h-40 shadow-sm'> 
        {/* <ChakraProvider> */}
   
  
        <Headers />
   <Videos />
        <Premium />
        <img src={extra} alt='extra' style={{width:"90.40%"}}/>
        <Wheel />
        <Reviews />
        <img src={extra1} alt='extra1' style={{width:"90.7%",marginTop:"0"}}/>
       
        <Footer />
       


      {/* </ChakraProvider> */}</div>
  
    </div>
  );
}

export default App;
