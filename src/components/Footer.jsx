import React from 'react'

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from "@mui/material/Box"

export default function Footer() {
    const today = new Date();
    const year = today.getFullYear();

  return (
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: "#eee" }} > 
      <BottomNavigation sx={{ backgroundColor: "inherit" }} showLabels>
        <BottomNavigationAction label={`Copyright ${year}`} />
      </BottomNavigation>
    </Box>
  )
}
