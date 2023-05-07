import React from "react";
import { Container } from "@mui/material";
import "../assets/AllDestinations.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../assets/Transporters.css";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { BsTrash } from "react-icons/bs";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const AllDestinations = () => {
  const navigate = useNavigate();

  const Change = () => {
    navigate("/editdestination");
  };
  return (
    <Container>
      <div className="info5">
        <FaMapMarkerAlt
          style={{
            width: "20px",
            height: "20px",
            marginRight: "15px",
            paddingTop: "15px",
          }}
        />
        <h2>Сите Дестинации (193)</h2>
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
              <TableCell>Дестинација</TableCell>
              <TableCell>Држава</TableCell>
              <TableCell>Транспортери</TableCell>
              <TableCell>Акција</TableCell>
            </TableRow>
            <TableRow onClick={Change}>
              <TableCell>AMEH 5</TableCell>

              <TableCell>germanija</TableCell>

              <TableCell>Multi Sped DOOEL</TableCell>

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

export default AllDestinations;
