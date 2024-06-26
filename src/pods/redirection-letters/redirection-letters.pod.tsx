import React from "react";
import {
  Stack,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { switchRoutes } from "../../core/router/routes";

export const RedirectionLettersPod = () => {
  const navigate = useNavigate();

  return (
    <>
      <Typography variant="h1">Select the page</Typography>
      <Stack direction={"row"} gap={5}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea onClick={() => navigate(switchRoutes.githubOrgs)}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                GITHUB ORGS
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A page with a list of the members of each GITHUB ORG.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea onClick={() => navigate(switchRoutes.rickyMorty)}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Rick & Morty
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A page with a list of the members of each Rick & Morty.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Stack>
    </>
  );
};
