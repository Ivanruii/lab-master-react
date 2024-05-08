import { Grid, Card, CardContent, Typography } from "@mui/material";
import React from "react";

interface CharacterDetailOtherProps {
  character: Character;
}

export const CharacterDetailOther: React.FC<CharacterDetailOtherProps> = (
  props
) => {
  const { character } = props;
  return (
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
  );
};
