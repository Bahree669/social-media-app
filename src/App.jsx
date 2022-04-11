import React from "react";
import { Navbar, Home, AuthForm, PostForm, ProfilePage } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Route
                    path='/'
                    element={
                        <>
                            <Navbar />
                            <Home />
                        </>
                    }
                />
                <Route path='/auth' element={<AuthForm />} />
                <Route path='/makepost' element={<PostForm />} />
                <Route path='/profile' element={<ProfilePage />} />
            </Routes>
        </>
    );
}

export default App;
