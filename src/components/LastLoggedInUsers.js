import React from "react";
import { HiUserGroup } from "react-icons/hi";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../assets/TrucksOnTheRoad.css";
import { useNavigate } from "react-router-dom";
const rows = [
  createData("FERSPED", 159, 6.0, 24, 4.0),
  createData("MULTISPED DOOEL", 237, 9.0, 37, 4.3),
  createData("ANGJELOVI TRANSPORT", 262, 16.0, 24, 6.0),
  createData("LYBERTY SKOPJE", 305, 3.7, 67, 4.3),
  createData("JIBA DOOEL SKOPJE", 356, 16.0, 49, 3.9),
  createData("JIBA DOOEL SKOPJE", 356, 16.0, 49, 3.9),
  createData("JIBA DOOEL SKOPJE", 356, 16.0, 49, 3.9),
  createData("JIBA DOOEL SKOPJE", 356, 16.0, 49, 3.9),
];
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const LastLoggedInUsers = () => {
  const navigate = useNavigate();
  const Click = () => {
    navigate("/companydetails");
  };

  return (
    <div>
      <div className="info5">
        <HiUserGroup
          style={{ width: "50px", height: "50px", marginRight: "15px" }}
        />
        <h2>Последни Коментари</h2>
      </div>
      <div className="table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            {/* <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead> */}
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  onClick={Click}
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
      </div>
    </div>
  );
};

export default LastLoggedInUsers;
