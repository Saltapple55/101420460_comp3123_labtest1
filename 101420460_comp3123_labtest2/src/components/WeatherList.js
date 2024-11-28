import React, {useState, useEffect } from 'react'
import axios from 'axios';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'



export default function WeatherList (){
    const kelvin=-273.15
    const [date, setDate]=useState('');
    const [temp, setTemp]=useState('');

    const [city, setCity]=useState('Toronto')
    const [loaded, setLoaded]=useState(false)
    var [icon, setIcon]=useState('')
    var [weather, setWeather]=useState([])

    //var [forecast, setForecast]=useState([])
    //const week=["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    //var today=3

    //Changing the style to cooler color when cold
    const styles = {

      bcolor:{
        
        backgroundColor: temp<0 ? "darkblue" : "yellow",
        color: temp<0 ? "white" : "brown",
      },
      center:{
        display: "center"
      }
    };

    useEffect(()=>{
        getWeather()
        var today= new Date()
        setDate(today.toLocaleDateString("en-US"))

        //console.log("this is the weather for "+weather.name)
        // console.log(user)
    
    }, [])

    
    //can create/resuse axios object with instance


    //make it async so you can try catch
    const getWeather=async()=>{
        const userurl=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7afa21762e198018f5f6919fc75e0fa2`
        axios.get(userurl).then((response)=>{
        console.log("getting data")
        console.log(response.data)
        setWeather(response.data)
        setIcon(response.data.weather[0].icon)
        setTemp(Math.round((response.data.main.temp+kelvin)*10)/10)
        console.log(icon)
        setLoaded(true)
        return response.data

    }

    ).catch((error)=>{
        alert("Not valid input")
        console.log(error)
       })
        //get async and call in the render
    }

    if(!loaded){
        return <div>Loading</div>
    }

    return (
    <div>
      <Container className='weatherBox bcolor' style={styles.bcolor}>
      <h1>{weather.name}'s Weather Today</h1>
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="City"
          aria-label="City"
          aria-describedby="basic-addon2"
          value={city}
          onChange={(e)=>setCity(e.target.value)}
        />
        <Button 
        variant="outline-secondary" 
        id="button-addon2"            
          onClick={(e) => getWeather()}
        >
          Search
        </Button>
      </InputGroup>

        <Container >
        <p>{date}</p>
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="image not available"/>
        <p>Weather: {weather.weather[0].main} </p>
        <p>Humidity: {weather.main.humidity}</p> 
        <p>Wind Speed: {weather.wind.speed} kmph</p> 

        </Container>
      <h3 >Temperature</h3>
      <Table>
       <thead>
        <tr>
          <th>Current Temp.</th>
          <th>Feels Like</th>
          <th>Max Temp</th>
          <th>Min Temp</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td>{temp} C</td>
          <td>{Math.round((weather.main.feels_like+kelvin)*10)/10} C</td>
          <td>{Math.round((weather.main.temp_max+kelvin)*10)/10} C</td>
          <td>{Math.round((weather.main.temp_min+kelvin)*10)/10} C</td>
          </tr>
          </tbody>
      </Table>

        </Container>

        </div>
         
        
    )
}
  

