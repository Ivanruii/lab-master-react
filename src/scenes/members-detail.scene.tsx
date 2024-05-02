import { Avatar, Button } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { switchRoutes } from "../core/router/routes";
import { DefaultLayout } from "../layouts/default.layout";
export const MembersDetailScene: React.FC = () => {
  const location = useLocation();

  const member = location.state as Member;

  return (
    <>
      <DefaultLayout>
        <h2>Details Page</h2>
        {member && (
          <div>
            <Avatar src={member.avatar_url} alt={`${member.login} profile avatar`} />
            <p>Name: {member.login}</p>
          </div>
        )}
        <Link to={switchRoutes.githubOrgs}>
          <Button variant="contained">Go Back!</Button>
        </Link>
      </DefaultLayout >
    </>
  );
};