import React from "react";

import "./input.css";

function Input({ label, name, type, handleChange, value, showPassword, password }) {
    return (
        <div className='auth-input-container'>
            <label htmlFor={name}>{label}</label>

            <div className='auth-input'>
                <input
                    type={type}
                    id={name}
                    name={name}
                    maxLength={60}
                    value={value}
                    onChange={handleChange}
                    required
                    autoComplete='false'
                />

                {password && (
                    <button type='button' className='auth-input-button' onClick={showPassword}>
                        {type === "password" ? <i className='ri-eye-off-fill'></i> : <i className='ri-eye-fill'></i>}
                    </button>
                )}
            </div>
        </div>
    );
}

export default Input;
