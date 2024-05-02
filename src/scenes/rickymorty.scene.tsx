import React from 'react';
import { DefaultLayout } from '../layouts/default.layout';
import { RickyMortyList } from '../pods/ricky-morty-cards-collection/ricky-morty-cards.pod';
import { CharacterSearch } from '../pods/search-character/search-character.pod';
import { CharacterContextProvider } from '../providers/character.provider';

export const RickyMortyScene: React.FC = () => {
    return (
        <DefaultLayout>
            <CharacterContextProvider>
                <CharacterSearch />
                <RickyMortyList />
            </CharacterContextProvider>
        </DefaultLayout>
    );
};
