import {
  TableContainer,
  Paper,
  Table,
  TableBody,
  TablePagination,
} from "@mui/material";
import { MemberTableHeader } from "./components/organization-members-table-header.component";
import { MemberTableRows } from "./components/organization-members-table-rows.component";
import React from "react";

interface OrganizationMembersTableComponentProps {
  members: Member[];
  filteredMembers: Member[];
  perPage: number;
  page: number;
  handleChangePage: (_: unknown, newPage: number) => void;
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const OrganizationMembersTableComponent: React.FC<
  OrganizationMembersTableComponentProps
> = (props) => {
  const {
    members,
    filteredMembers,
    perPage,
    page,
    handleChangePage,
    handleChangeRowsPerPage,
  } = props;
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <MemberTableHeader />
          <TableBody>
            {filteredMembers.map((member) => (
              <MemberTableRows key={member.id} member={member} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={members.length}
        rowsPerPage={perPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};
