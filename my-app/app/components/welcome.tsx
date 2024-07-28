import { Box, Typography } from "@mui/material";
import React from "react";

export const Welcome = () => {
  return (
    <Box
      component="section"
      sx={{ p: 3,pt:6 }}
    >
      
      <Typography variant="h4" sx={{textAlign:"center", fontFamily:"Libre Baskerville",color:'black',fontWeight:900,fontSize:'2rem'}}> ¡Qué emoción tenerte aquí!</Typography>
        <br />
        <Typography variant="h4"  sx={{textAlign:"center", fontFamily:"Libre Baskerville",color:'black',fontWeight:900,fontSize:'2rem'}}>17 de Agosto de 13:00hs a 16:00hs</Typography>

    
    </Box>

  );
};
