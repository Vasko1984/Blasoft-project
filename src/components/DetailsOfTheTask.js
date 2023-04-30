import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SelectForm1 from "./SelectForm1";
import BasicButtonGroup from "./Button1";
import { FaListAlt, FaTruckMoving } from "react-icons/fa";

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [createData("truck", 159, 6.0, 4.0)];

const DetailsOfTheTask = () => {
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
        <TableContainer component={Paper} className="table-container">
          <Table aria-label="caption table">
            <TableHead style={{ backgroundColor: "lightpink" }}>
              <TableRow>
                <TableCell>Возило</TableCell>
                <TableCell align="right">Компанија</TableCell>
                <TableCell align="right">Термин на утовар</TableCell>
                <TableCell align="right">статус</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <button>otvori</button>

                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <SelectForm1 />
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="footer">
          <h4>Товарени/Потребни камиони : 0/2</h4>
        </div>
      </div>
    </>
  );
};

export default DetailsOfTheTask;
