import React, { useState } from 'react'
import { auth } from "../../firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className='signin-container'>
            <form onSubmit={signUp}>
                <h1>Create an account</h1>
                <input
                    type="email"
                    placeholder='enter the email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder='enter the password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit'>sing up here</button>
            </form>
        </div>
    )
}

export default SignUp
