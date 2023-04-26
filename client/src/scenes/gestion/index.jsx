import { Box,useTheme, Typography, Tab, Tabs} from "@mui/material";
import Header from "../../components/Header";
import { useState } from 'react';
import Candidatos from "../../scenes/candidatos";
import Vinculados from "../../scenes/vinculados";
import { tokens } from "../../theme";


const Gestion = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return (
    <Box m="0 60px 0 5px" borderRadius={3} paddingBottom={5} sx={{ background: colors.white[100]}}>

      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Gestión de Pacientes" subtitle="Manejo de pacientes del programa UPI Diabetes" />
        <Box color="black">
          <div align="center" >Prioridad de un paciente</div>
          <img
            alt="priority-patient" 
            width="400px"                 
            src={`../../assets/PrioridadPaciente.jpg`}                  
          />
        </Box>
      </Box>      
      <Tabs value={tabIndex} onChange={handleTabChange} textColor="secondary" indicatorColor="secondary"                
      sx={{        
        "& button.MuiTab-textColorSecondary":{color:"black"}        
      }}>
        <Tab label="Candidatos" />        
        <Tab label="Vinculados" />        
      </Tabs>      
      <Box sx={{ padding: 2 }}>
        {tabIndex === 0 && (
          <Candidatos />
        )}
        {tabIndex === 1 && (
          <Vinculados />
        )}        
      </Box>
    </Box>       
  );
};

export default Gestion;