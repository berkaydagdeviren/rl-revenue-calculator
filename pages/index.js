import React, { useEffect, useState } from "react";
import Card from '../components/Card'
import ProfitChart from '../components/ProfitChart'
import styled from 'styled-components'
import DatePick from '../components/DatePicker'
import Header from '../components/Header';
import CreditLog from '../components/CreditLog';
import moment from 'moment';
import useSWR from 'swr';
import axios from 'axios';
import { useRef } from 'react';
import Credit from '../models/credit';




const StyledDiv = styled.div`
    width: 1800px;
    margin-left: 100px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 5em;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
`



export default function Home ({}) {
  
  const [totalCredit, setTotalCredit] = useState([])
  const [credit, setCredit] = useState('')
  const ref = useRef(null);
  const [date, setDate] = useState(null);
  let [result, setResult] = useState('');

  console.log(result, 'result')
  
  const { data } = useSWR('/api/hello', async (url) => {
    const response = await axios.get(url);
    return response.data;
  }, {
    refreshInterval: 1000,
  });

  console.log(data, 'data useSWR')
  
  
  async function fetchData() {
    await fetch('api/hello')
    .then(res => 
      
      res.json())
    .then(data => {
      console.log(data, 'data from fetchData function')
     
    })
  }
  
  

  const handleDateChange =  async (event) => {
      console.log(event);
      const currentDate = moment(event._d).format('YYYY-MM-DD')
      setDate(currentDate)
      ref.current = moment(event._d).format('YYYY-MM-DD')
      
      if (
      !data.find(item => item.date === ref.current)
      ) {
        console.log('no data');
        fetch('api/hello', {
          method: 'POST',
          body: JSON.stringify({
            date: currentDate,
            credits: [
              0
            ]
        })})
        setTotalCredit([0])
      }

     else if (data.find(item => item.date == ref.current)) {
 
      
      console.log(data, 'RESULT BEFORE SETTOTALCREDITS')
      setTotalCredit(data.find(item => item.date === ref.current).credits)
    }
  }

  const handleClick =  async (e) => {
    
    e.preventDefault();
    console.log(totalCredit, 'total credit before')
    setTotalCredit([...totalCredit, credit])
    console.log(ref, 'refFFFFFFF')
    
    await fetchData()
    
    
    const currentDate = ref.current
    

    const options = {
      method: "PUT", // or "PUT" with the url changed to, e.g "https://reqres.in/api/users/2"
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify(
          { date: currentDate,  credits: credit }
      )
  }
  var responseClone;
    fetch(`api/hello?date=${ref.current}`, options )
.then(res => {
  responseClone = res.clone();
    return res.json()
}).then(data => {
    console.log(data, 'data')
}).then(function (data) {
  // Do something with data
}, function (rejectionReason) { // 3
  console.log('Error parsing JSON from response:', rejectionReason, responseClone); // 4
  responseClone.text() // 5
  .then(function (bodyText) {
      console.log('Received the following instead of valid JSON:', bodyText); // 6
  });
});

  
  
    

    
  


      setCredit(0)
    }
  

  const handleChange = (e) => {
    if (isNaN(e.target.value) || e.target.value === 'NaN') {
      e.target.value = 0
      alert('Please enter a number')
    }
    if (date === null) {
      alert('Please select a date')
      setCredit(0)
      e.target.value = 0
    }

    setCredit(
      parseInt(e.target.value)
    )
    
    
 
    }
  return (
    <div>
      <Header />
      

      <StyledDiv>
        <Card operation={'Buy'}  credit={credit}
        handleClick={handleClick} handleChange={handleChange}   />
        
        <Card operation={'Sell'}  credit={credit}
        handleClick={handleClick} handleChange={handleChange}   />

        <ProfitChart 
        credit={
          !totalCredit.length > 0 ? 0 : totalCredit.reduce((acc, curr) => acc + curr)
        } date={date} />
        <DatePick handleDateChange={handleDateChange} date={ref.current} />
        <div>
          
             <CreditLog credit={totalCredit} />
          
          
          
        </div>
        
      </StyledDiv>
        {
          console.log(totalCredit, 'totalCredit from Home')
        }
      
      
    </div>
  )
}
