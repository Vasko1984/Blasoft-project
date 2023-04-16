import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const SelectForm = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Age</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="На Чекање"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>На Чекање</em>
        </MenuItem>
        <MenuItem value={10}>Товарено</MenuItem>
        <MenuItem value={20}>Одбиј</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectForm;
