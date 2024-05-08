import React from "react";
import { useLocation } from "react-router-dom";
import { CharacterDetailComponent } from "./character-detail.component";

export const CharactersDetailPod: React.FC = () => {
  const location = useLocation();
  const character = location.state as Character;
  const [episodes, setEpisodes] = React.useState<string[]>([]);
  const [showAllEpisodes, setShowAllEpisodes] = React.useState(false);

  React.useEffect(() => {
    if (character) {
      const fetchEpisodes = async () => {
        try {
          const episodesData = await Promise.all(
            character.episode
              .slice(0, showAllEpisodes ? character.episode.length : 3)
              .map(async (episodeUrl) => {
                const response = await fetch(episodeUrl);
                const data = await response.json();
                return data.name;
              })
          );
          setEpisodes(episodesData);
        } catch (error) {
          console.error("Error fetching episodes:", error);
        }
      };
      fetchEpisodes();
    }
  }, [character, showAllEpisodes]);

  const handleToggleEpisodes = () => {
    setShowAllEpisodes(!showAllEpisodes);
  };

  return (
    <CharacterDetailComponent
      character={character}
      episodes={episodes}
      handleToggleEpisodes={handleToggleEpisodes}
      showAllEpisodes={showAllEpisodes}
    />
  );
};
