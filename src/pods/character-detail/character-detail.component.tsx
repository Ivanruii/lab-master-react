import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Stack,
  Avatar,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { switchRoutes } from "../../core/router/routes";
import { CharacterDetailEpisodes } from "./components/character-detail.episodes.component";
import { CharacterDetailMain } from "./components/character-detail-main.component";
import { CharacterDetailOther } from "./components/character-detail-other.component";

interface CharacterDetailComponentProps {
  character: Character;
  episodes: string[];
  handleToggleEpisodes: () => void;
  showAllEpisodes: boolean;
}

export const CharacterDetailComponent: React.FC<
  CharacterDetailComponentProps
> = (props) => {
  const { character, episodes, handleToggleEpisodes, showAllEpisodes } = props;
  return (
    <>
      <Typography variant="h1">Details Page</Typography>
      <Grid container spacing={2}>
        <CharacterDetailMain character={character} />
        <CharacterDetailEpisodes
          character={character}
          episodes={episodes}
          handleToggleEpisodes={handleToggleEpisodes}
          showAllEpisodes={showAllEpisodes}
        />
        <CharacterDetailOther character={character} />
        <Link to={switchRoutes.rickyMorty}>
          <Button variant="contained">Go Back!</Button>
        </Link>
      </Grid>
    </>
  );
};
