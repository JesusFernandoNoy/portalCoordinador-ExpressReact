import { Box, Button, IconButton, Typography, useTheme, CircularProgress} from "@mui/material";
import { tokens } from "../../theme";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";


const PatientInformation = ({patientId}) => {

  let navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleClick = (event) => { 
    let path = `/gestion`; 
    navigate(path);
  };

  // ✅ Find the first object that matches a condition
  /*const patientInfo = mockDataContacts.find(obj => {  
    return obj.id === patientId;
  });*/

  const patientInfoFetch = useFetch(
    '/api/patientInfo/'+patientId
  );

  const { loading, result} = patientInfoFetch;

  if (loading || !result){
    console.log("Loading Patient Info");
    return (
      <CircularProgress />
    );
  } 

  return (    
        <Box m="0px 5px"
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.white[100]}
          overflow="auto"
        >
          <Button
            variant="contained"
            color="primary"
            onClick={(event) => {
              handleClick(event);
            }}
          >
            Volver
          </Button>
          {result && (  
            <Typography color={colors.blueAccent[600]} variant="h2" fontWeight="700">
              {result.name +" "+ result.lastName} 
              <br />
            </Typography>  
            ) } 
          <Box 
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}            
          >
            <Typography color={colors.black[100]} variant="h4" fontWeight="600">
              Datos del paciente
            </Typography>                 
          </Box>
          <Typography color={colors.blueAccent[500]} variant="h4" fontWeight="600">
              Básicos
            </Typography>
          {result && (
            <Box            
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}            
          >
            <Box>
              <div style={{ display: "flex", alignItems:"center", gap: "2rem" }}>
                <Typography color={colors.black[100]}>
                  <b>Tipo de documento:</b>                                  
                </Typography>                
                <Typography color={colors.black[100]}>
                  {result.documentTypeName}                                   
                </Typography>    
              </div>            
              <div style={{ display: "flex", alignItems:"center", gap: "0.7rem" }}>
                <Typography color={colors.black[100]}>
                  <b>Número de documento:</b>                                    
                </Typography>
                <Typography color={colors.black[100]}>
                  {result.documentNumber}                                   
                </Typography>
              </div>
              <div style={{ display: "flex", alignItems:"center", gap: "1.6rem" }}>
                <Typography color={colors.black[100]}>
                  <b>Fecha de nacimiento:</b>                                   
                </Typography>
                <Typography color={colors.black[100]}>
                  {result.birthDayFormatter}                                   
                </Typography>
              </div>
              <div style={{ display: "flex", alignItems:"center", gap: "7.4rem" }}>
                <Typography color={colors.black[100]}>
                  <b>Edad:</b>                                   
                </Typography> 
                <Typography color={colors.black[100]}>
                  {result.age}                                   
                </Typography> 
              </div> 
              <div style={{ display: "flex", alignItems:"center", gap: "6rem" }}>
                <Typography color={colors.black[100]}>
                  <b>Telefono:</b>                                  
                </Typography>
                <Typography color={colors.black[100]}>
                  {result.phone}                                   
                </Typography>
              </div>
              <div style={{ display: "flex", alignItems:"center", gap: "7.6rem" }}>
                <Typography color={colors.black[100]}>
                  <b>sexo:</b>                                  
                </Typography>
                <Typography color={colors.black[100]}>
                  {result.gender}                                   
                </Typography>
              </div>
              <div style={{ display: "flex", alignItems:"center", gap: "6.7rem" }}>
                <Typography color={colors.black[100]}>
                  <b>Ciudad:</b>                         
                </Typography>
                <Typography color={colors.black[100]}>
                  {result.city}                        
                </Typography> 
              </div>    
              <div style={{ display: "flex", alignItems:"center", gap: "5rem" }}>
                <Typography color={colors.black[100]}>
                  <b>Estado civil:</b>                                 
                </Typography>
                <Typography color={colors.black[100]}>
                  {result.maritalStatus}                                   
                </Typography>
              </div>                     
            </Box>            
          </Box>
          )}          
        </Box>
  );
};

export default PatientInformation;
