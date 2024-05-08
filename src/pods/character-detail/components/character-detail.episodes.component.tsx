import React from "react";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";

interface CharacterDetailEpisodesProps {
  character: Character;
  episodes: string[];
  handleToggleEpisodes: () => void;
  showAllEpisodes: Boolean;
}

export const CharacterDetailEpisodes: React.FC<CharacterDetailEpisodesProps> = (
  props
) => {
  const { episodes, character, handleToggleEpisodes, showAllEpisodes } = props;
  return (
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
              {showAllEpisodes ? "Show Less Episodes" : "Show More Episodes"}
            </Button>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};
