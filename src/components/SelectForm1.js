import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../assets/SelectForm1.css";
const SelectForm = () => {
  const [tovareno, setTovareno] = React.useState("");

  const handleChange = (event) => {
    setTovareno(event.target.value);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">товарено</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={tovareno}
        label="На Чекање"
        onChange={handleChange}
      >
        <MenuItem value={10} className="green">
          Товарено
        </MenuItem>
        <Select>
          <MenuItem>1</MenuItem>
          <MenuItem>2</MenuItem>
          <MenuItem>3</MenuItem>
          <MenuItem>4</MenuItem>
          </Select>
        <MenuItem value={20} className="red">
          Нетоварено
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectForm;
