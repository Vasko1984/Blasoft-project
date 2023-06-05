import React from "react";
import { GrBladesVertical } from "react-icons/gr";
import Button from "@mui/material/Button";
import "../assets/TruckDetails.css";
import { IoChatbubblesOutline } from "react-icons/io5";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
const TruckDetails = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="dash">
        <div className="dashboard1">
          <GrBladesVertical
            style={{
              marginLeft: -10,
            marginTop:"5px",
              marginRight: 10,
              width: "25px",
              height: "25px",
            }}
          />
          <h2>LE 23451</h2>
        </div>
        <div className="styled-button">
         
            <Button variant="contained" onClick={() => navigate("/selectedrecord")}>
              <GrBladesVertical style={{ marginRight: 5 }} /> Назад
            </Button>
        
        </div>
      </div>
      <div className="h2">
        <h2>Детали за возилото</h2>
      </div>
      <div className="div-styled">
        <div>
          <h3>Регистрација</h3>
          <p style={{paddingTop:"10px"}}>LE 2345</p>
        </div>
        <div>
          <h3>Компанија </h3>
          <p style={{paddingTop:"10px"}} >Фершпед АД Скопје</p>
        </div>
        <div>
          <h3>Термин на </h3>
          <p style={{paddingTop:"10px"}}>утовар петок 04.02.2022 10:00</p>
        </div>
        <div>
          <h3>Товарено </h3>
          <p style={{paddingTop:"10px"}}>петок 04.02.2022 12;31</p>
        </div>
        <h3>
          Истоварен на <button className="istovareno-na">Истоварено на </button>
        </h3>
      </div>
      <div className="div-styled1">
        <IoChatbubblesOutline
          style={{
            marginLeft: "20px",
            marginTop: "15px",
            width: "30px",
            height: "30px",
            marginRight: "10px",
          }}
        />
        <h3>Коментари (историјат на Патувањето)</h3>
        <div>
         
          <Button variant="contained" style={{marginBottom:"5px"}} onClick={() => navigate("/lastcomments")}>Додај нов Коментар</Button>
        
        </div>
      </div>
    </Container>
  );
};

export default TruckDetails;
