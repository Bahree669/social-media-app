import React, { useEffect, useState } from "react";
import Input from "./Input/Input";
import SecondaryNavbar from "../Navbar/SecondaryNavbar";
import { useNavigate } from "react-router-dom";
import { logInUser, signUpUser, clearError, stopRedirect } from "../../store/userReducer";
import { useDispatch, useSelector } from "react-redux";

import "./authform.css";

function AuthFom() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = localStorage.getItem("profile");
    const { redirect, error } = useSelector((state) => state.entities.users);
    // login or sign up form state
    const [login, setLogin] = useState(true);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    // showing password or not
    const [showPassword, setShowPassword] = useState(false);
    // state if the password does not match
    const [authError, setAuthError] = useState({ state: false, text: "" });

    useEffect(() => {
        if (error.state) {
            setTimeout(() => {
                dispatch(clearError());
            }, 3000);
        }
    }, [error]);

    useEffect(() => {
        if (redirect) {
            dispatch(stopRedirect());

            setTimeout(() => {
                navigate("/");
            }, 1000);
        }
    }, [redirect]);

    function handleSubmit(e) {
        e.preventDefault();

        if (login) {
            dispatch(logInUser(formData));
        } else {
            dispatch(signUpUser(formData));
        }
    }

    function handleChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        setFormData({ ...formData, [name]: value });
    }

    useEffect(() => {
        if ((formData.password.length > 0) & (formData.confirmPassword.length > 0)) {
            if (formData.password === formData.confirmPassword) {
                setAuthError({ ...authError, state: false, text: "" });
            } else {
                setAuthError({
                    ...authError,
                    state: true,
                    text: "Password and confirm password does not match please change them",
                });
            }
        } else {
            setAuthError({ ...authError, state: false, text: "" });
        }
    }, [formData]);

    function handleShowPassword() {
        setShowPassword((prev) => !prev);
    }

    function authState() {
        setLogin((prev) => !prev);

        setFormData({
            ...formData,
            firstName: "",
            lastName: "",
            email: "",
            userName: "",
            password: "",
            confirmPassword: "",
        });
    }

    const AuthErrorComponent = ({ text }) => {
        return (
            <div className='auth-error' aria-haspopup='true' aria-hidden={authError}>
                <p>{text}</p>

                <button type='button'>
                    <i className='ri-close-circle-fill'></i>
                </button>
            </div>
        );
    };

    function backHomebutton() {
        navigate("/");
    }

    return (
        <div className='auth-form-container'>
            <div className='auth-container-left'>
                <SecondaryNavbar title={login ? "Log In" : "Sign Up"} backButton={backHomebutton} />

                <form onSubmit={handleSubmit}>
                    {error.state && <AuthErrorComponent text={error.message} />}

                    {!login && (
                        <>
                            <Input
                                name={"firstName"}
                                value={formData.firstName}
                                label={"first name"}
                                handleChange={handleChange}
                                type={"text"}
                            />

                            <Input
                                name={"lastName"}
                                value={formData.lastName}
                                label={"last name"}
                                handleChange={handleChange}
                                type={"text"}
                            />

                            <Input
                                name={"userName"}
                                value={formData.userName}
                                label={"username"}
                                handleChange={handleChange}
                                type={"text"}
                            />
                        </>
                    )}

                    <Input
                        name={"email"}
                        value={formData.email}
                        label={"email"}
                        handleChange={handleChange}
                        type={"email"}
                    />

                    <Input
                        name={"password"}
                        value={formData.password}
                        label={"password"}
                        handleChange={handleChange}
                        type={!showPassword ? "password" : "text"}
                        showPassword={handleShowPassword}
                        password={true}
                    />

                    {!login && (
                        <Input
                            name={"confirmPassword"}
                            value={formData.confirmPassword}
                            label={"confirm password"}
                            handleChange={handleChange}
                            type={!showPassword ? "password" : "text"}
                            showPassword={handleShowPassword}
                        />
                    )}

                    <button type='submit' className='auth-submit'>
                        {login ? "SIGN IN" : "SIGN UP"}
                    </button>

                    <button type='button' className='auth-change' onClick={authState}>
                        {!login ? "Have an account? sign in!" : `Don't have an account? sign up!`}
                    </button>
                </form>
            </div>

            <div aria-hidden='true' className='auth-container-right'>
                <p>Share your momment with Kilogram.</p>
            </div>
        </div>
    );
}

export default AuthFom;
