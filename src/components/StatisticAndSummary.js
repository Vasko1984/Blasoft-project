import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "../assets/StatisticAndSummary.css";
import { Container, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { BsTypeH2 } from 'react-icons/bs';


const StatisticAndSummary = () => {
    const [days, setDays] = React.useState('');
  
    const handleChange = (event) => {
      setDays(event.target.value);
    };

  return (
    <div>
        <div className='summary'>
            <h2>Прикажи статистика за превозниците за последните</h2>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label" style={{paddingTop:"10px"}}>Ден</InputLabel>
      <Select
      style={{backgroundColor:"white",color:"gray",marginTop:"10px"}}
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={days}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>Денови</em>
        </MenuItem>
        <MenuItem value={10}>15Дена</MenuItem>
        <MenuItem value={20}>10Дена</MenuItem>
        <MenuItem value={30}>5Дена</MenuItem>
      </Select>
    </FormControl>
    <button className='prikazi'>Прикажи</button>
        </div>
        <Container style={{marginTop:"40px"}}>
            <div className='wrapper'>
                <h2>Multi Sped DOOEL</h2>
            </div>
            <div><h2 className='tovareni'>товарени/Истоварени возила според Дестинација</h2></div>
            <TableContainer style={{marginLeft:'10px'}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Дестинација</TableCell>
                            <TableCell>Број на Возила</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Thessaloniki</TableCell>
                            <TableCell>10</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Aspropirgos</TableCell>
                            <TableCell>2</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
            <div><h2 className='tovareni'>Листа на Товарени/Истоварени возила</h2></div>
            <TableContainer style={{marginLeft:'10px'}} >
<Table>
    <TableHead>
        <TableRow>
            <TableCell>Регистрација</TableCell>
            <TableCell>Дестинација</TableCell>
            <TableCell>Фирма</TableCell>
            <TableCell>Товарено</TableCell>
            <TableCell>Истоварено</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>Ка530да</TableCell>
            <TableCell>Thessaloniki</TableCell>
            <TableCell>PAGOUNI SA</TableCell>
            <TableCell>петок , 20 мај 11:30часот</TableCell>
            <TableCell>понеделник,23 мај 13:00часот</TableCell>
        </TableRow>
    </TableHead>
</Table>
            </TableContainer>
        </Container>
    </div>
  )
}

export default StatisticAndSummary