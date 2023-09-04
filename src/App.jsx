import { useEffect,useState} from 'react'
import './App.css'
import axios from 'axios'
import ClimaCard from './components/ClimaCard'


function App() {

  const [cords, setCords] = useState()
  const [clima, setClima] = useState()
  const [temp, setTemp] = useState()

    //aca buscamos las cordenadas para la aplicacion
  useEffect(()=>{
    const acceso=(ubi)=>{
const obj={
  lat:ubi.coords.latitude,
  lon: ubi.coords.longitude
}
setCords(obj)
    }
      
   navigator.geolocation.getCurrentPosition(acceso)
    },[])
      //esta se ejecuta despues de que se ejecuta la coordenadas
    useEffect(()=>{
      //con este if hacemos que la funcion se ejecute luego de que esta la informacion necesaria para poderla ejecutar
      if(cords){
        const ApiKey='beab7ec271de9485a45fe3b6fab3cb6e'
        const url=`https://api.openweathermap.org/data/2.5/weather?lat=${cords.lat}&lon=${cords.lon}&appid=${ApiKey}`
        axios.get(url)
        .then(res=>{setClima(res.data)
        const obj={
          celsius: (res.data.main.temp-273.15).toFixed(1),
          farenheit:((res.data.main.temp-273.15) *9/5+32).toFixed(1)
        }
        setTemp(obj)
      })
        .catch(err=>console.log(err))
      }
    },[cords])
    
   

  return (
    <div  className='clima'>
      
      <ClimaCard
      clima={clima}
      temp={temp}/>
      
      </div> 
  )
}

export default App
