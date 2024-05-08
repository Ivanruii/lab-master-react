import React from "react";
import { DefaultLayout } from "../layouts/default.layout";
import { MemberDetailPod } from "../pods/member-detail/member-detail.pod";

export const MembersDetailScene: React.FC = () => {
  return (
    <DefaultLayout>
      <MemberDetailPod />
    </DefaultLayout>
  );
};
