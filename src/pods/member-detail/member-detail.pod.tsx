import React from "react";
import { Avatar, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { switchRoutes } from "../../core/router/routes";

export const MemberDetailPod: React.FC = () => {
  const location = useLocation();

  const member = location.state as Member;
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