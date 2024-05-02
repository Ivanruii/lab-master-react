import React, { useContext } from "react";
import { CharacterContext } from "../../providers/character.provider";
import { SearchInput } from "../../components/search.component";

export const CharacterSearch: React.FC = () => {
    const { setCharacterName, setPage } = useContext(CharacterContext);

    return (
        <SearchInput
            initialValue={""}
            searchFunction={setCharacterName}
            setPageFunction={setPage}
            showSearchButton={false}
        />
    );
};
