import React from "react";
import { DefaultLayout } from "../layouts/default.layout";
import { RedirectionLettersPod } from "../pods/redirection-letters/redirection-letters.pod";

export const Landing: React.FC = () => {
  return (
    <DefaultLayout>
      <RedirectionLettersPod />
    </DefaultLayout>
  );
};
