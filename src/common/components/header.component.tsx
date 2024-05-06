import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  pageTitle: string;
  searchComponent: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({
  pageTitle,
  searchComponent,
}) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1, marginBottom: 2 }}>
      <AppBar position="static" variant="elevation" color="default">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            {pageTitle}
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Button color="inherit" onClick={() => navigate("/landing")}>
              Go Back Landing
            </Button>
            {searchComponent}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
