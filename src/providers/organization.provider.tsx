import React from "react";

interface OrganizationContextProps {
    orgName: string;
    setOrgName: (value: string) => void;
    page: number;
    setPage: (value: number) => void;
    searchValue: string;
    setSearchValue: (value: string) => void;
};

export const OrganizationContext = React.createContext<OrganizationContextProps>({
    orgName: "",
    setOrgName: (_value: string) => { },
    page: 0,
    setPage: (_value: number) => { },
    searchValue: "",
    setSearchValue: (_value: string) => { },
});

export const OrganizationContextProvider = (props) => {
    const [orgName, setOrgName] = React.useState<string>("lemoncode");
    const [searchValue, setSearchValue] = React.useState<string>("lemoncode");
    const [page, setPage] = React.useState<number>(0);

    return (
        <OrganizationContext.Provider value={{ orgName, setOrgName, page, setPage, searchValue, setSearchValue }}>
            {props.children}
        </OrganizationContext.Provider>
    );
};