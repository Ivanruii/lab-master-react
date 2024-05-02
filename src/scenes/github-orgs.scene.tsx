import React from "react";
import { DefaultLayout } from "../layouts/default.layout";
import { OrganizationMembersTablePod } from "../pods/organization-members-table/organization-members-table.pod";
import { SearchOrganizationPod } from "../pods/search-organization/search-organization.pod";
import { OrganizationContextProvider } from "../providers/organization.provider";

export const GithubOrgsListScene: React.FC = () => {
    return (
        <DefaultLayout>
            <OrganizationContextProvider>
                <SearchOrganizationPod />
                <OrganizationMembersTablePod />
            </OrganizationContextProvider>
        </DefaultLayout>
    );
};