import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DropDown from "./DropDown";
import SelectForm1 from "./SelectForm1";

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData("truck1", 159, 6.0, 4.0),
  createData("truck2", 237, 9.0, 4.3),
];

const BasicTable1 = () => {
  return (
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
              {/* <DropDown/> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable1;
