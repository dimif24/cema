import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import SideBar from '../../sideBar/Admin/SideBar';
import Header from '../../sideBar/Admin/Header';
// import SupplierProfile from '././SupplierProfile';
import SuppliersListing from './SuppliersListing';

const AdminMainPage = () => {
    return (
        <CssVarsProvider disableTransitionOnChange>
            <CssBaseline />
            <Box sx={{ display: 'flex', minHeight: '100dvh' }}>

                <SideBar />
                <Header />
                <Box
                    component="main"
                    className="MainContent"
                    sx={{
                        pt: { xs: 'calc(12px + var(--Header-height))', md: 3 },
                        pb: { xs: 2, sm: 2, md: 3 },
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        minWidth: 0,
                        height: '100dvh',
                        gap: 1,
                        overflow: 'auto',
                    }}
                >
                    <SuppliersListing />
                </Box>
            </Box>
        </CssVarsProvider>
    );
}
export default AdminMainPage;
