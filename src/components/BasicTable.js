import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SelectForm from "./SelectForm";
import { useNavigate } from "react-router-dom";

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData("truck", 159, 6.0, 4.0),
  createData("fersped", 237, 9.0, 4.3),
];

const BasicTable = () => {
  const navigate = useNavigate();
  return (
    <TableContainer component={Paper} className="table-container" style={{marginLeft:"20px"}}>
      <Table aria-label="caption table">
        <TableHead style={{ backgroundColor: "lightpink" }}>
          <TableRow>
            <TableCell>Возило</TableCell>
            <TableCell >Компанија</TableCell>
            <TableCell >Термин на утовар</TableCell>
            <TableCell >статус</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
            <button style={{marginLeft:"70px"}} onClick={() => navigate("/titleofthetask")}>pokazi</button>
              </TableCell>
              <TableCell>{row.calories}</TableCell>
              <TableCell >{row.fat}</TableCell>
              <SelectForm />
            </TableRow>
          ))}
         
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
