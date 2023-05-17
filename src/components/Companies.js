import { Container } from "@mui/material";
import React from "react";
import { FaLongArrowAltUp, FaUserAlt } from "react-icons/fa";
import { HiOutlinePlusCircle } from "react-icons/hi";
import "../assets/Companies.css";
import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { BsTrash } from "react-icons/bs";
const Companies = () => {
  return (
    <Container>
      <div className="info5">
        <FaUserAlt
          style={{
            width: "25px",
            height: "25px",
            marginRight: "15px",
            paddingTop:"5px"
          }}
        />
        <h2>Сите Фирми (193)</h2>
        <a href="/editcompany">
          <button className="dodaj-nova" style={{marginTop:"-6px"}}>
            <HiOutlinePlusCircle
              style={{
                paddingRight: "5px",
                marginBottom: "-3px",
                Color: "white",
              }}
            />
            Додај нова
          </button>
        </a>
      </div>
      <TableContainer style={{ marginTop: "30px" }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                style={{ textAlign: "left !important", color: "blue" }}
              >
                Код <FaLongArrowAltUp />
              </TableCell>
              <TableCell style={{ textAlign: "left", color: "blue" }}>
                Фирма
                <FaLongArrowAltUp />
              </TableCell>
              <TableCell>Акција</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>C3000440440</TableCell>
              <TableCell>Arcelor Mital rce Romania</TableCell>
              <TableCell>
                <a href="/companydetails">
                  <button>
                    <HiOutlinePencilSquare />
                    Editiraj
                  </button>
                </a>
                <button
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

export default Companies;
