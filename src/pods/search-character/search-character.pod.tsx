import React from "react";
import { CharacterContext } from "../../core/providers/character.provider";
import { SearchInput } from "../../common/components/search.component";

export const CharacterSearch: React.FC = () => {
  const { setCharacterName } = React.useContext(CharacterContext);

  return (
    <SearchInput
      initialValue={""}
      searchFunction={setCharacterName}
      showSearchButton={false}
    />
  );
};
