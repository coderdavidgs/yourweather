import React from 'react'
import styles from './Climate.module.css'
import { getItens } from '../services/conn'
import { useState } from 'react'
import convert from '../services/convert';

const Climate = () => {

    //Our states use during this code
    const [country, setCountry] = useState('Nothing');
    const [city, setCity] = useState('Nothing');
    const [climate, setClimate] = useState(0);
    const [description, setDescription] = useState('Nothing');
    const [minimal, setMinimal] = useState(0);
    const [maximum, setMaximum] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [clouds, setClouds] = useState('Nothing');
    const [search, setSearch] = useState('');
    const [current, setCurrent] = useState('kelvin');
    const [symbol, setSymbol] = useState('K')


    //async function that set values of results 
  async function handleItens(city){
    const response = await getItens(city);

    setCountry(response.sys.country);
    setCity(response.name); 
    setClimate(response.weather[0].main)
    setDescription(response.weather[0].description)
    setMinimal(convert(response.main.temp_min, 'kelvin', 'kelvin'));
    setMaximum(convert(response.main.temp_max, 'kelvin', 'kelvin'));
    setHumidity(response.main.humidity);
    setClouds(response.clouds.all);
    console.log(response);
  }

  //get value of input
  function handleSearch(e){
    setSearch(e.target.value);
  }


  //convert temperature according to user preference
  function handleTemp(type, current){
    const resMin = convert(minimal, type, current);
    console.log(resMin);
    const resMax = convert(maximum, type, current);
    console.log(resMax);

    if(type == 'kelvin'){
        setSymbol('k');
    }else if(type == 'celsius'){
        setSymbol('°');
    }else if(type == 'farenheit'){
        setSymbol('F')
    }

    setMinimal(resMin);
    setMaximum(resMax);
  }

  return (
    <div className={styles['container']}>

        <div className={styles['data']}>
            <h2>
                Discover the
            </h2>
            <span>
                Climate
            </span>
            <h2>
                Here
            </h2>

            <br /><br /><br />
            <h2>
                Type it city name
            </h2>
            <input type="text" value={search} onChange={handleSearch}/>
            <button onClick={() => handleItens(search)}>
                Search
            </button>

            <br />
            <h4>developed by: David Santos</h4>
        </div>

        <div className={styles['results']}>
            <h2>
                RESULTS
            </h2>

            <span className={styles['buttonList']}>
                <button onClick={() => {
                    handleTemp('kelvin', current);
                    setCurrent('kelvin');
                }}>
                    Kelvin
                </button>

                <button onClick={() => {
                    handleTemp('celsius', current);
                    setCurrent('celsius');
                }}>
                    Celsius
                </button>

                <button onClick={() => {
                    handleTemp('farenheit', current);
                    setCurrent('farenheit');
                }}>
                    Farenheit
                </button>

            </span>

            <br />

            <ul>
                <li>Country: <span>{country}</span> </li>
                <li>City: <span>{city}</span></li>
                <li>Climate: <span>{climate}</span></li>
                <li>Description: <span>{description}</span></li>
                <li>Minimal: <span>{minimal}{symbol}</span></li>
                <li>Maximum: <span>{maximum}{symbol}</span></li>
                <li>Humidity :<span>{humidity}%</span></li>
                <li>Clouds: <span>{clouds}%</span></li>
            </ul>
        </div>

    </div>
  )
}

export default Climate