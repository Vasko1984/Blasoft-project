import { Container, TextField } from "@mui/material";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GrOrderedList } from "react-icons/gr";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import "../assets/EditDestination.css";
import { AiOutlineCheck } from "react-icons/ai";
const EditDestination = () => {
  const [checked, setChecked] = React.useState(false);
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const [checked4, setChecked4] = React.useState(false);
  const [checked5, setChecked5] = React.useState(false);
  const [checked6, setChecked6] = React.useState(false);
  const [checked7, setChecked7] = React.useState(false);
  const [checked8, setChecked8] = React.useState(false);
  const [checked9, setChecked9] = React.useState(false);
  const [checked10, setChecked10] = React.useState(false);
  const [checked11, setChecked11] = React.useState(false);
  const [checked12, setChecked12] = React.useState(false);
  const [checked13, setChecked13] = React.useState(false);
  const [checked14, setChecked14] = React.useState(false);
  return (
    <div style={{ marginBottom: "50px" }}>
      <Container style={{ marginBottom: "50px" }}>
        <div className="info5">
          <FaMapMarkerAlt
            style={{
              width: "35px",
              height: "35px",
              marginRight: "20px",
              marginLeft: "15px",
             
            }}
          />
          <h2>Едитирај Дестинација:</h2>
          <button className="nazad-na-lista2">
            <GrOrderedList /> назад на листата
          </button>
        </div>

        <div className="email">
          <h4>Дестинација</h4>
          <TextField
            id="outlined-multiline-flexible"
            label="Backa palanka"
            className="input3"
          />
        </div>
        <div className="email">
          <h4>Код на Дестинација</h4>
          <TextField
            id="outlined-multiline-flexible"
            label="Serbia"
            className="input3"
          />
        </div>
        <div className="destinacija">
          <h4>Компании кои вршат превоз</h4>
        </div>
        <Box className="box1">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={(event) => setChecked(event.target.checked)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="Buzau+baicoi"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked1}
                  onChange={(event) => setChecked1(event.target.checked)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="Podlog v savinjski dolini"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked2}
                  onChange={(event) => setChecked2(event.target.checked)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="Sempeter"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked3}
                  onChange={(event) => setChecked3(event.target.checked)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="KUDRICIVO"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked4}
                  onChange={(event) => setChecked4(event.target.checked)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="NOVA tOPOLA Gradiska"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked5}
                  onChange={(event) => setChecked5(event.target.checked)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="Leskovac i Vranje"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked6}
                  onChange={(event) => setChecked6(event.target.checked)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="Donji Stupnik/Zagreb"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked7}
                  onChange={(event) => setChecked7(event.target.checked)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="Basiskele.kocaeli Germik"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked8}
                  onChange={(event) => setChecked8(event.target.checked)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="Pernik"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked9}
                  onChange={(event) => setChecked9(event.target.checked)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="Djakovo+Kotoriba"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked10}
                  onChange={(event) => setChecked10(event.target.checked)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="basiskele/Kocaeli"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked11}
                  onChange={(event) => setChecked11(event.target.checked)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="PTUJ"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked12}
                  onChange={(event) => setChecked12(event.target.checked)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="MIKLAVZ"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked13}
                  onChange={(event) => setChecked13(event.target.checked)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="Galati+Brasov"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked14}
                  onChange={(event) => setChecked14(event.target.checked)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="GALATI+VALENI DE MUNTE"
            />
          </FormGroup>
        </Box>
        <div>
          <button className="zacuvaj">
            <AiOutlineCheck /> Зачувај
          </button>
        </div>
      </Container>
    </div>
  );
};

export default EditDestination;
