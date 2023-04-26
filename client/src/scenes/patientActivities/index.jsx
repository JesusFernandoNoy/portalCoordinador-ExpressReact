import { Box, useTheme, CircularProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import useFetch from "../../hooks/useFetch";

const PatienActivities = ({patientId}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
  
      {
        field: "activityName",
        headerName: "Actividad",          
        align: "left",
        cellClassName: "name-column--cell",
      },
      {
        field: "frequency",
        headerName: "Frecuencia",    
        width: 100,  
        cellClassName: "name-column--cell",
      },
      {
        field: "dateAppointmentStr",
        headerName: "Fecha última cita",
        width: 100,               
        cellClassName: "name-column--cell",
      },
      {
        field: "programRange",
        headerName: "Rango de programación",  
        width: 150,     
        cellClassName: "name-column--cell",
      },
      {
        field: "activityState",          
        headerName: "Estado de la Actividad", 
        width: 100,      
        cellClassName: "name-column--cell",
      }   
    ];

    const patientActivityFetch = useFetch(
      '/api/patientActivity/'+patientId
    );
  
    const { loading, result} = patientActivityFetch;
  
    if (loading || !result){
      console.log("Loading Activities");
      return (
        <CircularProgress />
      );
    }
          
    return (
      <Box
        m="10px 10px 0 0"
        height="60vh"                  
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.black[100],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.black[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.white[100],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.black[100],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid rows={result} columns={columns} />
      </Box>
    );    
  };
  
  export default PatienActivities;



