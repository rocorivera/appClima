import { useState } from "react"

const ClimaCard = ({clima,temp}) => {
  
  const [isCelsius, setIsCelsius] = useState(true)
  const handleChangeTemp=()=>{setIsCelsius(!isCelsius)
  
  }
  return (
    <article className="menu_cli">
      <h1 className="title_cli"><img src="public/gif/gifclima.gif" alt="" /></h1>
      <h2 className="subtitle_cli">En {clima?.name},{clima?.sys.country}</h2>
      <div className="info_cli">
        <div className="menu_img_cli">
          <img className="img_cli" src={clima && `https://openweathermap.org/img/wn/${clima.weather[0].icon}@2x.png`} alt="" />
        </div>
        <section>
          <h3 className="subtitle_cli2">"{clima?.weather[0].description}"</h3>
          <ul className="list_cli">
            <li className="lista_cli"><span>wind Speed</span>{clima?.wind.speed} m/s<span></span></li>
            <li className="lista_cli"><span>clouds</span><span>{clima?.clouds.all} %</span></li>
            <li className="lista_cli"><span>pressure</span><span>{clima?.main.pressure} hPa</span></li>
          </ul>
        </section>
      </div>
      <h2 className="temp_cli">{isCelsius ?  `${temp?.celsius}℃` : `${temp?.farenheit}℉`}</h2>
      <button className="btn_cli" onClick={handleChangeTemp}>{isCelsius ? 'change to ℉' : 'change to ℃'}</button>
    </article>
  )
}

export default ClimaCard