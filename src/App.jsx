import React from "react";
import { Navbar, Home, AuthForm, PostForm } from "./components";
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
            </Routes>
        </>
    );
}

export default App;
