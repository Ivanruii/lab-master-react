import React, { useContext } from "react";
import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
} from "@mui/material";
import { useQuery } from "react-query";
import { OrganizationContext } from "../../core/providers/organization.provider";
import { MemberTableRows } from "./components/organization-members-table-rows.component";
import { MemberTableHeader } from "./components/organization-members-table-header.component";
import { OrganizationMembersTableComponent } from "./organization-members-table.component";

export const OrganizationMembersTablePod: React.FC = () => {
  const { orgName } = useContext(OrganizationContext);
  const [page, setPage] = React.useState<number>(0);
  const [perPage, setPerPage] = React.useState<number>(10);

  const { data: members = [], isLoading } = useQuery<Member[]>(
    ["members", orgName, page, perPage],
    async () => {
      const response = await fetch(
        `https://api.github.com/orgs/${orgName}/members`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();

      return json;
    }
  );

  const filteredMembers = members.slice(page * perPage, (page + 1) * perPage);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <OrganizationMembersTableComponent
          members={members}
          filteredMembers={filteredMembers}
          perPage={perPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      )}
    </>
  );
};
