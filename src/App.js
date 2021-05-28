import React,{useState, useEffect} from 'react' ;
import VelocityData from './components/VelocityData';
import PositionData from './components/PositionData'
const App = (props)=>{
  const [apiResponse_vData,setApiResponse_vData] = useState('');
  const [apiResponse_pData,setApiResponse_pData] = useState('');
  useEffect(() =>{
      const interval=setInterval(()=>{
      fetch('/udpServer').then(res => res.json()).then(data => {
        console.log(data);
        if(data.id == 1){
          setApiResponse_vData(data.time);
        }

        if(data.id == 2){
          setApiResponse_pData(data.time);
        }
        
           
      }).catch(e=>{
        console.log(e)
      })      
    }, 1000)
    return () => clearInterval(interval);

  }, [])
  
    return(
        
      <>
        <h2 className="headingStyle">Drones Data</h2>
        <div className="flexContainer">
          <div className="vData">
             <VelocityData vData={apiResponse_vData}/>
          </div>

          <div className="pData">
             <PositionData pData={apiResponse_pData}/>
          </div>
          
        </div>
      </>
    )
}
export default App;

