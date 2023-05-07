import { Container, FormGroup, TextField } from "@mui/material";
import React from "react";
import { FaUser } from "react-icons/fa";
import { GrOrderedList } from "react-icons/gr";
import "../assets/EditCompany.css";
import { BsCheckLg } from "react-icons/bs";
const EditCompany = () => {
  return (
    <Container>
      <div className="info5">
        <FaUser
          style={{ width: "40px", height: "40px", marginRight: "15px" }}
        />
        <h2>Едитирај Транспортер :</h2>
        <button className="nazad-na-listata">
          <GrOrderedList /> назад на листата
        </button>
      </div>
      <div className="detali">
        <h2>Детали</h2>
      </div>
      <FormGroup>
        <div className="email">
          <h4>Фирма</h4>
          <TextField
            id="outlined-multiline-flexible"
            label=""
            className="input3"
          />
        </div>
        <div className="email">
          <h4>Код</h4>
          <TextField
            id="outlined-multiline-flexible"
            label="код"
            className="input3"
          />
        </div>
        <div className="email">
          <h4>Адреса</h4>
          <TextField
            id="outlined-multiline-flexible"
            label="име"
            className="input3"
          />
        </div>
        <div className="email">
          <h4>Поштенски код</h4>
          <TextField
            id="outlined-multiline-flexible"
            label="поштенски код"
            className="input3"
          />
        </div>
        <div className="email">
          <h4>Град</h4>
          <TextField
            id="outlined-multiline-flexible"
            label="град"
            className="input3"
          />
        </div>
        <div className="email">
          <h4>Држава</h4>
          <TextField
            id="outlined-multiline-flexible"
            label="држава"
            className="input3"
          />
        </div>
      </FormGroup>

      <button className="zacuvaj">
        <BsCheckLg style={{ paddingRight: "5px" }} />
        Зачувај
      </button>
    </Container>
  );
};

export default EditCompany;
