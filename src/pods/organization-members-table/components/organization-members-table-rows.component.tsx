import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button, Stack, TableCell, TableRow } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const MemberTableRows: React.FC<{ member: Member }> = ({ member }) => {
    return (
        <TableRow key={member.id}>
            <TableCell>{member.id}</TableCell>
            <TableCell>
                <img src={member.avatar_url} alt={member.login} width={100} />
            </TableCell>
            <TableCell>
                <Link to={`/member-detail/${member.login}`} state={member}>{member.login}</Link>
            </TableCell>
            <TableCell>
                <Stack direction="row" spacing={2}>
                    <Link to={`/member-detail/${member.login}`} state={member}>
                        <Button variant="outlined" startIcon={<DisplaySettingsIcon />}>
                            Details
                        </Button>
                    </Link>
                    <Link to={`https://github.com/${member.login}/`}>
                        <Button variant="contained" color="primary" startIcon={<GitHubIcon />}>
                            GitHub
                        </Button>
                    </Link>
                </Stack>
            </TableCell>
        </TableRow>
    )
};