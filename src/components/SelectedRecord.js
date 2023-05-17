import React from "react";
import { FaListAlt } from "react-icons/fa";
import BasicButtonGroup from "./Button1";
import "../assets/SelectedRecord.css";
import { FaTruckMoving } from "react-icons/fa";
import BasicTable from "./BasicTable";
const SelectedRecord = () => {
  return (
    
      <><div className="dash">
      <div className="dashboard1">
        <FaListAlt
          style={{ marginLeft: -10, marginTop: 20, marginRight: 10 }} />
        <h2>Prikazana zadaca: Terasteel</h2>
      </div>
      <BasicButtonGroup />
    </div>
    <div className="info">
        <div className="informacii">
          <h5>Информации за Задачата :</h5>
          <h5 className="ponuda">Промена на понуда</h5>
        </div>
        <div className="informacii2">
          <h5>наслов :</h5>
          <h5 className="terasteel">Terrasteel Leskovac</h5>
        </div>

        <div className="informacii2">
          <h5>Креирано на :</h5>
          <h5 className="terasteel">четвртоk 22.04.2023</h5>
        </div>

        <div className="informacii2">
          <h5>Дестинација :</h5>
          <h5 className="terasteel">Лесковац и Врање</h5>
        </div>
        <div className="informacii2">
          <h5>Фирма :</h5>
          <h5 className="terasteel">Terrasteel</h5>
        </div>
        <div className="informacii2">
          <h5>Број на Возила :</h5>
          <h5 className="terasteel">2</h5>
        </div>

        <div className="informacii2">
          <h5>Додатни информации :</h5>
          <h5 className="terasteel">utovar denes/utre</h5>
        </div>

        <div className="informacii2">
          <h5>Испратено до :</h5>
          <h5 className="terasteel">Fersped AD Skopje</h5>
          <button className="ponudeno1">ponudeno 2</button>
          <button className="ponudeno2">isprateno 2</button>
        </div>
        <div className="informacii2"> 
          <h5>Затворена на :</h5>
          <button
            variant="contained"
            aria-label="outlined secondary button group"
            className="styled-button1"
          >
            Затвори ја задачата
          </button>
        </div>
      </div>
      <div className="info4">
        <div className="info5">
          <FaTruckMoving style={{ width: "50px", marginTop: "20px" }} />
          <h4>Сите возила</h4>
        </div>
        <BasicTable />
        <div className="footer">
          <h4>Товарени/Потребни камиони : 0/2</h4>
        </div>
      </div></>
    
  );
};

export default SelectedRecord;
