import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { FaListAlt } from "react-icons/fa";
import { RiArrowLeftFill } from "react-icons/ri";
function BasicButtonGroup() {
  return (
    <div>
      <ButtonGroup
        variant="contained"
        aria-label="outlined secondary button group"
        className="styled-button"
      >
        <Button style={{ backgroundColor: "yellow" }}>
          <RiArrowLeftFill />
          Назад на претходната страна
        </Button>
        <Button>
          <FaListAlt style={{ marginRight: 5 }} />
          Назад на листата
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default BasicButtonGroup;
