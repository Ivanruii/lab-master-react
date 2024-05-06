import React from "react";
import { Button, Stack, TextField } from "@mui/material";
import { useDebounce } from "../hooks/use-debounce.hook";

export const SearchInput: React.FC<{
  initialValue: string;
  searchFunction: (value: string) => void;
  showSearchButton?: boolean;
}> = ({ initialValue, searchFunction, showSearchButton = true }) => {
  const [searchValue, setSearchValue] = React.useState(initialValue);
  const debouncedSearchValue = useDebounce(searchValue, 500);

  React.useEffect(() => {
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
          variant="standard"
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
