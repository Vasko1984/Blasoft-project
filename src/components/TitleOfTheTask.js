import React from "react";
import { FaTruckMoving } from "react-icons/fa";
import BasicTable from "./BasicTable";
const TitleOfTheTask = () => {
  return (
    <div>
      <div className="info4">
        <div className="info5">
          <FaTruckMoving style={{ width: "35px",height:"35px",marginRight:"20px" }} />
          <h4>Сите возила</h4>
        </div>
        <BasicTable />
        <div className="footer">
          <p>Товарени/Потребни камиони : 0/2</p>
        </div>
      </div>
    </div>
  );
};

export default TitleOfTheTask;
