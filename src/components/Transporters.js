import { Container } from "@mui/material";
import React from "react";
import { FaUserAlt } from "react-icons/fa";
import "../assets/Transporters.css";
import { HiOutlinePlusCircle } from "react-icons/hi";

const Transporters = () => {
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
    </Container>
  );
};

export default Transporters;
