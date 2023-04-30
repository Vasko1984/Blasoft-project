import React from "react";
import { IoSpeedometer } from "react-icons/io5";
import "../assets/Tasks.css";
import { GrTasks } from "react-icons/gr";
import { FaMapMarkerAlt, FaTruckMoving } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { AiOutlineBarChart } from "react-icons/ai";
import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { HiOutlinePencilSquare } from "react-icons/hi2";
const Tasks = () => {
  return (
    <div>
      <div className="sidebar">
        <IoSpeedometer
          style={{ marginTop: "30px", marginLeft: "20px", color: "blue" }}
        />
        <a href="/">
          <h4 className="sidebar-name">Контролна табла</h4>
        </a>

        <GrTasks style={{ marginLeft: "20px", color: "blue" }} />
        <a href="/">
          <h4 className="sidebar-name">Задачи</h4>
        </a>
        <FaTruckMoving style={{ marginLeft: "20px", color: "blue" }} />
        <a href="/">
          <h4 className="sidebar-name">Транспортери</h4>
        </a>
        <FaMapMarkerAlt style={{ marginLeft: "20px", color: "blue" }} />
        <a href="/">
          <h4 className="sidebar-name">Дестинации</h4>
        </a>
        <MdWork style={{ marginLeft: "20px", color: "blue" }} />
        <a href="/">
          <h4 className="sidebar-name">Фирми</h4>
        </a>
        <AiOutlineBarChart style={{ marginLeft: "20px", color: "blue" }} />
        <a href="/">
          <h4 className="sidebar-name">Статистика</h4>
        </a>
      </div>
      <div className="table-container1">
        <TableContainer
          component={Paper}
          style={{
            width: "90%",
            position: "absolute",
            right: "20px",
            left: "20px",
            top: "70px",
          }}
        >
          <Table>
            <TableHead>
              <TableRow style={{ height: "20px" }}>
                <TableCell style={{ height: "20px" }}>Наслов</TableCell>
                <TableCell>Дестинација</TableCell>
                <TableCell>Фирма</TableCell>
                <TableCell>Број на возила</TableCell>
                <TableCell> Креирано на </TableCell>
                <TableCell>Затворено на </TableCell>
                <TableCell>Акција</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bamesa</TableCell>
                <TableCell>Gemlic</TableCell>
                <TableCell>Bamesa germic celic</TableCell>
                <TableCell>1</TableCell>
                <TableCell> petok,03.03.2022 </TableCell>
                <TableCell>vo tek </TableCell>
                <TableCell>
                  <HiOutlinePencilSquare />
                  Покажи
                  <button>Избриши</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bamesa</TableCell>
                <TableCell>Gemlic</TableCell>
                <TableCell>Bamesa germic celic</TableCell>
                <TableCell>1</TableCell>
                <TableCell> petok,03.03.2022 </TableCell>
                <TableCell>vo tek </TableCell>
                <TableCell>
                  <HiOutlinePencilSquare />
                  Покажи
                  <button>Избриши</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bamesa</TableCell>
                <TableCell>Gemlic</TableCell>
                <TableCell>Bamesa germic celic</TableCell>
                <TableCell>1</TableCell>
                <TableCell> petok,03.03.2022 </TableCell>
                <TableCell>vo tek </TableCell>
                <TableCell>
                  <HiOutlinePencilSquare />
                  Покажи
                  <button>Избриши</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bamesa</TableCell>
                <TableCell>Gemlic</TableCell>
                <TableCell>Bamesa germic celic</TableCell>
                <TableCell>1</TableCell>
                <TableCell> petok,03.03.2022 </TableCell>
                <TableCell>vo tek </TableCell>
                <TableCell>
                  <HiOutlinePencilSquare />
                  Покажи
                  <button>Избриши</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bamesa</TableCell>
                <TableCell>Gemlic</TableCell>
                <TableCell>Bamesa germic celic</TableCell>
                <TableCell>1</TableCell>
                <TableCell> petok,03.03.2022 </TableCell>
                <TableCell>vo tek </TableCell>
                <TableCell>
                  <HiOutlinePencilSquare />
                  Покажи
                  <button>Избриши</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bamesa</TableCell>
                <TableCell>Gemlic</TableCell>
                <TableCell>Bamesa germic celic</TableCell>
                <TableCell>1</TableCell>
                <TableCell> petok,03.03.2022 </TableCell>
                <TableCell>vo tek </TableCell>
                <TableCell>
                  <HiOutlinePencilSquare />
                  Покажи
                  <button>Избриши</button>
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Tasks;
