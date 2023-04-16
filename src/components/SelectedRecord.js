import React from "react";
import { FaListAlt } from "react-icons/fa";
import BasicButtonGroup from "./Button1";
import "../assets/SelectedRecord.css";
import { FaTruckMoving } from "react-icons/fa";
import BasicTable from "./BasicTable";
const SelectedRecord = () => {
  return (
    <>
      <div className="dash">
        <div className="dashboard1">
          <FaListAlt
            style={{ marginLeft: -10, marginTop: 20, marginRight: 10 }}
          />
          <h2>Prikazana zadaca: Terasteel</h2>
        </div>
        <BasicButtonGroup />
      </div>
      <div className="info">
        <div className="info1">
          <h5>Информации за Задачата :</h5>
          <h5 className="h5">Промена на понуда</h5>
        </div>
        <div className="info2">
          <h5>наслов :</h5>
          <h5 className="h5info">Terrasteel Leskovac</h5>
        </div>
        <div className="info3">
          <h5>креирано на :</h5>
          <h5 className="h5info">четврток,04/04/2022</h5>
        </div>
        <div className="info3">
          <h5>Дестинација :</h5>
          <h5 className="h5info">Leskovac</h5>
        </div>
        <div className="info3">
          <h5>firma :</h5>
          <h5 className="h5info">Terrasteel</h5>
        </div>
        <div className="info3">
          <h5>Број на возила:</h5>
          <h5 className="h5info">2</h5>
        </div>
        <div className="info3">
          <h5>Додатни информации :</h5>
          <h5 className="h5info">utovar ponedelnik 05/04/2022</h5>
        </div>
        <div className="info3">
          <h5>Испратена до :</h5>
          <h5 className="h5info">euro steel </h5>
          <button className="button2">Pobarano:2</button>
          <button className="button2">Ponudeno:2</button>
        </div>
        <div className="info3">
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
      </div>
    </>
  );
};

export default SelectedRecord;
