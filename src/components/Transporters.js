import { Container } from "@mui/material";
import React from "react";
import { FaUserAlt } from "react-icons/fa";
import "../assets/Transporters.css";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { BsTrash } from "react-icons/bs";
// import Paper from '@mui/material/Paper';
import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { HiOutlinePencilSquare } from "react-icons/hi2";
const Transporters = ()=> {
  // const [list, setList] = React.useState();
  // function handleRemove(id) {
  //   const newList = list.filter((item) => item.id !== id);

  //   setList(newList);
  // }
  return (
    <Container>
      <div className="info5">
        <FaUserAlt
          style={{
            width: "20px",
            height: "20px",
            marginRight: "15px",
            paddingTop: "15px",
          }}
        />
        <h2>Сите Транспортери</h2>
        <button className="dodaj-nova">
          <HiOutlinePlusCircle
            style={{
              paddingRight: "5px",
              marginBottom: "-3px",
              Color: "white",
            }}
          />
          Додај нова
        </button>
      </div>
      <TableContainer style={{ marginTop: "30px" }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Транспортер</TableCell>
              <TableCell>Емаил</TableCell>
              <TableCell>Дестинации</TableCell>
              <TableCell>Групи</TableCell>
              <TableCell> Суспендиран </TableCell>
              <TableCell>Акција </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>liberty Skopje</TableCell>
              <TableCell>Transport@libertyskopje.mk</TableCell>
              <TableCell>nema</TableCell>
              <TableCell>admin</TableCell>
              <TableCell>ne</TableCell>
              <TableCell>
                <a href="/companydetails">
                  <button>
                    <HiOutlinePencilSquare />
                    Editiraj
                  </button>
                </a>
                <button
                //  onClick={() => handleRemove(item.id)}
                  style={{
                    marginLeft: "5px",
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    padding: "3px",
                    borderRadius: "2px",
                  }}
                >
                  <BsTrash /> Избриши
                </button>
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Transporters;
