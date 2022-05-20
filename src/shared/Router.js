import React from "react";
import { Routes, Route } from "react-router-dom";
import SigninFinal from "../pages/Sign/Signin/SigninFinal";
import SignupFinal from "../pages/Sign/Signup/SignupFinal";
import MyPageFinal from "../pages/MyPage/MyPage";
import FeedFinal from "../pages/Feed/FeedFinal";
import KakaoLogin from "../pages/Sign/KakaoLogin";
import Ranking from "../pages/Ranking/Ranking";
import Main from "../pages/Main/Main";
import MapPage from "../pages/Map/MapPage";
import QuestPage from "../pages/Quest/QuestPage";

import Chat from "../pages/Chat/Chat";
import LandingPage from "../pages/Chat/LandingPage";

import API_TEST from "../APITEST";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" exact element={<Main />} />
            <Route path="/map" exact element={<MapPage />} />
            <Route path="/quest" exact element={<QuestPage />} />
            <Route
                path="/api/players/kakaoauth"
                exact
                element={<KakaoLogin />}
            />
            <Route path="/mypage" element={<MyPageFinal />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/signin" element={<SigninFinal />} />
            <Route path="/signup" element={<SignupFinal />} />
            <Route path="/feed" element={<FeedFinal />} />
            <Route
                path="/chat/:userId/:nickname/:roomName"
                element={<Chat />}
            />

            <Route exact path="/landing" element={<LandingPage />} />

            <Route exact path="/apitest" element={<API_TEST />} />
        </Routes>
    );
}
