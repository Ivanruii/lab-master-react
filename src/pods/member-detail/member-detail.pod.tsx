import React from "react";
import { useLocation } from "react-router-dom";
import { MemberDetailComponent } from "./member-detail.component";

export const MemberDetailPod: React.FC = () => {
  const location = useLocation();

  const member = location.state as Member;
  return <MemberDetailComponent member={member} />;
};
