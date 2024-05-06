import React from "react";

interface CharacterContextProps {
  characterName: string;
  setCharacterName: (value: string) => void;
  page: number;
  setPage: (value: number) => void;
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export const CharacterContext = React.createContext<CharacterContextProps>({
  characterName: "",
  setCharacterName: (_value: string) => {},
  page: 0,
  setPage: (_value: number) => {},
  searchValue: "",
  setSearchValue: (_value: string) => {},
});

export const CharacterContextProvider = (props) => {
  const [characterName, setCharacterName] = React.useState<string>("");
  const [searchValue, setSearchValue] = React.useState<string>("");
  const [page, setPage] = React.useState<number>(0);

  return (
    <CharacterContext.Provider
      value={{
        characterName,
        setCharacterName,
        page,
        setPage,
        searchValue,
        setSearchValue,
      }}
    >
      {props.children}
    </CharacterContext.Provider>
  );
};
