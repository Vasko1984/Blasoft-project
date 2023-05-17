import React from "react";
import { FaTruckMoving } from "react-icons/fa";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../assets/TrucksOnTheRoad.css";
import { Container } from "@mui/material";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Fesped"),
  createData("Multisped"),
  createData("persped"),
  createData("Multisped"),
  createData("Multisped"),
];

const TrucksOnTheRoad = () => {
  return (
    <Container>
      <div className="info5" style={{marginBottom:"40px"}}>
        <FaTruckMoving
          style={{ width: "50px", marginTop: "20px", rotate: "360deg" }}
        />
        <h2>Возила на пат (Сите товарени возила)</h2>
      </div>
    
        <TableContainer component={Paper}>
          <Table  sx={{ minWidth: 450 }} aria-label="simple table">
            <TableHead>
           
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      
    </Container>
  );
};

export default TrucksOnTheRoad;
