import React from "react";
import { DefaultLayout } from "../layouts/default.layout";
import { RickyMortyList } from "../pods/ricky-morty-cards-collection/ricky-morty-cards.pod";
import { CharacterSearch } from "../pods/search-character/search-character.pod";
import { CharacterContextProvider } from "../core/providers/character.provider";
import { Header } from "../common/components/header.component";

export const RickyMortyScene: React.FC = () => {
  return (
    <DefaultLayout>
      <CharacterContextProvider>
        <Header
          pageTitle="Rick & Morty"
          searchComponent={<CharacterSearch />}
        />
        <RickyMortyList />
      </CharacterContextProvider>
    </DefaultLayout>
  );
};
