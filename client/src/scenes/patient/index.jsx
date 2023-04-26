import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";
import PatienActivity from "../../scenes/patientActivities";
import PatienInformation from "../../scenes/patientInformation";
import { useLocation } from "react-router-dom";


const Patient = () => {
  const location = useLocation();
  
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  return (
    <Box m="0 60px 0 5px" borderRadius={3} paddingBottom={20} sx={{ background: colors.white[100]}}>
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Gestión de Pacientes" subtitle="" />        
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="180px"
        gap="20px"
      >      

        {/* ROW 1 */ }           
        <PatienInformation patientId={location.state.patientid}/>
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          height="450px"
          backgroundColor={colors.white[100]}
        >
          <Box
            mt="10px"
            p="0 0px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h4"
                fontWeight="600"                
                color={colors.black[100]}
              >
                Actividades Pendientes
              </Typography>              
            </Box>
            <Box>
              <IconButton>
                <Typography
                  variant="h4"
                  fontWeight="600"                
                  color={colors.black[100]}
                >
                  Agendar Actividades
                </Typography>                
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="350px" m="-20px 0 0 0">
            <PatienActivity patientId={location.state.patientid}/>
          </Box>
        </Box>        
      </Box>
    </Box>
  );
};

export default Patient;
