import React from "react";
import { DefaultLayout } from "../layouts/default.layout";
import { CharactersDetailPod } from "../pods/character-detail/character-detail.pod";

export const CharactersDetailScene: React.FC = () => {
  return (
    <DefaultLayout>
      <CharactersDetailPod />
    </DefaultLayout>
  );
};
