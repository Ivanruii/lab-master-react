import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { switchRoutes } from "../../core/router/routes";
import { DefaultLayout } from "../../layouts/default.layout";

export const CharactersDetailPod: React.FC = () => {
  const location = useLocation();
  const character = location.state as Character;
  const [episodes, setEpisodes] = React.useState<string[]>([]);
  const [showAllEpisodes, setShowAllEpisodes] = React.useState(false);

  React.useEffect(() => {
    if (character) {
      const fetchEpisodes = async () => {
        try {
          const episodesData = await Promise.all(
            character.episode
              .slice(0, showAllEpisodes ? character.episode.length : 3)
              .map(async (episodeUrl) => {
                const response = await fetch(episodeUrl);
                const data = await response.json();
                return data.name;
              })
          );
          setEpisodes(episodesData);
        } catch (error) {
          console.error("Error fetching episodes:", error);
        }
      };
      fetchEpisodes();
    }
  }, [character, showAllEpisodes]);

  const handleToggleEpisodes = () => {
    setShowAllEpisodes(!showAllEpisodes);
  };

  return (
    <DefaultLayout>
      <h2>Details Page</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          {character && (
            <Card>
              <CardContent>
                <Stack direction="row" spacing={1} alignItems={"center"}>
                  <Avatar
                    src={character.image}
                    alt={`${character.name} profile avatar`}
                  />
                  <Typography variant="h5" component="div">
                    {character.name}
                  </Typography>
                </Stack>
                <Divider orientation="horizontal" variant="middle" flexItem />

                <Typography>Status: {character.status}</Typography>
                <Typography>Species: {character.species}</Typography>
                <Typography>Gender: {character.gender}</Typography>
                <Typography>Origin: {character.origin.name}</Typography>
                <Typography>Location: {character.location.name}</Typography>
              </CardContent>
            </Card>
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Episodes
              </Typography>
              {episodes.map((episode, index) => (
                <Typography key={index}>Episode: {episode}</Typography>
              ))}
              {character && (
                <Button variant="outlined" onClick={handleToggleEpisodes}>
                  {showAllEpisodes
                    ? "Show Less Episodes"
                    : "Show More Episodes"}
                </Button>
              )}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Other Details
              </Typography>
              <Typography>Type: {character?.type}</Typography>
              <Typography>Dimension: {character?.dimension}</Typography>
              <Typography>Created: {character?.created}</Typography>
              <Typography>Episodes: {character?.episode.length}</Typography>
              <Typography>URL: {character?.url}</Typography>
              <Typography>ID: {character?.id}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Link to={switchRoutes.rickyMorty}>
        <Button variant="contained">Go Back!</Button>
      </Link>
    </DefaultLayout>
  );
};
