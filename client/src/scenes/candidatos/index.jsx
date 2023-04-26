import { Box, useTheme, Button, CircularProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";


const Candidatos = () => {  

  let navigate = useNavigate();

  const handleClick = (event, cellValues) => {
    let path = `/patient`; 
    navigate(path, {state: {patientid : cellValues.row.id}});
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
   
    {
      field: "hemoglobina",      
      renderHeader: () => (
        <strong>          
          {'Hemoglobina Glicosilada'}                            
        </strong>
      ),
      width: 90,        
      align: "center",
      sortable: false,
      filterable: false,
      hideable: false,          
      cellClassName: "name-column--cell",
    },
    {
      field: "priority",
      renderHeader: () => (
        <strong>
          {'Prioridad'}          
        </strong>
      ), 
      width: 80,           
      cellClassName: "name-column--cell",
      sortable: false,
      filterable: false,
      hideable: false,
    },
    {
      field: "name",
      renderHeader: () => (
        <strong>
          {'Nombre'}          
        </strong>
      ),      
      width: 130,
      sortable: false,
      filterable: false,
      hideable: false,      
      cellClassName: "name-column--cell",
    },
    {
      field: "idType",      
      renderHeader: () => (
        <strong>
          {'Tipo ID'}          
        </strong>
      ),   
      width: 80,
      sortable: false,
      filterable: false,
      hideable: false,     
      cellClassName: "name-column--cell",
    },
    {
      field: "numId",
      width: 90,
      renderHeader: () => (
        <strong>
          {'Número de Documento'}          
        </strong>
      ),          
      cellClassName: "name-column--cell",
      sortable: false,
      filterable: false,
      hideable: false,
    },
    {
      field: "age",      
      renderHeader: () => (
        <strong>
          {'Edad'}          
        </strong>
      ),
      width: 95,
      type: "number",
      headerAlign: "left",
      sortable: false,
      filterable: false,
      hideable: false,
      align: "left",
    },
    {
      field: "rute",      
      renderHeader: () => (
        <strong>
          {'Ruta'}          
        </strong>
      ), 
      width: 65,
      sortable: false,
      filterable: false,
      hideable: false,     
      cellClassName: "name-column--cell",
    },
    {
      field: "testDiagnostic",
      width: 90,     
      renderHeader: () => (
        <strong>
          {'Prueba Diagnóstica'}          
        </strong>
      ),     
      cellClassName: "name-column--cell",
      align: "center",
      sortable: false,
      filterable: false,
      hideable: false,
    },
    {
      field: "pendingActivity",
      width: 80,      
      renderHeader: () => (
        <strong>
          {'Actividades Pendientes'}          
        </strong>
      ),     
      cellClassName: "name-column--cell",
      align: "center",
      sortable: false,
      filterable: false,
      hideable: false,
      
    }, 
    {
      field: "",
      sortable: false,
      filterable: false,
      hideable: false, 
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={(event) => {
              handleClick(event, cellValues);
            }}
          >
            Gestionar
          </Button>
        );
      }
    },   
  ];

  const patientsProgramFetch = useFetch(
    "/api/OrderByHemoglobin"
  );

  const { loading, result} = patientsProgramFetch;

  if (loading || !result){
    console.log("Loading Candidatos");
    return (
      <CircularProgress />
    );
  }


  return (        
         <Box
         m="10px 0 0 0"
         height="60vh"         
         sx={{
          "& .css-1foozea-MuiDataGrid-root .MuiDataGrid-columnHeaderTitleContainer" :{
            whiteSpace: "pre-wrap",
            lineHeight: "20px",
            overflow: "visible",
          }, 
          "& .MuiDataGrid-cellContent":{
            whiteSpace: "pre-wrap",
            lineHeight: "20px",
            overflow: "visible",
          },             
           "& .name-column--cell": {
             color: colors.black[100],
           },
           "& .MuiDataGrid-columnHeaders": {
             backgroundColor: colors.white[100],            
           },
           "& .MuiDataGrid-virtualScroller": {
             backgroundColor: colors.white[100],
           },           
           "& .css-1foozea-MuiDataGrid-root":{
             color: "black",
           },
           "& .css-bvbdia-MuiTablePagination-root":{
             color: "black",
           }           
         }}
       >
         <DataGrid rows={result} columns={columns} disableColumnMenu={true} />
       </Box> 
  );
};

export default Candidatos;