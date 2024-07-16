import React from 'react';
import { AppBar, Toolbar, Typography, Button, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; 
import styled from 'styled-components';

const StyledAppBar = styled(AppBar)`
  background-color: #f0f0f0;
  color: ${(props) => props.theme.colors.headerText};             // Cor do texto do header
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); // Sombra suave
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const StyledLogo = styled(Typography)`
  font-weight: bold;
  font-size: 24px;
  color: ${(props) => props.theme.colors.primary}; // Cor vibrante
`;

const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.primary}; // Cor vibrante
  color: orange;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: ${(props) => props.theme.colors.highlight}; // Cor de destaque ao passar o mouse
  }
`;

const Header = () => {
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <StyledLogo variant="h6" className="logo">
          Aluraflix
        </StyledLogo>
        <div className="header-buttons">
          <StyledButton color="inherit" component={RouterLink} to="/">Home</StyledButton> 
          <StyledButton color="inherit" component={RouterLink} to="/new-video">Novo Vídeo</StyledButton>
        </div>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;