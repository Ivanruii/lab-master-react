import React from "react";
import { DefaultLayout } from "../layouts/default.layout";
import { OrganizationMembersTablePod } from "../pods/organization-members-table/organization-members-table.pod";
import { SearchOrganizationPod } from "../pods/search-organization/search-organization.pod";
import { OrganizationContextProvider } from "../core/providers/organization.provider";
import { Header } from "../common/components/header.component";

export const GithubOrgsListScene: React.FC = () => {
  return (
    <DefaultLayout>
      <OrganizationContextProvider>
        <Header
          pageTitle="GITHUB ORGS"
          searchComponent={<SearchOrganizationPod />}
        />
        <OrganizationMembersTablePod />
      </OrganizationContextProvider>
    </DefaultLayout>
  );
};
