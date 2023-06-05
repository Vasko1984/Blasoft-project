import React from "react";
import { FaListAlt } from "react-icons/fa";
import "../assets/Dashboard.css";
import BasicTable from "./Table";
import VariantButtonGroup from "./Button";
import { Container } from "@mui/material";

const Dashboard = () => {
  return (
    <Container>
    <div className="dashboard">
      <div className="intro">
        <FaListAlt style={{ marginLeft: 20, marginTop: 20,width:"25px" ,height:"25px"}} />
        <div className="intro1">
          <h2>Задачи во тек</h2>
        </div>
      </div>
      <BasicTable  />
      <VariantButtonGroup />
    </div>
    </Container>
  );
};

export default Dashboard;
