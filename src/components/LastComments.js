import React from "react";
import { IoChatbubblesOutline } from "react-icons/io5";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";


const rows = [
  createData("ИСТОВАРЕНО НА ", "02.11.2022"),
  createData("ИСТОВАРЕНО НА ", "02.11.2022"),
  createData("ИСТОВАРЕНО НА ", "02.11.2022"),
  createData("ИСТОВАРЕНО НА ", "02.11.2022"),
  createData("ИСТОВАРЕНО НА ", "02.11.2022"),
  createData("ИСТОВАРЕНО НА ", "02.11.2022"),
  createData("ИСТОВАРЕНО НА ", "02.11.2022"),
  createData("ИСТОВАРЕНО НА ", "02.11.2022"),
];

function createData(name, time) {
  return { name, time };
}
const LastComments = () => {

  return (
    <Container>
      <div className="info5">
        <IoChatbubblesOutline
          style={{
            marginLeft: "60px",
            marginTop: "15px",
            width: "30px",
            height: "30px",
            marginRight: "20px",
          }}
        />
        <h2>Последни Коментари</h2>
        <div
          style={{
            width: "1000px",
            position: "absolute",
            bottom: "50px",
            marginLeft: "70px",
          }}
        >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    НОВО НАЈАВЕНОТО ВОЗИЛО КЕ ДОЈДЕ НА УТОВАР НА 27.01.2022 ВО
                    ПРВА СМЕНА ПОСЛЕ 07:00h
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                 
                  <TableRow
                 
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" >
                      {row.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.time}
                    </TableCell>
                  </TableRow>
                
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </Container>
  );
};

export default LastComments;
