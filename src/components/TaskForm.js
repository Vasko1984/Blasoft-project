import { Box, Button, Container, TextField } from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import React from "react";
import { FaList } from "react-icons/fa";
import { GrUnorderedList } from "react-icons/gr";
import "../assets/TaskForm.css";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AiOutlineCheck } from "react-icons/ai";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "truck",
  "truck1",
  "truck2",
  "truck3",
  "truck4",
  "truvk4",
  "truck5",
  "truck6",
  "truck",
  "truck",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const TaskForm = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
    
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <Container style={{ marginBottom: "50px" }}>
      <div>
        <div className="info5">
          <FaList
            style={{
              width: "35px",
              height: "35px",
              marginRight: "15px",
             paddingTop:"10px"
            }}
          />
          <h2>Додади нова задача</h2>
          <button className="nazad-na-lista1">
            <GrUnorderedList /> назад на листата
          </button>
        </div>
      </div>
      <div className="email">
        <h4>Наслов</h4>
        <TextField
          id="outlined-multiline-flexible"
          label="наслов"
          className="input3"
        />
      </div>
      <div className="email">
        <h4>Дестинација</h4>
        <FormControl sx={{ width: 800 }}>
          <InputLabel id="demo-multiple-name-label">Name</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="email">
        <h4>Фирма</h4>
        <FormControl sx={{ width: 800 }}>
          <InputLabel id="demo-multiple-name-label">Name</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="email">
        <h4>Број на возила</h4>
        <TextField
          id="outlined-multiline-flexible"
          label="Број на возила"
          className="input3"
        />
      </div>

      <div className="email">
        <h4>Додатни информации</h4>
        <Box>
          <Textarea
            name="Solid"
            placeholder="Додатни информации"
            // variant="solid"
            minRows={8}
            style={{ width: "800px" }}
          />
        </Box>
      </div>
      <Button
        style={{
          backgroundColor: "blue",
          color: "white",
          position: "absolute",
          right: "100px",
        }}
      >
        <AiOutlineCheck style={{ marginRight: "5px" }} />
        Креирај
      </Button>
    </Container>
  );
};

export default TaskForm;
