import {
  Avatar,
  Card,
  CardContent,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

interface CharacterDetailMainProps {
  character: Character;
}

export const CharacterDetailMain: React.FC<CharacterDetailMainProps> = (
  props
) => {
  const { character } = props;
  return (
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
  );
};
