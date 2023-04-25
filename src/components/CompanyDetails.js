import React from "react";
import { FaUser } from "react-icons/fa";
import { GrOrderedList } from "react-icons/gr";
import TextField from "@mui/material/TextField";
import "../assets/CompanyDetails.css";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
const CompanyDetails = () => {
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
  const [checked15, setChecked15] = React.useState(false);

  return (
    <div>
      <div className="info5">
        <FaUser
          style={{ width: "40px", height: "40px", marginRight: "15px" }}
        />
        <h2>Едитирај Транспортер :</h2>
        <button className="nazad-na-lista">
          <GrOrderedList /> назад на листата
        </button>
      </div>
      <div className="detali">
        <h2>Детали</h2>
      </div>
      <div className="email">
        <h4>Емаил</h4>
        <TextField
          id="outlined-multiline-flexible"
          label="емаил"
          className="input3"
        />
      </div>
      <div className="email">
        <h4>Име на компанијата</h4>
        <TextField
          id="outlined-multiline-flexible"
          label="име"
          className="input3"
        />
      </div>
      <div className="email">
        <h4>Вендор код</h4>
        <TextField
          id="outlined-multiline-flexible"
          label="вендор код"
          className="input3"
        />
      </div>
      <div className="email">
        <h4>Адреса</h4>
        <TextField
          id="outlined-multiline-flexible"
          label="адреса"
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
      <div className="email">
        <h4>Лозинка</h4>
        <TextField
          id="outlined-multiline-flexible"
          label="емаил"
          className="input3"
        />
      </div>
      <div className="email">
        <h4>Потврди ја новата лозинка</h4>
        <TextField
          id="outlined-multiline-flexible"
          label="потврди ја новата лозинка"
          className="input3"
        />
      </div>
      <div className="transport">
        <h4>Локации каде врши транспорт</h4>
      </div>
      <Box className="box">
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
          <FormControlLabel
            control={
              <Checkbox
                checked={checked15}
                onChange={(event) => setChecked15(event.target.checked)}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="Slobozia"
          />
        </FormGroup>
      </Box>
    </div>
  );
};

export default CompanyDetails;
