import React from "react";
import { IoSpeedometer } from "react-icons/io5";
import "../assets/Tasks.css";
import { GrTasks } from "react-icons/gr";
import { FaList, FaMapMarkerAlt, FaTruckMoving, FaUserCircle } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { AiOutlineBarChart } from "react-icons/ai";
import {
  Container,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const Tasks = () => {

  const LogOut =()=> {
    localStorage.clear();
    window.location.href = '/';
};
const navigate = useNavigate();


  return (
   
    <Container>
      <div >
        <FaUserCircle style={{position:"absolute",right:"20px",width:"30px",height:"30px",marginBottom:"30px",marginTop:"20px",cursor:"pointer"}} onClick={LogOut}/>
      </div>
      <div className="sidebar">
        <IoSpeedometer
          style={{ marginTop: "30px", marginLeft: "20px", color: "blue" }}
        />
       
          <h4 className="sidebar-name" onClick={() => navigate("/truckdetails")}>Контролна табла</h4>
      

        <GrTasks style={{ marginLeft: "20px", color: "blue" }} />
       
          <h4 className="sidebar-name" onClick={() => navigate("/taskform")}>Задачи</h4>
     
        <FaTruckMoving style={{ marginLeft: "20px", color: "blue" }} />
       
          <h4 className="sidebar-name"onClick={() => navigate("/transporters")}>Транспортери</h4>
      
        <FaMapMarkerAlt style={{ marginLeft: "20px", color: "blue" }} />
     
          <h4 className="sidebar-name" onClick={() => navigate("/statisticandreport")}>Дестинации</h4>
      
        <MdWork style={{ marginLeft: "20px", color: "blue" }} />
     
          <h4 className="sidebar-name" onClick={() => navigate("/companies")}>Фирми</h4>
       
        <AiOutlineBarChart style={{ marginLeft: "20px", color: "blue" }} />
       
          <h4 className="sidebar-name" onClick={() => navigate("/statisticandreport")}>Статистика</h4>
       
      </div>
      <div className="site-zadaci">
          <FaList style={{ width: "30px",height:"30px",marginRight:"20px",marginLeft:"20px",marginTop:"10px" }} />
          <h4 style={{paddingTop:"10px"}}>Сите задачи ()</h4>
          </div>
        <TableContainer
           component={Paper}
           style={{
             width: "70%",
             position: "absolute",
             right: "20px",
            // left: "20px",
           top: "170px",
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
                  
                 <button style={{width:"90px"}}> <HiOutlinePencilSquare /> Покажи</button>
                  <button><RiDeleteBin6Line/>Избриши</button>
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
                <button  style={{width:"90px"}}> <HiOutlinePencilSquare /> Покажи</button>
                  <button><RiDeleteBin6Line/>Избриши</button>
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
                <button  style={{width:"90px"}}> <HiOutlinePencilSquare  /> Покажи</button>
                  <button><RiDeleteBin6Line/>Избриши</button>
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
                <button  style={{width:"90px"}}> <HiOutlinePencilSquare /> Покажи</button>
                  <button><RiDeleteBin6Line/>Избриши</button>
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
                <button  style={{width:"90px"}}><HiOutlinePencilSquare /> Покажи</button>
                  <button><RiDeleteBin6Line/>Избриши</button>
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
                <button  style={{width:"90px"}}><HiOutlinePencilSquare /> Покажи</button>
                  <button > <RiDeleteBin6Line/>Избриши</button>
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
       
     </Container>
  );
};

export default Tasks;
