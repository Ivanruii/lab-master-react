import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MembersDetailScene } from "../../scenes/members-detail.scene";
import { GithubOrgsListScene } from "../../scenes/github-orgs.scene";
import { Landing } from "../../scenes/landing.scene";
import { LoginPageScene } from "../../scenes/login.scene";
import { RickyMortyScene } from "../../scenes/rickymorty.scene";
import { switchRoutes } from "./routes";
import { CharactersDetailScene } from "../../scenes/characters-detail.scene";

export const RouterComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path={switchRoutes.root} element={<LoginPageScene />} />
                <Route path={switchRoutes.landing} element={<Landing />} />
                <Route path={switchRoutes.githubOrgs} element={<GithubOrgsListScene />} />
                <Route path={switchRoutes.rickyMorty} element={<RickyMortyScene />} />
                <Route path={switchRoutes.membersDetailScene} element={<MembersDetailScene />} />
                <Route path={switchRoutes.charactersDetailScene} element={<CharactersDetailScene />} />
            </Routes>
        </Router>
    );
};