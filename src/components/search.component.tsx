import { Button, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDebounce } from "../common/hooks/use-debounce.hook";
import { useSearch } from "../common/hooks/use-search.hook";

export const SearchInput: React.FC<{
  initialValue: string;
  searchFunction: (value: string) => void;
  setPageFunction: (value: number) => void;
  showSearchButton?: boolean;
}> = ({
  initialValue,
  searchFunction,
  setPageFunction,
  showSearchButton = true,
}) => {
  const [searchValue, setSearchValue] = useState(initialValue);
  const debouncedSearchValue = useDebounce(searchValue, 500);

  useEffect(() => {
    setOrgName(initialValue);
  }, [initialValue]);

  useEffect(() => {
    searchFunction(debouncedSearchValue);
  }, [debouncedSearchValue, searchFunction]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleButtonClick = () => {
    searchFunction(searchValue);
  };

  return (
    <header style={{ marginTop: "1rem" }}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <TextField
          variant="outlined"
          value={searchValue}
          size="small"
          placeholder="Search..."
          onChange={handleInputChange}
        />
        {showSearchButton && (
          <Button variant="contained" onClick={handleButtonClick}>
            Search
          </Button>
        )}
      </Stack>
    </header>
  );
};
function setOrgName(initialValue: string) {
  throw new Error("Function not implemented.");
}
