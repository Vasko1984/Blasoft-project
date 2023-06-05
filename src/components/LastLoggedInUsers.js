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
import { Container } from "@mui/material";
const rows = [
  createData("FERSPED", 159),
  createData("MULTISPED DOOEL", 237),
  createData("ANGJELOVI TRANSPORT", 262),
  createData("LYBERTY SKOPJE", 305),
  createData("JIBA DOOEL SKOPJE", 356),
  createData("JIBA DOOEL SKOPJE", 356),
  createData("JIBA DOOEL SKOPJE", 356),
  createData("JIBA DOOEL SKOPJE", 356),
];
function createData(name, calories) {
  return { name, calories };
}
const LastLoggedInUsers = () => {
  const navigate = useNavigate();
  const Click = () => {
    navigate("/companydetails");
  };

  return (
    <Container>
      <div className="info5">
        <HiUserGroup
          style={{ width: "35px", height: "35px", marginRight: "15px" }}
        />
        <h2>Последни Коментари</h2>
      </div>
      <div className="table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
         
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  onClick={Click}
                  style={{cursor:"pointer"}}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                 
                
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Container>
  );
};

export default LastLoggedInUsers;
