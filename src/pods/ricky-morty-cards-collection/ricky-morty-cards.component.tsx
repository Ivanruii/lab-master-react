import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";

interface RickyMortyCardsComponentProps {
  characters: Character[];
}

export const RickyMortyCardsComponent: React.FC<
  RickyMortyCardsComponentProps
> = (props) => {
  const { characters } = props;
  return (
    <Grid container spacing={2}>
      {characters.map((character) => (
        <Grid item key={character.id} xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={character.image}
              alt={character.name}
            />
            <CardContent>
              <Typography variant="h5">{character.name}</Typography>
              <Typography variant="body1">
                Status: {character.status}
              </Typography>
              <Typography variant="body1">
                Species: {character.species}
              </Typography>
              <Link to={`/character-detail/${character.id}`} state={character}>
                <Button variant="outlined" startIcon={<DisplaySettingsIcon />}>
                  Details
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
