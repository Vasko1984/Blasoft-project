import React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { IoMdArrowDropdown } from "react-icons/io";
const PopOver = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div>
      <Button
        aria-describedby={id}
        // variant="contained"
        onClick={handleClick}
      ></Button>
      <IoMdArrowDropdown />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>Причина на одбивањето</Typography>
        <Typography sx={{ p: 2 }}>Дефект на возилото</Typography>
        <Typography sx={{ p: 2 }}>Непочитување на Процедура</Typography>
        <Typography sx={{ p: 2 }}>Откажан од транспортерот</Typography>
        <Typography sx={{ p: 2 }}>Откажан дел од тонажа</Typography>
      </Popover>
    </div>
  );
};

export default PopOver;
