import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

function createData(name, calories) {
  return { name, calories };
}

const rows = [
  createData("fersped", 159),
  createData("terrasteel", 237),
  createData("teranova", 262),
  createData("terra", 305),
  createData("fersped", 356),
];

export default function BasicTable() {
  const navigate = useNavigate();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>truck1</TableCell>
            <TableCell align="right">truck</TableCell>
            <TableCell align="right">truck2</TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
onClick={() =>navigate("/selectedrecord")}
style={{cursor:"pointer"}}
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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
  );
}
