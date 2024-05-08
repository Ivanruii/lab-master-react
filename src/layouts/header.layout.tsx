import React from "react";
import { Header } from "../common/components/header.component";

interface HeaderLayoutProps {
  headerPageTitle: string;
  headerSearchPod: React.ReactNode;
  children: React.ReactNode;
}

const containerStyles: React.CSSProperties = {
  maxWidth: "140ch",
  padding: "1rem",
  margin: "auto",
};

export const HeaderLayout: React.FC<HeaderLayoutProps> = ({
  headerPageTitle,
  headerSearchPod,
  children,
}) => {
  return (
    <>
      <Header pageTitle={headerPageTitle} searchPod={headerSearchPod} />
      <main style={containerStyles}>{children}</main>
    </>
  );
};
