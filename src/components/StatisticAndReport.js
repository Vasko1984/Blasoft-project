import { Container } from '@mui/material'
import React, { useState } from "react";
import "../assets/StatisticAndReport.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";







const StatisticAndReport = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    
      <Container>
              <div className='statistic'>
                  <h2>Генерирај excel документ</h2>
                  <div style={{display:"flex"}}>
                    <div style={{marginLeft:"30px",marginRight:"30px",width:"800px"}}>
                    почетен датум
                  <DatePicker  selected={startDate} onChange={(date) => setStartDate(date)} />
                

                  Краен датум
                  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} style={{height:"35px"}} />
                  
                      <button style={{marginLeft:"50px",backgroundColor:"white",borderRadius:'2px',border:"none",color:"gray",height:"20px"}}>Generiraj</button>
                    </div>
 
                  </div>
              </div>
          </Container>
  )
}

export default StatisticAndReport