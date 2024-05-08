import React from "react";
import { useQuery } from "react-query";
import { CircularProgress } from "@mui/material";
import { CharacterContext } from "../../core/providers/character.provider";
import { RickyMortyCardsComponent } from "./ricky-morty-cards.component";

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
        <RickyMortyCardsComponent characters={characters} />
      )}
    </>
  );
};
