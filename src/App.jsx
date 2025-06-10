import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Box, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import AppRoutes from './routes';
import Sidebar from './components/Sidebar';

const MainContent = styled(Box)({
    marginLeft: '240px', // Largura da sidebar
    padding: '20px',
    transition: 'margin-left 0.3s', // Para a animação suave da sidebar
});

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleToggleSidebar}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button color="inherit" component="a" href="/">CliniMais</Button>
        </Toolbar>
      </AppBar>
      <Sidebar open={isSidebarOpen} onClose={handleToggleSidebar} />
      <Container sx={{ mt: 4 }}>
        <AppRoutes />
      </Container>
    </Box>
  );
}

export default App;