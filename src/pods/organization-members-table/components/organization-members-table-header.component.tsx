import { TableHead, TableRow, TableCell } from "@mui/material";
import React from "react";

export const MemberTableHeader: React.FC = () => (
  <TableHead>
    <TableRow>
      <TableCell>ID</TableCell>
      <TableCell>Avatar</TableCell>
      <TableCell>Name</TableCell>
      <TableCell>Actions</TableCell>
    </TableRow>
  </TableHead>
);
