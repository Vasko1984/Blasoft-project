import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
function VariantButtonGroup() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button>
          <MdKeyboardDoubleArrowLeft />
        </Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>
          <MdKeyboardDoubleArrowRight />
        </Button>
      </ButtonGroup>
    </Box>
  );
}

export default VariantButtonGroup;
