import React, { useContext, useState } from "react";
import { TextField } from "@mui/material";
import { OrganizationContext } from "../../providers/organization.provider";

export const SearchOrganizationPod: React.FC = () => {
  const { setOrgName } = useContext(OrganizationContext);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    setOrgName(newSearchTerm);
  };

  return (
    <TextField
      label="Search"
      variant="outlined"
      value={searchTerm}
      onChange={handleSearchChange}
    />
  );
};
