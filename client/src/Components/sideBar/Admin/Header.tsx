import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexDirection: 'row',
  position: 'fixed',
  top: 0,
  width: '100%',
  height: 'var(--Header-height, 52px)',
  zIndex: 9998,
  padding: theme.spacing(1),
  borderBottom: `1px solid ${theme.palette.divider}`,
  boxShadow: theme.shadows[1],
  backgroundColor: theme.palette.background.paper,
}));
interface HeaderProps {
    toggleSidebar: () => void;
  }
export default function Header({ toggleSidebar }:HeaderProps) {
  return (
    <>
      <style>
        {`
          :root {
            --Header-height: 52px;
          }
        `}
      </style>
      <StyledAppBar color='default'>
        <IconButton
          onClick={toggleSidebar}
          size="small"
          edge="start"
          color="inherit"
          aria-label="menu"
        >
          <MenuRoundedIcon />
        </IconButton>
      </StyledAppBar>
    </>
  );
}
