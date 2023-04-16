import React from "react";
import { GrBladesVertical } from "react-icons/gr";
import Button from "@mui/material/Button";
import "../assets/TruckDetails.css";
import { IoChatbubblesOutline } from "react-icons/io5";
const TruckDetails = () => {
  return (
    <div>
      <div className="dash">
        <div className="dashboard1">
          <GrBladesVertical
            style={{
              marginLeft: -10,
              marginTop: 15,
              marginRight: 10,
              width: "25px",
              height: "25px",
            }}
          />
          <h2>LE 23451</h2>
        </div>
        <div className="styled-button">
          <a href="selectedrecord">
            <Button variant="contained">
              <GrBladesVertical style={{ marginRight: 5 }} /> Назад
            </Button>
          </a>
        </div>
      </div>
      <div className="h2">
        <h2>Детали за возилото</h2>
      </div>
      <div className="div-styled">
        <div>
          <h3>Регистрација</h3>
          <p>LE 2345</p>
        </div>
        <div>
          <h3>Компанија </h3>
          <p>Фершпед АД Скопје</p>
        </div>
        <div>
          <h3>Термин на </h3>
          <p>утовар петок 04.02.2022 10:00</p>
        </div>
        <div>
          <h3>Товарено </h3>
          <p>петок 04.02.2022 12;31</p>
        </div>
        <h3>
          Истоварен на <button>Истоварено на </button>
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
          <Button variant="contained">Додај нов Коментар</Button>
        </div>
      </div>
    </div>
  );
};

export default TruckDetails;
