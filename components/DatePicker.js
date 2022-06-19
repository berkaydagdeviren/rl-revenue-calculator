import { DatePicker } from 'antd';
import styled from 'styled-components';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { useState } from 'react';
const StyledDatePick = styled.div`
    
flex: 0 0 25%;
`


export default function DatePick({ handleDateChange, date }) {
   
   
    
    return (
      <StyledDatePick>

          <DatePicker size='large' onChange={handleDateChange}/>
        
        <div>
            {console.log(date, 'datepİCKER COMPONENT')}
        {date}
            
        </div>
           
      </StyledDatePick>
      
  );
}

