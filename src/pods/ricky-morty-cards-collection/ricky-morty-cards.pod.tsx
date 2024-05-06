import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
  Button,
} from "@mui/material";
import { useQuery } from "react-query";
import { CharacterContext } from "../../core/providers/character.provider";
import { Link } from "react-router-dom";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";

export const RickyMortyList: React.FC = () => {
  const { characterName, page } = React.useContext(CharacterContext);

  const { data: characters, isLoading } = useQuery<Character[]>(
    ["characters", characterName, page],
    async () => {
      const url = `https://rickandmortyapi.com/api/character/?name=${characterName}&page=${page}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch characters");
      }
      const data = await response.json();
      return data.results;
    }
  );

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
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
                    <Link
                      to={`/character-detail/${character.id}`}
                      state={character}
                    >
                      <Button
                        variant="outlined"
                        startIcon={<DisplaySettingsIcon />}
                      >
                        Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </>
  );
};
