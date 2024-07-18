import  { useEffect, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import SideBar from '../../sideBar/Admin/SideBar';
import Header from '../../sideBar/Admin/Header';
import SupplierProfile from './supplierProfile/Main';
import Main from './addSupplier/main';
import SuppliersListing from './SuppliersListing';


const theme = createTheme();

const AdminMainPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
    // Function to handle window resize
    const handleResize = () => {
        if (window.innerWidth < 600) { // Adjust this value based on your design
          setSidebarOpen(false);
        } else {
          setSidebarOpen(true);
        }
      };
    
      // Use effect to add event listener
      useEffect(() => {
        handleResize(); // Check on mount
        window.addEventListener('resize', handleResize);
    
        // Cleanup listener on unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <SideBar open={sidebarOpen} />
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            width: {
              xs: '100%',
              sm: sidebarOpen ? 'calc(100% - 240px)' : '100%',
            },
            transition: 'width 0.3s ease',
            overflow: 'auto',
          }}
        >
          <Header toggleSidebar={toggleSidebar} />
          <Box
            component="main"
            className="MainContent"
            sx={{
            
              pb: { xs: 2, sm: 2, md: 3 },
              px: 2,
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              minWidth: 0,
              height: '100vh',
              gap: 1,
              overflow: 'auto',
              
            }}
          >
            {/* <SuppliersListing /> */}
            <SupplierProfile id={2}></SupplierProfile>
            {/* <Main></Main> */}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default AdminMainPage;
