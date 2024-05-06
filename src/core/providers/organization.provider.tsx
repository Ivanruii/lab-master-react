import React from "react";

interface OrganizationContextProps {
  orgName: string;
  setOrgName: (value: string) => void;
  page: number;
  setPage: (value: number) => void;
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export const OrganizationContext =
  React.createContext<OrganizationContextProps>({
    orgName: "",
    setOrgName: () => {},
    page: 0,
    setPage: () => {},
    searchValue: "",
    setSearchValue: () => {},
  });

interface OrganizationContextProviderProps {
  children: React.ReactNode;
}

export const OrganizationContextProvider: React.FC<
  OrganizationContextProviderProps
> = ({ children }) => {
  const [orgName, setOrgNameState] = React.useState<string>(() => {
    const storedOrgName = sessionStorage.getItem("orgName");
    return storedOrgName ? storedOrgName : "lemoncode";
  });

  const [searchValue, setSearchValueState] = React.useState<string>(() => {
    const storedSearchValue = sessionStorage.getItem("searchValue");
    return storedSearchValue ? storedSearchValue : "lemoncode";
  });

  const [page, setPageState] = React.useState<number>(0);

  const setOrgName = (value: string) => {
    sessionStorage.setItem("orgName", value);
    setOrgNameState(value);
  };

  const setSearchValue = (value: string) => {
    sessionStorage.setItem("searchValue", value);
    setSearchValueState(value);
  };

  React.useEffect(() => {
    const storedPage = sessionStorage.getItem("page");
    if (storedPage) {
      setPageState(parseInt(storedPage, 10));
    }
  }, []);

  const setPage = (value: number) => {
    sessionStorage.setItem("page", value.toString());
    setPageState(value);
  };

  return (
    <OrganizationContext.Provider
      value={{
        orgName,
        setOrgName,
        page,
        setPage,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </OrganizationContext.Provider>
  );
};
