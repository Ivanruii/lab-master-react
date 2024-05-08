import { Avatar, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { switchRoutes } from "../../core/router/routes";

interface MemberDetailComponentProps {
  member: Member;
}

export const MemberDetailComponent: React.FC<MemberDetailComponentProps> = (
  props
) => {
  const { member } = props;
  return (
    <>
      <h2>Details Page</h2>
      {member && (
        <div>
          <Avatar
            src={member.avatar_url}
            alt={`${member.login} profile avatar`}
          />
          <p>Name: {member.login}</p>
        </div>
      )}
      <Link to={switchRoutes.githubOrgs}>
        <Button variant="contained">Go Back!</Button>
      </Link>
    </>
  );
};
