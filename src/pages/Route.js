import React from "react";
import Error from "@/pages/Error/PageIntrouvable";
import Layout from "@/components/Layout";
import { Home, APropos, Logement } from "@/pages";
import { Routes, Route } from "react-router-dom";

const Router = () => {
    return (
        <div>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/apropos" element={<APropos />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/logement/:id" element={<Logement />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </div>
    );
};

export default Router;
