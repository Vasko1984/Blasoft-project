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
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const UnloadedTrucks = () => {
  const navigate = useNavigate();
  const Click = () => {
    navigate("/truckdetails");
  };
  return (
    <Container>
    <div>
      <div className="info5">
        <FaTruckMoving
          style={{ width: "50px", marginTop: "20px", rotate: "360deg" }}
        />
        <h2>Нетоварени Возила</h2>
      </div>
      <div className="table">
     
        <TableContainer component={Paper}>
          <Table aria-label="simple table"> 
            <TableHead>
              <TableRow>
                <TableCell>Dessert</TableCell>
                <TableCell >Calories</TableCell>
                <TableCell >Fat&nbsp;(g)</TableCell>
                <TableCell >Carbs&nbsp;(g)</TableCell>
                <TableCell >Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <a href="selectedrecord">
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    onClick={Click}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell >{row.calories}</TableCell>
                    <TableCell >{row.fat}</TableCell>
                    <TableCell >{row.carbs}</TableCell>
                    <TableCell >{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </a>
          </Table>
        </TableContainer>
      </div>
    </div>
    </Container>
  );
};

export default UnloadedTrucks;
