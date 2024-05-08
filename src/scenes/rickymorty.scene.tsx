import React from "react";
import { CharacterContextProvider } from "../core/providers/character.provider";
import { HeaderLayout } from "../layouts/header.layout";
import { RickyMortyList } from "../pods/ricky-morty-cards-collection/ricky-morty-cards.pod";
import { CharacterSearch } from "../pods/search-character/search-character.pod";

export const RickyMortyScene: React.FC = () => {
  return (
    <CharacterContextProvider>
      <HeaderLayout
        headerPageTitle={"Rick & Morty"}
        headerSearchPod={<CharacterSearch />}
      >
        <RickyMortyList />
      </HeaderLayout>
    </CharacterContextProvider>
  );
};
