import React from "react";

export const useSearch = (
    initialValue: string,
    searchFunction: (value: string) => void,
    setPageFunction: (value: number) => void
) => {
    const [searchValue, setSearchValue] = React.useState<string>(initialValue);

    const handleSearch = () => {
        searchFunction(searchValue);
        setPageFunction(0);
    };

    return { searchValue, setSearchValue, handleSearch };
};