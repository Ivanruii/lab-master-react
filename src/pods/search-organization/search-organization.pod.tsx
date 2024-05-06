import React from "react";
import { Button, TextField } from "@mui/material";
import { OrganizationContext } from "../../core/providers/organization.provider";

export const SearchOrganizationPod: React.FC = () => {
  const { setOrgName } = React.useContext(OrganizationContext);
  const [searchTerm, setSearchTerm] = React.useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOrgName(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "4px" }}>
      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
};
