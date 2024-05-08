import React from "react";
import { OrganizationContextProvider } from "../core/providers/organization.provider";
import { HeaderLayout } from "../layouts/header.layout";
import { OrganizationMembersTablePod } from "../pods/organization-members-table/organization-members-table.pod";
import { SearchOrganizationPod } from "../pods/search-organization/search-organization.pod";

export const GithubOrgsListScene: React.FC = () => {
  return (
    <OrganizationContextProvider>
      <HeaderLayout
        headerPageTitle="GITHUB ORGS"
        headerSearchPod={<SearchOrganizationPod />}
      >
        <OrganizationMembersTablePod />
      </HeaderLayout>
    </OrganizationContextProvider>
  );
};
